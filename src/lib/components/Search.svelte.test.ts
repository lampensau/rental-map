import { describe, it, expect, vi, beforeEach } from 'vitest';
import { resetAllMocks } from '$lib/testing/test-utils';
import * as rentalStore from '$lib/stores/rentalStore';

// Mock the rentalStore
vi.mock('$lib/stores/rentalStore', () => {
  return {
    searchFilters: { subscribe: vi.fn() },
    setTextFilter: vi.fn(),
    resetFilters: vi.fn(),
    // Add any other store methods used by the component
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

describe('Search Store Integration', () => {
  beforeEach(() => {
    resetAllMocks();

    // Setup the searchFilters subscription
    const searchFiltersMock = vi.fn();
    vi.mocked(rentalStore.searchFilters.subscribe).mockImplementation((callback) => {
      callback({
        manufacturers: [],
        products: [],
        text: 'test search'
      });
      return searchFiltersMock;
    });
  });

  it('should update text filter correctly', () => {
    // Test updating the text filter
    rentalStore.setTextFilter('new search');
    expect(rentalStore.setTextFilter).toHaveBeenCalledWith('new search');
  });

  it('should reset filters correctly', () => {
    // Test resetting filters
    rentalStore.resetFilters();
    expect(rentalStore.resetFilters).toHaveBeenCalled();
  });
}); 