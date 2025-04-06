import { describe, it, expect, vi, beforeEach } from 'vitest';
import { get } from 'svelte/store';
import * as rentalStore from './rentalStore';
import * as firestoreService from '$lib/services/firestore';
import type { Manufacturer, Product, RentalCompany } from '$lib/types';

// Mock the firestore service
vi.mock('$lib/services/firestore', () => ({
  getManufacturers: vi.fn(),
  getProducts: vi.fn(),
  getRentalCompanies: vi.fn(),
  updateManufacturer: vi.fn(),
  updateProduct: vi.fn(),
  updateRentalCompany: vi.fn(),
  deleteManufacturer: vi.fn(),
  deleteProduct: vi.fn(),
  deleteRentalCompany: vi.fn()
}));

// Mock the logger
vi.mock('$lib/utils/logger', () => ({
  createLogger: () => ({
    debug: vi.fn(),
    error: vi.fn(),
    warn: vi.fn(),
    info: vi.fn()
  })
}));

describe('rentalStore', () => {
  const mockManufacturers: Manufacturer[] = [
    { id: 'manu1', name: 'Manufacturer 1', isActive: true },
    { id: 'manu2', name: 'Manufacturer 2', isActive: true },
  ];

  const mockProducts: Product[] = [
    { id: 'prod1', name: 'Product 1', manufacturerId: 'manu1', isActive: true },
    { id: 'prod2', name: 'Product 2', manufacturerId: 'manu1', isActive: true },
    { id: 'prod3', name: 'Product 3', manufacturerId: 'manu2', isActive: true },
  ];

  const mockRentalCompanies: RentalCompany[] = [
    {
      id: 'comp1',
      name: 'Company 1',
      address: 'Address 1',
      city: 'City 1',
      postalCode: '12345',
      country: 'Country 1',
      latitude: 1,
      longitude: 1,
      isActive: true,
      inventory: [
        { productId: 'prod1', quantity: 5 },
        { productId: 'prod2', quantity: 3 }
      ]
    },
    {
      id: 'comp2',
      name: 'Company 2',
      address: 'Address 2',
      city: 'City 2',
      postalCode: '67890',
      country: 'Country 2',
      latitude: 2,
      longitude: 2,
      isActive: true,
      inventory: [
        { productId: 'prod3', quantity: 2 }
      ]
    }
  ];

  beforeEach(() => {
    vi.resetAllMocks();

    // Reset stores to initial state
    rentalStore.manufacturersStore.set([]);
    rentalStore.productsStore.set([]);
    rentalStore.rentalCompaniesStore.set([]);
    rentalStore.isLoading.set(true);
    rentalStore.error.set(null);
    rentalStore.searchFilters.set({
      text: '',
      manufacturers: [],
      products: []
    });

    // Mock firestore service responses
    vi.mocked(firestoreService.getManufacturers).mockResolvedValue(mockManufacturers);
    vi.mocked(firestoreService.getProducts).mockResolvedValue(mockProducts);
    vi.mocked(firestoreService.getRentalCompanies).mockResolvedValue(mockRentalCompanies);
  });

  describe('loadInitialData', () => {
    it('loads data from firestore and updates stores', async () => {
      await rentalStore.loadInitialData();

      expect(firestoreService.getManufacturers).toHaveBeenCalled();
      expect(firestoreService.getProducts).toHaveBeenCalled();
      expect(firestoreService.getRentalCompanies).toHaveBeenCalled();

      expect(get(rentalStore.manufacturersStore)).toEqual(mockManufacturers);
      expect(get(rentalStore.productsStore)).toEqual(mockProducts);
      expect(get(rentalStore.rentalCompaniesStore)).toEqual(mockRentalCompanies);
      expect(get(rentalStore.isLoading)).toBe(false);
      expect(get(rentalStore.error)).toBe(null);
    });

    it('handles errors during data loading', async () => {
      const errorMessage = 'Failed to load data';
      vi.mocked(firestoreService.getManufacturers).mockRejectedValueOnce(new Error(errorMessage));

      await rentalStore.loadInitialData();

      expect(get(rentalStore.isLoading)).toBe(false);
      expect(get(rentalStore.error)).toBe(errorMessage);
    });
  });

  describe('text filtering', () => {
    beforeEach(async () => {
      rentalStore.manufacturersStore.set(mockManufacturers);
      rentalStore.productsStore.set(mockProducts);
      rentalStore.rentalCompaniesStore.set(mockRentalCompanies);
      rentalStore.isLoading.set(false);
    });

    it('filters companies by text search', () => {
      rentalStore.setTextFilter('company 1');

      const filtered = get(rentalStore.filteredRentalCompanies);
      expect(filtered.length).toBe(1);
      expect(filtered[0].id).toBe('comp1');
    });

    it('filters companies by city', () => {
      rentalStore.setTextFilter('city 2');

      const filtered = get(rentalStore.filteredRentalCompanies);
      expect(filtered.length).toBe(1);
      expect(filtered[0].id).toBe('comp2');
    });
  });

  describe('manufacturer filtering', () => {
    beforeEach(async () => {
      rentalStore.manufacturersStore.set(mockManufacturers);
      rentalStore.productsStore.set(mockProducts);
      rentalStore.rentalCompaniesStore.set(mockRentalCompanies);
      rentalStore.isLoading.set(false);
    });

    it('filters companies by manufacturer', () => {
      rentalStore.toggleManufacturerFilter('manu2');

      const filtered = get(rentalStore.filteredRentalCompanies);
      expect(filtered.length).toBe(1);
      expect(filtered[0].id).toBe('comp2');
    });

    it('filters products by selected manufacturers', () => {
      rentalStore.toggleManufacturerFilter('manu1');

      const filtered = get(rentalStore.filteredProducts);
      expect(filtered.length).toBe(2);
      expect(filtered[0].id).toBe('prod1');
      expect(filtered[1].id).toBe('prod2');
    });

    it('clears product filters when a manufacturer is deselected', () => {
      // Select manufacturer 1
      rentalStore.toggleManufacturerFilter('manu1');

      // Select product 1
      rentalStore.toggleProductFilter('prod1');

      // Deselect manufacturer 1
      rentalStore.toggleManufacturerFilter('manu1');

      // Product filter should be cleared
      expect(get(rentalStore.searchFilters).products).toEqual([]);
    });
  });

  describe('product filtering', () => {
    beforeEach(async () => {
      rentalStore.manufacturersStore.set(mockManufacturers);
      rentalStore.productsStore.set(mockProducts);
      rentalStore.rentalCompaniesStore.set(mockRentalCompanies);
      rentalStore.isLoading.set(false);
    });

    it('filters companies by product', () => {
      rentalStore.toggleProductFilter('prod3');

      const filtered = get(rentalStore.filteredRentalCompanies);
      expect(filtered.length).toBe(1);
      expect(filtered[0].id).toBe('comp2');
    });

    it('toggles product selection', () => {
      // Initial state
      expect(get(rentalStore.searchFilters).products).toEqual([]);

      // Select product
      rentalStore.toggleProductFilter('prod1');
      expect(get(rentalStore.searchFilters).products).toEqual(['prod1']);

      // Deselect product
      rentalStore.toggleProductFilter('prod1');
      expect(get(rentalStore.searchFilters).products).toEqual([]);
    });
  });

  describe('filter reset', () => {
    beforeEach(async () => {
      rentalStore.manufacturersStore.set(mockManufacturers);
      rentalStore.productsStore.set(mockProducts);
      rentalStore.rentalCompaniesStore.set(mockRentalCompanies);
      rentalStore.isLoading.set(false);

      // Set some filters
      rentalStore.setTextFilter('search text');
      rentalStore.toggleManufacturerFilter('manu1');
      rentalStore.toggleProductFilter('prod1');
    });

    it('resets all filters', () => {
      rentalStore.resetFilters();

      const filters = get(rentalStore.searchFilters);
      expect(filters.text).toBe('');
      expect(filters.manufacturers).toEqual([]);
      expect(filters.products).toEqual([]);
    });
  });
}); 