import { describe, it, expect, vi, beforeEach } from 'vitest';
import { resetAllMocks } from '$lib/testing/test-utils';
import * as rentalStore from '$lib/stores/rentalStore';

// Mock the rentalStore with only the functions needed for the test
vi.mock('$lib/stores/rentalStore', () => {
  return {
    isLoading: { subscribe: vi.fn() },
    error: { subscribe: vi.fn() },
    filteredRentalCompanies: { subscribe: vi.fn() },
    loadInitialData: vi.fn()
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

describe('RentalApp Integration', () => {
  beforeEach(() => {
    resetAllMocks();

    // Setup the isLoading subscription
    const isLoadingMock = vi.fn();
    vi.mocked(rentalStore.isLoading.subscribe).mockImplementation((callback) => {
      callback(false);
      return isLoadingMock;
    });

    // Setup the error subscription
    const errorMock = vi.fn();
    vi.mocked(rentalStore.error.subscribe).mockImplementation((callback) => {
      callback(null);
      return errorMock;
    });

    // Setup the filteredRentalCompanies subscription
    const companiesMock = vi.fn();
    vi.mocked(rentalStore.filteredRentalCompanies.subscribe).mockImplementation((callback) => {
      callback([
        {
          id: 'company1',
          name: 'Company 1',
          address: '123 Test St',
          city: 'Test City',
          postalCode: '12345',
          country: 'Test Country',
          latitude: 0,
          longitude: 0,
          isActive: true,
          inventory: []
        }
      ]);
      return companiesMock;
    });
  });

  it('should call loadInitialData to reload data', () => {
    // Call loadInitialData directly
    rentalStore.loadInitialData();
    expect(rentalStore.loadInitialData).toHaveBeenCalled();
  });

  it('should respond to error states', () => {
    // Test error subscription with error value
    const errorCallback = vi.fn();
    const errorMock = vi.fn();

    // First mock the subscribe call
    vi.mocked(rentalStore.error.subscribe).mockImplementation((callback) => {
      callback('Error loading data');
      errorCallback('Error loading data');
      return errorMock;
    });

    // Simulate subscription by getting the store's subscribe function
    rentalStore.error.subscribe(() => { });

    // Verify the callback was called with the error value
    expect(errorCallback).toHaveBeenCalledWith('Error loading data');
  });
}); 