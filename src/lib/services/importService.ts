import type { Manufacturer, Product, RentalCompany, ImportRentalCompany, ImportInventoryItem, InventoryItem } from '$lib/types';
import { createLogger } from '$lib/utils/logger';
import {
  extractManufacturerIdFromProductId,
  isValidRentalCompanyId,
  normalizeProductId,
  validateImportData,
  isValidProductFlexible
} from '$lib/utils/validation';
import * as firestoreService from './firestore';
import * as geocodingService from './geocoding';
import { formatStandardAddress } from '$lib/utils/countryUtils';

const logger = createLogger('importService');

/**
 * Cleans a product name by:
 * 1. Removing the manufacturer name from the beginning
 * 2. Truncating at special characters like commas and parentheses
 * 3. Trimming whitespace
 * 
 * @param productName The original product name
 * @param manufacturerName The manufacturer name to remove (if present)
 * @returns Cleaned product name
 */
function cleanProductName(productName: string, manufacturerName?: string): string {
  if (!productName) return '';

  let cleanedName = productName.trim();

  // Step 1: Remove manufacturer name from the beginning if present
  if (manufacturerName) {
    const regex = new RegExp(`^${manufacturerName}\\s+`, 'i');
    cleanedName = cleanedName.replace(regex, '');
  }

  // Step 2: Truncate at special characters
  const specialChars = [',', '(', '/', '\\', '-', '|'];
  let truncateIndex = cleanedName.length;

  for (const char of specialChars) {
    const index = cleanedName.indexOf(char);
    if (index !== -1 && index < truncateIndex) {
      truncateIndex = index;
    }
  }

  cleanedName = cleanedName.substring(0, truncateIndex).trim();

  return cleanedName;
}

/**
 * Parses CSV data into the import format
 * Expected format:
 * - Company line: K1234, Company Name, Street Address, City, Country, PostalCode, Website, Phone, Email
 * - Product lines: ProductID, ProductName, ManufacturerName, Quantity
 */
export function parseCSV(csvString: string): ImportRentalCompany[] {
  logger.debug('Parsing CSV data');
  const lines = csvString.split('\n').map((line) => line.trim()).filter(Boolean);
  const rentalCompanies: Record<string, ImportRentalCompany> = {};
  let currentCompany: ImportRentalCompany | null = null;

  for (const line of lines) {
    const parts = line.split(',').map((part) => part.trim());

    // If this line starts with K and has at least 7 parts, it's a company line with name and city included
    if (parts[0].startsWith('K') && parts.length >= 7) {
      const [id, name, address, city, country, postalCode, website, phone, email] = parts;

      currentCompany = {
        id,
        name,
        address,
        city,
        country,
        postalCode,
        website,
        phone,
        email,
        inventory: []
      };
      rentalCompanies[id] = currentCompany;
    }
    // Otherwise, if we have a current company and at least 4 parts, it's a product line
    else if (currentCompany && parts.length >= 4) {
      const [productId, productName, manufacturerName, quantityStr] = parts;
      const quantity = parseInt(quantityStr, 10);

      if (!isNaN(quantity) && quantity > 0) {
        currentCompany.inventory.push({
          productId,
          productName,
          manufacturerName,
          quantity
        });
      } else {
        logger.warn(`Invalid quantity "${quantityStr}" for product ${productId}`);
      }
    } else {
      logger.warn(`Ignoring invalid line: ${line}`);
    }
  }

  return Object.values(rentalCompanies);
}

/**
 * Parse JSON string into an array of rental companies with inventory
 */
export function parseJSON(jsonString: string): ImportRentalCompany[] {
  try {
    logger.debug('Parsing JSON data');
    const data = JSON.parse(jsonString);

    // If data is already in the expected format, return it
    if (Array.isArray(data)) {
      return data;
    }

    // If it's an object with rental companies as properties
    if (typeof data === 'object' && data !== null) {
      // Check if it has a rentalCompanies property
      if (data.rentalCompanies && Array.isArray(data.rentalCompanies)) {
        return data.rentalCompanies;
      }

      // Otherwise, try to convert the object to an array
      return Object.values(data).filter(item =>
        typeof item === 'object' &&
        item !== null &&
        'id' in item &&
        typeof item.id === 'string' &&
        item.id.startsWith('K')
      ) as ImportRentalCompany[];
    }

    throw new Error('Invalid JSON format: Expected an array or object with rental companies');
  } catch (error) {
    logger.error('Error parsing JSON:', error);
    throw new Error(`Invalid JSON: ${error instanceof Error ? error.message : String(error)}`);
  }
}

/**
 * Processes imported data and updates/creates manufacturers, products, and rental companies
 */
export async function processImportData(
  importData: ImportRentalCompany[],
  options: {
    importManufacturers: boolean;
    importProducts: boolean;
    importRentalCompanies: boolean;
    createMissingEntities?: boolean;
    resolutions?: {
      [entityId: string]: {
        action: 'create' | 'reference' | 'skip';
        name?: string;
        referenceId?: string;
      }
    }
  } = {
      importManufacturers: true,
      importProducts: true,
      importRentalCompanies: true,
      createMissingEntities: false,
      resolutions: {}
    }
): Promise<{
  created: { manufacturers: number, products: number, rentalCompanies: number },
  updated: { manufacturers: number, products: number, rentalCompanies: number },
  errors: string[],
  missingManufacturers?: Array<{ id: string, referenceName?: string, referencedIn: string }>
}> {
  logger.debug(`Processing import data with ${importData.length} rental companies and options:`, options);

  // Validate import data
  const errors: string[] = [];

  // Validate required fields
  for (const importRC of importData) {
    // Validate ID format
    if (!importRC.id || !importRC.id.match(/^K\d{4,6}$/)) {
      errors.push(`Ungültige Rental Company ID: ${importRC.id}. Format muss KXXXX sein.`);
    }

    // Validate required fields
    if (!importRC.name) {
      errors.push(`Fehlender Name für Rental Company ${importRC.id}`);
    }

    // Validate required fields for geocoding
    if (!importRC.address) {
      errors.push(`Fehlende Adresse für Rental Company ${importRC.id}`);
    }

    if (!importRC.city) {
      errors.push(`Fehlende Stadt für Rental Company ${importRC.id}`);
    }

    if (!importRC.postalCode) {
      errors.push(`Fehlende Postleitzahl für Rental Company ${importRC.id}`);
    }

    if (!importRC.country) {
      errors.push(`Fehlendes Land für Rental Company ${importRC.id}`);
    }

    // Validate inventory
    if (!importRC.inventory || !Array.isArray(importRC.inventory) || importRC.inventory.length === 0) {
      errors.push(`Leeres oder ungültiges Inventar für Rental Company ${importRC.id}`);
    } else {
      // Validate inventory items
      for (const item of importRC.inventory) {
        if (!item.productId) {
          errors.push(`Fehlende Produkt-ID im Inventar von Rental Company ${importRC.id}`);
        }

        if (typeof item.quantity !== 'number' || item.quantity <= 0) {
          errors.push(`Ungültige Menge für Produkt ${item.productId} in Rental Company ${importRC.id}`);
        }
      }
    }
  }

  if (errors.length > 0) {
    return {
      created: { manufacturers: 0, products: 0, rentalCompanies: 0 },
      updated: { manufacturers: 0, products: 0, rentalCompanies: 0 },
      errors
    };
  }

  const stats = {
    created: { manufacturers: 0, products: 0, rentalCompanies: 0 },
    updated: { manufacturers: 0, products: 0, rentalCompanies: 0 }
  };

  // Get existing data
  const existingManufacturers = await firestoreService.getManufacturers(true);
  const existingProducts = await firestoreService.getProducts(undefined, true);
  const existingRentalCompanies = await firestoreService.getRentalCompanies({});

  // Create maps for faster lookups
  const manufacturersMap = new Map<string, Manufacturer>();
  existingManufacturers.forEach(m => manufacturersMap.set(m.id, m));

  const productsMap = new Map<string, Product>();
  existingProducts.forEach(p => productsMap.set(p.id, p));

  const rentalCompaniesMap = new Map<string, RentalCompany>();
  existingRentalCompanies.forEach(r => rentalCompaniesMap.set(r.id, r));

  // Track new entities to create
  const newManufacturers: (Omit<Manufacturer, 'id'> & { id?: string })[] = [];
  const newProducts: (Omit<Product, 'id'> & { id?: string })[] = [];
  const newRentalCompanies: (Omit<RentalCompany, 'id'> & { id?: string })[] = [];

  // Track all missing manufacturers for resolution
  const missingManufacturers: Array<{ id: string, referenceName?: string, referencedIn: string }> = [];

  // Process any resolutions provided
  if (options.resolutions && Object.keys(options.resolutions).length > 0) {
    logger.debug('Processing resolutions:', options.resolutions);

    // Handle manufacturer resolutions
    for (const [entityId, resolution] of Object.entries(options.resolutions)) {
      logger.debug(`Processing resolution for ${entityId}:`, resolution);

      // Check if it's likely a product ID based on the format
      const isProbablyProduct = entityId.indexOf('-') !== -1;

      if (isProbablyProduct && resolution.action === 'create') {
        // Clean the product name before creating it
        const cleanedProductName = cleanProductName(resolution.name || '');

        // Create the product
        if (!cleanedProductName) {
          errors.push(`Resolution error: Name is required to create product ${entityId}`);
          continue;
        }

        // Extract the manufacturer ID from the product ID
        const manufacturerId = extractManufacturerIdFromProductId(entityId);
        if (!manufacturerId) {
          errors.push(`Resolution error: Could not extract manufacturer ID from product ID: ${entityId}`);
          continue;
        }

        // Add as new product
        newProducts.push({
          name: cleanedProductName,
          manufacturerId: manufacturerId,
          isActive: true,
          id: entityId
        });

        // Add to map for future lookups
        productsMap.set(entityId, {
          id: entityId,
          name: cleanedProductName,
          manufacturerId: manufacturerId,
          isActive: true
        });

        stats.created.products++;
        logger.debug(`Created product via resolution: ${entityId} - ${cleanedProductName}`);
      }
      else if (!isProbablyProduct && resolution.action === 'create') {
        // Create the manufacturer
        if (!resolution.name) {
          errors.push(`Resolution error: Name is required to create manufacturer ${entityId}`);
          continue;
        }

        // Add as new manufacturer
        newManufacturers.push({
          name: resolution.name,
          isActive: true,
          id: entityId
        });

        // Add to map for future lookups
        manufacturersMap.set(entityId, {
          id: entityId,
          name: resolution.name,
          isActive: true
        });

        stats.created.manufacturers++;
        logger.debug(`Created manufacturer via resolution: ${entityId} - ${resolution.name}`);
      }
      else if (resolution.action === 'reference') {
        // Use existing manufacturer reference
        if (!resolution.referenceId) {
          errors.push(`Resolution error: Reference ID is required for manufacturer ${entityId}`);
          continue;
        }

        const refManufacturer = manufacturersMap.get(resolution.referenceId);
        if (!refManufacturer) {
          errors.push(`Resolution error: Referenced manufacturer ${resolution.referenceId} not found`);
          continue;
        }

        // Use reference mapping for later product creation
        logger.debug(`Using manufacturer reference: ${entityId} -> ${resolution.referenceId}`);
      }
      // If action is 'skip', we don't need to do anything
    }
  }

  // Process rental companies and their inventory
  for (const importRC of importData) {
    const existingRC = rentalCompaniesMap.get(importRC.id);

    // Process inventory items first to identify needed manufacturers and products
    const inventory: InventoryItem[] = [];
    const manufacturerIdsToCreate = new Set<string>();
    const productsToCreate: Array<{ productId: string, name: string, manufacturerId: string }> = [];
    const companyMissingManufacturers: Array<{ id: string, referenceName?: string, referencedIn: string }> = [];

    for (const item of importRC.inventory) {
      const normalizedProductId = normalizeProductId(item.productId);
      const manufacturerId = extractManufacturerIdFromProductId(normalizedProductId);

      if (!manufacturerId) {
        errors.push(`Could not extract manufacturer ID from product ID: ${item.productId}`);
        continue;
      }

      // Check if manufacturer exists or has been resolved
      const hasManufacturer = manufacturersMap.has(manufacturerId);
      const isResolved = options.resolutions && options.resolutions[manufacturerId];

      if (!hasManufacturer && !isResolved) {
        if (!options.createMissingEntities) {
          // Track missing manufacturers for user resolution if not already tracked
          if (!missingManufacturers.some(m => m.id === manufacturerId)) {
            companyMissingManufacturers.push({
              id: manufacturerId,
              referenceName: item.manufacturerName,
              referencedIn: importRC.id
            });
          }
          continue; // Skip processing this item until manufacturer is resolved
        }

        // Only add manufacturer if we have a name
        if (!item.manufacturerName) {
          errors.push(`Missing manufacturer name for ID ${manufacturerId} referenced in product ${normalizedProductId}`);
          continue;
        }

        manufacturerIdsToCreate.add(manufacturerId);

        // Add new manufacturer
        newManufacturers.push({
          name: item.manufacturerName,
          isActive: true,
          id: manufacturerId
        });

        // Add to map for future lookups
        manufacturersMap.set(manufacturerId, {
          id: manufacturerId,
          name: item.manufacturerName,
          isActive: true
        });

        stats.created.manufacturers++;
      }

      // Handle manufacturer references (if any)
      let effectiveManufacturerId = manufacturerId;
      if (isResolved && options.resolutions![manufacturerId].action === 'reference' && options.resolutions![manufacturerId].referenceId) {
        effectiveManufacturerId = options.resolutions![manufacturerId].referenceId!;
        logger.debug(`Using manufacturer reference: ${manufacturerId} -> ${effectiveManufacturerId}`);
      }
      else if (isResolved && options.resolutions![manufacturerId].action === 'skip') {
        logger.debug(`Skipping product due to manufacturer skip: ${normalizedProductId}`);
        continue; // Skip this product as the manufacturer was skipped
      }

      // Check if product exists
      if (!productsMap.has(normalizedProductId)) {
        // Clean the product name before creating it
        const cleanedProductName = cleanProductName(item.productName, item.manufacturerName);

        // Create new product with the effective manufacturer ID (which may be a reference)
        newProducts.push({
          name: cleanedProductName,
          manufacturerId: effectiveManufacturerId,
          isActive: true,
          id: normalizedProductId
        });

        // Add to map for future lookups
        productsMap.set(normalizedProductId, {
          id: normalizedProductId,
          name: cleanedProductName,
          manufacturerId: effectiveManufacturerId,
          isActive: true
        });

        stats.created.products++;
      }

      // Add to inventory
      inventory.push({
        productId: normalizedProductId,
        quantity: item.quantity
      });
    }

    // Check if we have missing manufacturers that need resolution
    if (companyMissingManufacturers.length > 0) {
      // Add to overall missing manufacturers
      missingManufacturers.push(...companyMissingManufacturers);
    }

    // Create or update rental company (if no missing manufacturers)
    if (companyMissingManufacturers.length === 0) {
      if (existingRC) {
        // Update existing rental company
        await firestoreService.updateRentalCompany(importRC.id, {
          inventory,
          // Only update other fields if provided
          ...(importRC.address && { address: importRC.address }),
          ...(importRC.city && { city: importRC.city }),
          ...(importRC.country && { country: importRC.country }),
          ...(importRC.postalCode && { postalCode: importRC.postalCode }),
          ...(importRC.website && { website: importRC.website }),
          ...(importRC.phone && { phone: importRC.phone }),
          ...(importRC.email && { email: importRC.email })
        });
        stats.updated.rentalCompanies++;
      } else {
        // Add as new rental company with the actual company ID from import data
        try {
          // Format the address for geocoding
          const formattedAddress = formatStandardAddress(
            importRC.address || '',
            importRC.postalCode || '',
            importRC.city || '',
            importRC.country || ''
          );

          // Get coordinates from geocoding service
          const coordinates = await geocodingService.geocodeAddress(formattedAddress);

          // Validate coordinates are not at null island (0,0)
          if (!coordinates || (coordinates.latitude === 0 && coordinates.longitude === 0)) {
            errors.push(`Ungültige Adresse für Geocoding: ${formattedAddress} (Firma: ${importRC.id})`);
            continue;
          }

          newRentalCompanies.push({
            name: importRC.name!, // Use the actual name from import data (non-null assertion since we validate it earlier)
            address: importRC.address || '',
            city: importRC.city || '',
            postalCode: importRC.postalCode || '',
            country: importRC.country || '',
            latitude: coordinates.latitude,
            longitude: coordinates.longitude,
            website: importRC.website,
            phone: importRC.phone,
            email: importRC.email,
            isActive: true,
            inventory,
            id: importRC.id
          });
          stats.created.rentalCompanies++;
        } catch (error) {
          errors.push(`Fehler beim Geocoding für Rental Company ${importRC.id}: ${error instanceof Error ? error.message : String(error)}`);
        }
      }
    }
  }

  // Check if we have manufacturers that need resolution
  if (missingManufacturers.length > 0 && !options.createMissingEntities) {
    logger.debug(`Found ${missingManufacturers.length} missing manufacturers that need resolution:`, missingManufacturers);
    return {
      created: { manufacturers: 0, products: 0, rentalCompanies: 0 },
      updated: { manufacturers: 0, products: 0, rentalCompanies: 0 },
      errors: [`Missing manufacturers need to be resolved: ${missingManufacturers.map(m => m.id).join(', ')}`],
      missingManufacturers
    };
  }

  // Batch import new entities
  if (newManufacturers.length > 0 || newProducts.length > 0 || newRentalCompanies.length > 0) {
    try {
      logger.debug(`Importing ${newManufacturers.length} manufacturers, ${newProducts.length} products, ${newRentalCompanies.length} rental companies`);
      await firestoreService.importData({
        manufacturers: newManufacturers,
        products: newProducts,
        rentalCompanies: newRentalCompanies
      });
    } catch (error) {
      errors.push(`Error importing data: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  return { ...stats, errors };
}

/**
 * Main import function that handles both CSV and JSON data
 */
export async function importData(
  data: string,
  format: 'csv' | 'json',
  options?: {
    importManufacturers?: boolean;
    importProducts?: boolean;
    importRentalCompanies?: boolean;
    createMissingEntities?: boolean;
    resolutions?: {
      [entityId: string]: {
        action: 'create' | 'reference' | 'skip';
        name?: string;
        referenceId?: string;
      }
    }
  }
): Promise<{
  success: boolean;
  created: { manufacturers: number, products: number, rentalCompanies: number },
  updated: { manufacturers: number, products: number, rentalCompanies: number },
  errors: string[],
  missingManufacturers?: Array<{ id: string, referenceName?: string, referencedIn: string }>
}> {
  try {
    logger.info(`Starting import of ${format} data with options:`, options);

    let importData: ImportRentalCompany[];

    // Parse data based on format
    if (format === 'csv') {
      importData = parseCSV(data);
    } else {
      importData = parseJSON(data);
    }

    logger.debug(`Parsed ${importData.length} rental companies from ${format} data`);

    // Apply options
    const importOptions = {
      importManufacturers: options?.importManufacturers !== false,
      importProducts: options?.importProducts !== false,
      importRentalCompanies: options?.importRentalCompanies !== false,
      createMissingEntities: options?.createMissingEntities === true,
      resolutions: options?.resolutions || {}
    };

    // Process the imported data with options
    const result = await processImportData(importData, importOptions);

    logger.info(`Import completed: Created ${result.created.manufacturers} manufacturers, ${result.created.products} products, ${result.created.rentalCompanies} rental companies`);
    logger.info(`Import updated: ${result.updated.rentalCompanies} rental companies`);

    if (result.errors.length > 0) {
      logger.warn(`Import completed with ${result.errors.length} errors:`, result.errors);
    }

    return {
      success: result.errors.length === 0,
      ...result
    };
  } catch (error) {
    logger.error(`Import error:`, error);
    return {
      success: false,
      created: { manufacturers: 0, products: 0, rentalCompanies: 0 },
      updated: { manufacturers: 0, products: 0, rentalCompanies: 0 },
      errors: [error instanceof Error ? error.message : String(error)]
    };
  }
} 