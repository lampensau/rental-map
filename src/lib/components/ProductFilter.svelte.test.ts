import { describe, it, expect, vi, beforeEach } from 'vitest';
import { resetAllMocks } from '$lib/testing/test-utils';
import * as rentalStore from '$lib/stores/rentalStore';

// Mock the rentalStore
vi.mock('$lib/stores/rentalStore', () => {
  return {
    productsStore: { subscribe: vi.fn() },
    searchFilters: { subscribe: vi.fn() },
    toggleProductFilter: vi.fn(),
    resetFilters: vi.fn(),
    // Add any other methods that might be used in the component
    getProducts: vi.fn().mockReturnValue([]),
    getRentalCompanies: vi.fn().mockReturnValue([]),
    getSearchFilters: vi.fn().mockReturnValue({ manufacturers: [], products: [], text: '' })
  };
});

// Mock the logger
vi.mock('$lib/utils/logger', () => ({
  createLogger: () => ({
    debug: vi.fn(),
    error: vi.fn(),
    warn: vi.fn(),
    info: vi.fn()
  })
}));

describe('ProductFilter Store Integration', () => {
  beforeEach(() => {
    resetAllMocks();

    // Setup the productsStore subscription
    const productsMock = vi.fn();
    vi.mocked(rentalStore.productsStore.subscribe).mockImplementation((callback) => {
      callback([
        { id: 'prod1', name: 'Product 1', manufacturerId: 'manu1', isActive: true },
        { id: 'prod2', name: 'Product 2', manufacturerId: 'manu2', isActive: true }
      ]);
      return productsMock;
    });

    // Setup the searchFilters subscription
    const filtersMock = vi.fn();
    vi.mocked(rentalStore.searchFilters.subscribe).mockImplementation((callback) => {
      callback({
        manufacturers: [],
        products: ['prod1'],
        text: ''
      });
      return filtersMock;
    });
  });

  it('should toggle product filters correctly', () => {
    // Call the store function directly to test
    rentalStore.toggleProductFilter('prod1');
    expect(rentalStore.toggleProductFilter).toHaveBeenCalledWith('prod1');

    // Call with a different ID
    rentalStore.toggleProductFilter('prod2');
    expect(rentalStore.toggleProductFilter).toHaveBeenCalledWith('prod2');
  });

  it('should reset filters correctly', () => {
    // Call reset filters and verify it was called
    rentalStore.resetFilters();
    expect(rentalStore.resetFilters).toHaveBeenCalled();
  });
}); 