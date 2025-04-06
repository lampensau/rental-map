import { ID_PATTERNS } from '$lib/types';
import { createLogger } from './logger';

const logger = createLogger('validation');

/**
 * Generic validation function for entity IDs
 * 
 * @param type The type of entity to validate ('manufacturer', 'product', 'rental-company')
 * @param id The ID to validate
 * @returns An object with validation result and error message if any
 */
export function validateEntityId(type: 'manufacturer' | 'product' | 'rental-company', id: string): {
  valid: boolean;
  message?: string;
} {
  if (!id) {
    return { valid: false, message: 'ID ist erforderlich' };
  }

  switch (type) {
    case 'manufacturer':
      if (!isValidManufacturerId(id)) {
        return { valid: false, message: 'Hersteller-ID muss 3 Ziffern enthalten' };
      }
      break;
    case 'product':
      if (!isValidProductId(id)) {
        return { valid: false, message: 'Produkt-ID muss dem Format XXX-XXXX-XXXX entsprechen' };
      }
      break;
    case 'rental-company':
      if (!isValidRentalCompanyId(id)) {
        return { valid: false, message: 'Firmen-ID muss mit K beginnen und mindestens 4 Ziffern enthalten' };
      }
      break;
    default:
      return { valid: false, message: 'Unbekannter Entitätstyp' };
  }

  return { valid: true };
}

/**
 * Validates a manufacturer ID (must be 3 digits)
 */
export function isValidManufacturerId(id: string): boolean {
  return ID_PATTERNS.MANUFACTURER.test(id);
}

/**
 * Validates a product ID (must match pattern <manufacturer-id>-<xxxx>-<product-id>)
 */
export function isValidProductId(id: string): boolean {
  return ID_PATTERNS.PRODUCT.test(id);
}

/**
 * Validates a product ID with flexible format (allowing different separators)
 */
export function isValidProductFlexible(id: string): boolean {
  return ID_PATTERNS.PRODUCT_FLEXIBLE.test(id);
}

/**
 * Validates a rental company ID (must start with K followed by at least 4 digits)
 */
export function isValidRentalCompanyId(id: string): boolean {
  return ID_PATTERNS.RENTAL_COMPANY.test(id);
}

/**
 * Normalizes a product ID by ensuring it has the correct format with dashes
 * Input can be with or without dashes or other separators
 */
export function normalizeProductId(id: string): string {
  const match = id.match(ID_PATTERNS.PRODUCT_FLEXIBLE);
  if (!match) {
    return id; // If it doesn't match, return as is
  }

  // Extract the parts and reconstruct with dashes
  const [, manufacturerId, middle, productId] = match;
  return `${manufacturerId}-${middle}-${productId}`;
}

/**
 * Extracts the manufacturer ID from a product ID
 */
export function extractManufacturerIdFromProductId(productId: string): string | null {
  // Try to match against the flexible pattern (allows different separators)
  const match = productId.match(ID_PATTERNS.PRODUCT_FLEXIBLE);
  if (!match) {
    logger.warn(`Could not extract manufacturer ID from product ID: ${productId}`);
    return null;
  }

  // Return the first capture group (manufacturer ID)
  return match[1];
}

/**
 * Generates a valid product ID from its components
 */
export function generateProductId(manufacturerId: string, middle: string, productId: string): string {
  // Ensure manufacturerId is a 3-digit string
  if (!isValidManufacturerId(manufacturerId)) {
    throw new Error(`Invalid manufacturer ID: ${manufacturerId}. Must be a 3-digit string.`);
  }

  // Ensure middle part is a 4-character string
  if (middle.length !== 4) {
    throw new Error(`Invalid middle part: ${middle}. Must be a 4-character string.`);
  }

  return `${manufacturerId}-${middle}-${productId}`;
}

/**
 * Validates an import data structure for rental companies
 */
export function validateImportData(data: any): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  // Check if data is an array
  if (!Array.isArray(data)) {
    errors.push('Import data must be an array');
    return { valid: false, errors };
  }

  // Validate each item in the array
  data.forEach((item, index) => {
    // Check if rental company ID is valid
    if (item.id) {
      if (!isValidRentalCompanyId(item.id)) {
        errors.push(`Invalid rental company ID at position ${index}: ${item.id}. Must start with K followed by at least 4 digits.`);
      }
    } else {
      errors.push(`Missing rental company ID at position ${index}`);
    }

    // Check if inventory items exist
    if (item.inventory && Array.isArray(item.inventory)) {
      item.inventory.forEach((inventoryItem: any, invIndex: number) => {
        if (inventoryItem.productId) {
          // Try to extract manufacturer ID from product ID
          const manufacturerId = extractManufacturerIdFromProductId(inventoryItem.productId);
          if (!manufacturerId) {
            errors.push(`Invalid product ID format at position ${index}, inventory item ${invIndex}: ${inventoryItem.productId}`);
          }
        } else {
          errors.push(`Missing product ID at position ${index}, inventory item ${invIndex}`);
        }
      });
    }
  });

  return { valid: errors.length === 0, errors };
} 