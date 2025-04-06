export interface Manufacturer {
  id: string; // 3-digit ID
  name: string;
  isActive: boolean;
  products?: Product[];
}

export interface Product {
  id: string; // Format: <manufacturer-id>-<xxxx>-<product-id>
  name: string;
  manufacturerId: string; // 3-digit manufacturer ID
  isActive: boolean;
}

export interface RentalCompany {
  id: string; // Format: K followed by at least 4 digits
  name: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  latitude: number;
  longitude: number;
  website?: string;
  phone?: string;
  email?: string;
  isActive: boolean;
  inventory: InventoryItem[];
}

export interface InventoryItem {
  productId: string;
  quantity: number;
}

export interface SearchFilters {
  text: string;
  manufacturers: string[];
  products: string[];
}

export interface MapMarker {
  id: string;
  latitude: number;
  longitude: number;
  title: string;
}

export interface AuthUser {
  uid: string;
  email: string;
  isAdmin: boolean;
}

// Import data interfaces
export interface ImportRentalCompany {
  id: string; // K followed by at least 4 digits
  name?: string; // Company name is optional but will be used if provided
  address: string;
  city?: string; // City is optional for backward compatibility but strongly recommended
  country: string; // 2-digit country code
  postalCode: string;
  website?: string;
  phone?: string;
  email?: string;
  inventory: ImportInventoryItem[];
}

export interface ImportInventoryItem {
  productId: string; // Format: <manufacturer-id>-<xxxx>-<product-id>
  productName: string;
  manufacturerName: string;
  quantity: number;
}

// Validation utilities
export const ID_PATTERNS = {
  MANUFACTURER: /^\d{3}$/,
  PRODUCT: /^(\d{3})-(\w{4})-(\w+)$/,
  RENTAL_COMPANY: /^K\d{4,}$/,
  // Also supports product IDs with alternative formats (no dashes, etc.)
  PRODUCT_FLEXIBLE: /^(\d{3})[-_]?(\w{4})[-_]?(\w+)$/
};
