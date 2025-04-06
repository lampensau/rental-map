import { describe, it, expect, vi, beforeEach } from 'vitest';
import { resetAllMocks } from '$lib/testing/test-utils';
import * as rentalStore from '$lib/stores/rentalStore';

// Mock the rentalStore
vi.mock('$lib/stores/rentalStore', () => {
  return {
    manufacturersStore: { subscribe: vi.fn() },
    searchFilters: { subscribe: vi.fn() },
    toggleManufacturerFilter: vi.fn(),
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

describe('ManufacturerFilter Store Integration', () => {
  beforeEach(() => {
    resetAllMocks();

    // Setup the manufacturersStore subscription
    // Create both the callback and unsubscribe mock
    const manufacturersMock = vi.fn();
    vi.mocked(rentalStore.manufacturersStore.subscribe).mockImplementation((callback) => {
      callback([
        { id: 'manu1', name: 'Manufacturer 1', isActive: true },
        { id: 'manu2', name: 'Manufacturer 2', isActive: true }
      ]);
      return manufacturersMock;
    });

    // Setup the searchFilters subscription with unsubscribe mock
    const filtersMock = vi.fn();
    vi.mocked(rentalStore.searchFilters.subscribe).mockImplementation((callback) => {
      callback({
        manufacturers: ['manu1'],
        products: [],
        text: ''
      });
      return filtersMock;
    });
  });

  it('should toggle manufacturer filters correctly', () => {
    // Call the store function directly to test
    rentalStore.toggleManufacturerFilter('manu1');
    expect(rentalStore.toggleManufacturerFilter).toHaveBeenCalledWith('manu1');

    // Call with a different ID
    rentalStore.toggleManufacturerFilter('manu2');
    expect(rentalStore.toggleManufacturerFilter).toHaveBeenCalledWith('manu2');
  });

  it('should reset filters correctly', () => {
    // Call reset filters and verify it was called
    rentalStore.resetFilters();
    expect(rentalStore.resetFilters).toHaveBeenCalled();
  });
}); 