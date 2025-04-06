import { writable, derived, get } from 'svelte/store';
import type { Manufacturer, Product, RentalCompany, SearchFilters } from '$lib/types';
import * as firestoreService from '$lib/services/firestore';
import { createLogger } from '$lib/utils/logger';

// Create logger for this module
const logger = createLogger('rentalStore');

// Initial state
export const manufacturersStore = writable<Manufacturer[]>([]);
export const productsStore = writable<Product[]>([]);
export const rentalCompaniesStore = writable<RentalCompany[]>([]);
export const isLoading = writable<boolean>(true);
export const error = writable<string | null>(null);

// Search filters
export const searchFilters = writable<SearchFilters>({
  text: '',
  manufacturers: [],
  products: []
});

// Helper methods to get current values from stores without subscribing
// These can be used to avoid dynamic imports
export function getManufacturers(): Manufacturer[] {
  return get(manufacturersStore);
}

export function getProducts(): Product[] {
  return get(productsStore);
}

export function getRentalCompanies(): RentalCompany[] {
  return get(rentalCompaniesStore);
}

export function getSearchFilters(): SearchFilters {
  return get(searchFilters);
}

// URL parameter handling functions
export function updateURLFromFilters(filters: SearchFilters) {
  if (typeof window === 'undefined') return;

  const url = new URL(window.location.href);

  // Clear existing search params
  url.searchParams.delete('q');
  url.searchParams.delete('manufacturers');
  url.searchParams.delete('products');

  // Add text search param if it exists
  if (filters.text) {
    url.searchParams.set('q', filters.text);
  }

  // Add manufacturer ids if they exist
  if (filters.manufacturers.length > 0) {
    url.searchParams.set('manufacturers', filters.manufacturers.join(','));
  }

  // Add product ids if they exist
  if (filters.products.length > 0) {
    url.searchParams.set('products', filters.products.join(','));
  }

  // Update URL without full page reload
  window.history.replaceState({}, '', url);
  logger.debug('Updated URL with filters:', url.toString());
}

export function loadFiltersFromURL(): SearchFilters {
  if (typeof window === 'undefined') {
    return { text: '', manufacturers: [], products: [] };
  }

  const url = new URL(window.location.href);
  const textQuery = url.searchParams.get('q') || '';
  const manufacturerIds = url.searchParams.get('manufacturers')?.split(',').filter(Boolean) || [];
  const productIds = url.searchParams.get('products')?.split(',').filter(Boolean) || [];

  logger.debug('Loaded filters from URL:', { textQuery, manufacturerIds, productIds });

  return {
    text: textQuery,
    manufacturers: manufacturerIds,
    products: productIds
  };
}

export function syncFiltersWithURL() {
  const urlFilters = loadFiltersFromURL();
  searchFilters.set(urlFilters);
}

// Load initial data
export async function loadInitialData(forceRefresh = false) {
  isLoading.set(true);
  error.set(null);

  try {
    logger.debug(`Loading initial data (forceRefresh: ${forceRefresh})...`);
    const [manufacturers, products, rentalCompanies] = await Promise.all([
      firestoreService.getManufacturers(forceRefresh),
      firestoreService.getProducts(undefined, forceRefresh),
      firestoreService.getRentalCompanies({}, forceRefresh)
    ]);

    logger.debug(`Loaded ${manufacturers.length} manufacturers:`, manufacturers.map(m => m.id));
    logger.debug(`Loaded ${products.length} products:`, products.map(p => p.id));
    logger.debug(`Loaded ${rentalCompanies.length} rental companies`);

    // Debug inventory and its related products and manufacturers
    rentalCompanies.forEach(company => {
      logger.debug(`Company ${company.name} (${company.id}) has ${company.inventory.length} inventory items`);
      company.inventory.forEach(item => {
        const product = products.find(p => p.id === item.productId);
        if (product) {
          const manufacturer = manufacturers.find(m => m.id === product.manufacturerId);
          logger.debug(`  - Product: ${product.name} (${product.id}), Manufacturer: ${manufacturer?.name || 'Unknown'} (${product.manufacturerId}), Quantity: ${item.quantity}`);
        } else {
          logger.warn(`  - Product not found: ${item.productId}, Quantity: ${item.quantity}`);
        }
      });
    });

    manufacturersStore.set(manufacturers);
    productsStore.set(products);
    rentalCompaniesStore.set(rentalCompanies);

    // Load filters from URL after data is loaded
    syncFiltersWithURL();
  } catch (err) {
    logger.error('Failed to load initial data:', err);
    error.set(err instanceof Error ? err.message : 'Unknown error loading data');
  } finally {
    isLoading.set(false);
  }
}

// Filtered results based on search criteria
export const filteredRentalCompanies = derived(
  [rentalCompaniesStore, searchFilters, isLoading],
  ([$rentalCompanies, $searchFilters, $isLoading]) => {
    if ($isLoading) return [];

    logger.debug('Filtering rental companies with filters:', $searchFilters);

    const filtered = $rentalCompanies.filter((company) => {
      // Text search
      if ($searchFilters.text) {
        const searchableText = createSearchableText(company);
        if (!searchableText.includes($searchFilters.text.toLowerCase())) {
          return false;
        }
      }

      // Manufacturer filter
      if ($searchFilters.manufacturers.length > 0) {
        const companyManufacturerIds = getCompanyManufacturerIds(company);
        logger.debug(`Company ${company.name} has manufacturers:`, companyManufacturerIds);

        const hasMatchingManufacturer = $searchFilters.manufacturers.some((manufacturerId) =>
          companyManufacturerIds.includes(manufacturerId)
        );

        if (!hasMatchingManufacturer) {
          return false;
        }
      }

      // Product filter
      if ($searchFilters.products.length > 0) {
        const companyProductIds = company.inventory.map((item) => item.productId);
        logger.debug(`Company ${company.name} has products:`, companyProductIds);

        const hasMatchingProduct = $searchFilters.products.some((productId) =>
          companyProductIds.includes(productId)
        );

        if (!hasMatchingProduct) {
          return false;
        }
      }

      return true;
    });

    // Cache inventory counts to avoid recalculating during sort
    const inventoryCounts = new Map<string, number>();
    filtered.forEach(company => {
      inventoryCounts.set(company.id, getMatchingInventoryCount(company, $searchFilters));
    });

    // Sort companies by the total count of products in inventory matching the search
    const sortedFiltered = [...filtered].sort((a, b) => {
      const countA = inventoryCounts.get(a.id) || 0;
      const countB = inventoryCounts.get(b.id) || 0;
      return countB - countA; // Descending order (highest count first)
    });

    logger.debug(`Filtered from ${$rentalCompanies.length} to ${filtered.length} companies`);
    return sortedFiltered;
  }
);

// Helper function to get the total count of products in inventory that match the search filters
function getMatchingInventoryCount(company: RentalCompany, filters: SearchFilters): number {
  // If no filters are applied, count all inventory
  if (filters.manufacturers.length === 0 && filters.products.length === 0) {
    return company.inventory.reduce((sum, item) => sum + item.quantity, 0);
  }

  // Get filtered inventory based on current filters
  let filteredInventory = company.inventory;

  // If product filters are applied
  if (filters.products.length > 0) {
    filteredInventory = filteredInventory.filter(item =>
      filters.products.includes(item.productId)
    );
  }
  // If only manufacturer filters are applied
  else if (filters.manufacturers.length > 0) {
    const productByManufacturer: Record<string, string> = {};

    // Create a lookup for products by manufacturer
    get(productsStore).forEach(product => {
      productByManufacturer[product.id] = product.manufacturerId;
    });

    filteredInventory = filteredInventory.filter(item => {
      const manufacturerId = productByManufacturer[item.productId];
      return manufacturerId && filters.manufacturers.includes(manufacturerId);
    });
  }

  // Sum the quantities of matching inventory items
  return filteredInventory.reduce((sum, item) => sum + item.quantity, 0);
}

// Map markers derived from filtered companies
export const mapMarkers = derived(filteredRentalCompanies, ($filteredRentalCompanies) => {
  return $filteredRentalCompanies.map((company) => ({
    id: company.id,
    latitude: company.latitude,
    longitude: company.longitude,
    title: company.name
  }));
});

// Filtered products based on selected manufacturers
export const filteredProducts = derived(
  [productsStore, searchFilters, isLoading],
  ([$products, $searchFilters, $isLoading]) => {
    if ($isLoading) return [];

    if ($searchFilters.manufacturers.length === 0) {
      return $products;
    }

    logger.debug(`Filtering products by manufacturers:`, $searchFilters.manufacturers);
    const filtered = $products.filter((product) =>
      $searchFilters.manufacturers.includes(product.manufacturerId)
    );
    logger.debug(`Filtered from ${$products.length} to ${filtered.length} products`);
    return filtered;
  }
);

// Helper function to get manufacturer IDs for a rental company
function getCompanyManufacturerIds(company: RentalCompany): string[] {
  const manufacturers: string[] = [];
  let productsMap: Record<string, Product> = {};

  // Create a lookup map for products
  productsStore.subscribe((products) => {
    productsMap = products.reduce(
      (acc, product) => {
        acc[product.id] = product;
        return acc;
      },
      {} as Record<string, Product>
    );
  })();

  // Map inventory to manufacturer IDs
  company.inventory.forEach((item) => {
    const product = productsMap[item.productId];
    if (product && !manufacturers.includes(product.manufacturerId)) {
      manufacturers.push(product.manufacturerId);
    }
  });

  return manufacturers;
}

// Helper function to create searchable text for a company
function createSearchableText(company: RentalCompany): string {
  let searchableText = `${company.name} ${company.city} ${company.address}`.toLowerCase();
  let productsMap: Record<string, Product> = {};
  let manufacturersMap: Record<string, Manufacturer> = {};

  // Create lookup maps
  productsStore.subscribe((products) => {
    productsMap = products.reduce(
      (acc, product) => {
        acc[product.id] = product;
        return acc;
      },
      {} as Record<string, Product>
    );
  })();

  manufacturersStore.subscribe((manufacturers) => {
    manufacturersMap = manufacturers.reduce(
      (acc, manufacturer) => {
        acc[manufacturer.id] = manufacturer;
        return acc;
      },
      {} as Record<string, Manufacturer>
    );
  })();

  // Add product and manufacturer names to searchable text
  company.inventory.forEach((item) => {
    const product = productsMap[item.productId];
    if (product) {
      const manufacturer = manufacturersMap[product.manufacturerId];
      searchableText += ` ${product.name} ${manufacturer?.name || ''}`.toLowerCase();
    }
  });

  return searchableText;
}

// Filter actions
export function setTextFilter(text: string) {
  logger.debug(`Setting text filter: "${text}"`);
  searchFilters.update((filters) => {
    const updatedFilters = { ...filters, text };
    updateURLFromFilters(updatedFilters);
    return updatedFilters;
  });
}

export function toggleManufacturerFilter(manufacturerId: string) {
  logger.debug(`Toggling manufacturer filter: ${manufacturerId}`);
  searchFilters.update((filters) => {
    const manufacturers = filters.manufacturers.includes(manufacturerId)
      ? filters.manufacturers.filter((id) => id !== manufacturerId)
      : [...filters.manufacturers, manufacturerId];

    logger.debug(`Manufacturer filters now:`, manufacturers);

    // Clear product filters completely if a manufacturer was deselected
    if (filters.manufacturers.includes(manufacturerId) && !manufacturers.includes(manufacturerId)) {
      logger.debug('Manufacturer was deselected, clearing product filters');
      const updatedFilters = {
        ...filters,
        manufacturers,
        products: []
      };
      updateURLFromFilters(updatedFilters);
      return updatedFilters;
    }

    // Clear product filters that don't belong to selected manufacturers
    let updatedProducts = [...filters.products];
    let productsArray: Product[] = [];

    productsStore.subscribe((products) => {
      productsArray = products;
    })();

    if (manufacturers.length > 0) {
      const validProductIds = productsArray
        .filter((product) => manufacturers.includes(product.manufacturerId))
        .map((product) => product.id);

      updatedProducts = updatedProducts.filter((productId) => validProductIds.includes(productId));
      logger.debug(`Valid products for these manufacturers:`, validProductIds);
      logger.debug(`Updated product filters:`, updatedProducts);
    }

    const updatedFilters = {
      ...filters,
      manufacturers,
      products: updatedProducts
    };
    updateURLFromFilters(updatedFilters);
    return updatedFilters;
  });
}

export function toggleProductFilter(productId: string) {
  logger.debug(`Toggling product filter: ${productId}`);
  searchFilters.update((filters) => {
    const products = filters.products.includes(productId)
      ? filters.products.filter((id) => id !== productId)
      : [...filters.products, productId];

    logger.debug(`Product filters now:`, products);
    const updatedFilters = { ...filters, products };
    updateURLFromFilters(updatedFilters);
    return updatedFilters;
  });
}

export function resetFilters() {
  logger.debug('Resetting all filters');
  const emptyFilters = {
    text: '',
    manufacturers: [],
    products: []
  };
  updateURLFromFilters(emptyFilters);
  searchFilters.set(emptyFilters);
}

// Admin actions
export async function toggleManufacturerStatus(id: string, isActive: boolean) {
  try {
    await firestoreService.toggleManufacturerStatus(id, isActive);
    manufacturersStore.update((items) =>
      items.map((item) => (item.id === id ? { ...item, isActive } : item))
    );
  } catch (err) {
    logger.error(`Failed to toggle manufacturer status for ${id}:`, err);
    error.set(err instanceof Error ? err.message : 'Failed to update manufacturer');
  }
}

export async function deleteManufacturer(id: string) {
  try {
    await firestoreService.deleteManufacturer(id);
    manufacturersStore.update((items) => items.filter((item) => item.id !== id));
  } catch (err) {
    logger.error(`Failed to delete manufacturer ${id}:`, err);
    error.set(err instanceof Error ? err.message : 'Failed to delete manufacturer');
  }
}

export async function toggleProductStatus(id: string, isActive: boolean) {
  try {
    await firestoreService.toggleProductStatus(id, isActive);
    productsStore.update((items) =>
      items.map((item) => (item.id === id ? { ...item, isActive } : item))
    );
  } catch (err) {
    logger.error(`Failed to toggle product status for ${id}:`, err);
    error.set(err instanceof Error ? err.message : 'Failed to update product');
  }
}

export async function deleteProduct(id: string) {
  try {
    await firestoreService.deleteProduct(id);
    productsStore.update((items) => items.filter((item) => item.id !== id));
  } catch (err) {
    logger.error(`Failed to delete product ${id}:`, err);
    error.set(err instanceof Error ? err.message : 'Failed to delete product');
  }
}

export async function toggleRentalCompanyStatus(id: string, isActive: boolean) {
  try {
    await firestoreService.toggleRentalCompanyStatus(id, isActive);
    rentalCompaniesStore.update((items) =>
      items.map((item) => (item.id === id ? { ...item, isActive } : item))
    );
  } catch (err) {
    logger.error(`Failed to toggle rental company status for ${id}:`, err);
    error.set(err instanceof Error ? err.message : 'Failed to update rental company');
  }
}

export async function deleteRentalCompany(id: string) {
  try {
    await firestoreService.deleteRentalCompany(id);
    rentalCompaniesStore.update((items) => items.filter((item) => item.id !== id));
  } catch (err) {
    logger.error(`Failed to delete rental company ${id}:`, err);
    error.set(err instanceof Error ? err.message : 'Failed to delete rental company');
  }
}

// Refresh all data
export async function refreshProductsData() {
  try {
    // Get all products, including inactive ones
    const allProducts = await firestoreService.getProducts(undefined, true);
    logger.info(`Refreshed ${allProducts.length} products (including inactive)`);
    logger.info('Product IDs:', allProducts.map(p => p.id).join(', '));

    // Get all manufacturers
    const allManufacturers = await firestoreService.getManufacturers(true);
    logger.info(`Refreshed ${allManufacturers.length} manufacturers (including inactive)`);

    // Update the stores
    productsStore.set(allProducts);
    manufacturersStore.set(allManufacturers);

    return allProducts;
  } catch (error) {
    logger.error('Error refreshing product and manufacturer data:', error);
    throw error;
  }
}

// Initialize store with data
if (typeof window !== 'undefined') {
  loadInitialData();
}
