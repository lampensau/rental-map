import {
  collection,
  doc,
  getDocs,
  getDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  addDoc,
  serverTimestamp,
  writeBatch,
  setDoc
} from 'firebase/firestore';
import type { DocumentData } from 'firebase/firestore';
import { db, isFirebaseConfigured } from './firebase';
import type { Manufacturer, Product, RentalCompany } from '$lib/types';
import { manufacturers as mockManufacturers, products as mockProducts, rentalCompanies as mockRentalCompanies } from '$lib/data/mockData';
import { createLogger } from '$lib/utils/logger';

// Create a logger for this module
const logger = createLogger('firestore');

// Collection names
const COLLECTIONS = {
  MANUFACTURERS: 'manufacturers',
  PRODUCTS: 'products',
  RENTAL_COMPANIES: 'rental-companies'
};

// Use mock data if Firebase is not configured
async function getMockData<T>(mockData: T[]): Promise<T[]> {
  return new Promise(resolve => {
    // Simulate network delay
    setTimeout(() => resolve(mockData), 500);
  });
}

// Manufacturers
export async function getManufacturers(includeInactive = false): Promise<Manufacturer[]> {
  try {
    if (!isFirebaseConfigured()) {
      return getMockData(mockManufacturers);
    }

    const manufacturersCollection = collection(db, COLLECTIONS.MANUFACTURERS);
    let manufacturersQuery = includeInactive
      ? manufacturersCollection
      : query(manufacturersCollection, where('isActive', '==', true));

    const snapshot = await getDocs(manufacturersQuery);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }) as Manufacturer);
  } catch (error) {
    logger.error('Error fetching manufacturers:', error);
    throw error;
  }
}

export async function getManufacturer(id: string): Promise<Manufacturer | null> {
  try {
    if (!isFirebaseConfigured()) {
      const found = mockManufacturers.find(m => m.id === id);
      return found ? {
        ...found,
        isActive: true
      } : null;
    }

    const docRef = doc(db, COLLECTIONS.MANUFACTURERS, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data()
      } as Manufacturer;
    }
    return null;
  } catch (error) {
    logger.error(`Error fetching manufacturer ${id}:`, error);
    throw error;
  }
}

export async function createManufacturer(data: Omit<Manufacturer, 'id'> & { id?: string }): Promise<Manufacturer> {
  try {
    if (!isFirebaseConfigured()) {
      throw new Error('Firebase is not configured for write operations');
    }

    // Use provided ID or auto-generate
    const newDoc: any = {
      ...data,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    };

    // Remove id from newDoc if it exists
    const { id, ...docData } = newDoc;
    const manufacturerId = id || null;

    if (manufacturerId) {
      // Use setDoc with specific ID
      const docRef = doc(db, COLLECTIONS.MANUFACTURERS, manufacturerId);
      await setDoc(docRef, docData);
      return { ...docData, id: manufacturerId } as Manufacturer;
    } else {
      // Use addDoc for auto-generated ID
      const docRef = await addDoc(collection(db, COLLECTIONS.MANUFACTURERS), docData);
      return { ...docData, id: docRef.id } as Manufacturer;
    }
  } catch (error) {
    logger.error('Error creating manufacturer:', error);
    throw error;
  }
}

export async function updateManufacturer(id: string, data: Partial<Manufacturer>): Promise<void> {
  try {
    if (!isFirebaseConfigured()) {
      throw new Error('Firebase is not configured for write operations');
    }

    const docRef = doc(db, COLLECTIONS.MANUFACTURERS, id);
    const updateData = {
      ...data,
      updatedAt: serverTimestamp()
    };

    await updateDoc(docRef, updateData);
  } catch (error) {
    logger.error(`Error updating manufacturer ${id}:`, error);
    throw error;
  }
}

export async function toggleManufacturerStatus(id: string, isActive: boolean): Promise<void> {
  return updateManufacturer(id, { isActive });
}

export async function deleteManufacturer(id: string): Promise<void> {
  try {
    if (!isFirebaseConfigured()) {
      throw new Error('Firebase is not configured for write operations');
    }

    // Check if any products are using this manufacturer
    const associatedProducts = await getProducts(id);
    if (associatedProducts.length > 0) {
      throw new Error('Cannot delete manufacturer with associated products. Please delete or reassign the products first.');
    }

    const docRef = doc(db, COLLECTIONS.MANUFACTURERS, id);
    await deleteDoc(docRef);
  } catch (error) {
    logger.error(`Error deleting manufacturer ${id}:`, error);
    throw error;
  }
}

// Products
export async function getProducts(manufacturerId?: string, includeInactive = false): Promise<Product[]> {
  try {
    if (!isFirebaseConfigured()) {
      let filtered = mockProducts;
      if (manufacturerId) {
        filtered = filtered.filter(p => p.manufacturerId === manufacturerId);
      }
      return getMockData(filtered);
    }

    const productsCollection = collection(db, COLLECTIONS.PRODUCTS);
    let productsQuery;

    if (manufacturerId && !includeInactive) {
      productsQuery = query(
        productsCollection,
        where('manufacturerId', '==', manufacturerId),
        where('isActive', '==', true)
      );
    } else if (manufacturerId) {
      productsQuery = query(
        productsCollection,
        where('manufacturerId', '==', manufacturerId)
      );
    } else if (!includeInactive) {
      productsQuery = query(
        productsCollection,
        where('isActive', '==', true)
      );
    } else {
      productsQuery = productsCollection;
    }

    const snapshot = await getDocs(productsQuery);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }) as Product);
  } catch (error) {
    logger.error('Error fetching products:', error);
    throw error;
  }
}

export async function getProduct(id: string): Promise<Product | null> {
  try {
    if (!isFirebaseConfigured()) {
      const found = mockProducts.find(p => p.id === id);
      return found ? {
        ...found,
        isActive: true
      } : null;
    }

    const docRef = doc(db, COLLECTIONS.PRODUCTS, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data()
      } as Product;
    }
    return null;
  } catch (error) {
    logger.error(`Error fetching product ${id}:`, error);
    throw error;
  }
}

export async function createProduct(data: Omit<Product, 'id'> & { id?: string }): Promise<Product> {
  try {
    if (!isFirebaseConfigured()) {
      throw new Error('Firebase is not configured for write operations');
    }

    // Use provided ID or auto-generate
    const newDoc: any = {
      ...data,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    };

    // Remove id from newDoc if it exists
    const { id, ...docData } = newDoc;
    const productId = id || null;

    if (productId) {
      // Use setDoc with specific ID
      const docRef = doc(db, COLLECTIONS.PRODUCTS, productId);
      await setDoc(docRef, docData);
      return { ...docData, id: productId } as Product;
    } else {
      // Use addDoc for auto-generated ID
      const docRef = await addDoc(collection(db, COLLECTIONS.PRODUCTS), docData);
      return { ...docData, id: docRef.id } as Product;
    }
  } catch (error) {
    logger.error('Error creating product:', error);
    throw error;
  }
}

export async function updateProduct(id: string, data: Partial<Product>): Promise<void> {
  try {
    if (!isFirebaseConfigured()) {
      throw new Error('Firebase is not configured for write operations');
    }

    const docRef = doc(db, COLLECTIONS.PRODUCTS, id);
    const updateData = {
      ...data,
      updatedAt: serverTimestamp()
    };

    await updateDoc(docRef, updateData);
  } catch (error) {
    logger.error(`Error updating product ${id}:`, error);
    throw error;
  }
}

export async function toggleProductStatus(id: string, isActive: boolean): Promise<void> {
  return updateProduct(id, { isActive });
}

export async function deleteProduct(id: string): Promise<void> {
  try {
    if (!isFirebaseConfigured()) {
      throw new Error('Firebase is not configured for write operations');
    }

    // Check if any rental companies are using this product
    // This would be complex, so it should be implemented when needed
    // For now, we'll just assume it's safe to delete

    const docRef = doc(db, COLLECTIONS.PRODUCTS, id);
    await deleteDoc(docRef);
  } catch (error) {
    logger.error(`Error deleting product ${id}:`, error);
    throw error;
  }
}

// Rental Companies
export async function getRentalCompanies(options: {
  text?: string;
  products?: string[];
  manufacturers?: string[];
} = {}, forceRefresh = false): Promise<RentalCompany[]> {
  try {
    if (!isFirebaseConfigured()) {
      return getMockData(mockRentalCompanies);
    }

    const companiesCollection = collection(db, COLLECTIONS.RENTAL_COMPANIES);
    const companiesQuery = query(companiesCollection, where('isActive', '==', true));

    // If forceRefresh is true, avoid any caching
    if (forceRefresh) {
      logger.debug('Force refreshing rental companies data from Firestore...');
    }

    const snapshot = await getDocs(companiesQuery);
    let companies = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }) as RentalCompany);

    // Apply filters on client side (for now)
    // In a production environment, these should be implemented as Firebase queries
    logger.debug(`Filtering ${companies.length} companies with options:`, options);

    // Text search filter
    if (options.text) {
      const searchText = options.text.toLowerCase();
      companies = companies.filter(company => {
        const searchableText = `${company.name} ${company.city} ${company.address}`.toLowerCase();
        return searchableText.includes(searchText);
      });
      logger.debug(`After text search: ${companies.length} companies`);
    }

    // Product filter
    if (options.products && options.products.length > 0) {
      companies = companies.filter(company => {
        return options.products!.some(productId =>
          company.inventory.some(item => item.productId === productId)
        );
      });
      logger.debug(`After product filter: ${companies.length} companies`);
    }

    // Manufacturer filter
    if (options.manufacturers && options.manufacturers.length > 0) {
      // Get all products from selected manufacturers
      const allProducts = await getProducts();
      logger.debug(`Loaded ${allProducts.length} products for manufacturer filtering`);

      const productsByManufacturer = allProducts.filter(product =>
        options.manufacturers!.includes(product.manufacturerId)
      );
      logger.debug(`Found ${productsByManufacturer.length} products from selected manufacturers:`,
        productsByManufacturer.map(p => p.id)
      );

      const validProductIds = productsByManufacturer.map(p => p.id);

      // Filter companies that have these products
      const beforeCount = companies.length;
      companies = companies.filter(company => {
        const hasMatchingProduct = company.inventory.some(item =>
          validProductIds.includes(item.productId)
        );
        if (hasMatchingProduct) {
          logger.debug(`Company ${company.name} has products from selected manufacturers`);
        }
        return hasMatchingProduct;
      });
      logger.debug(`After manufacturer filter: ${companies.length} of ${beforeCount} companies remain`);
    }

    return companies;
  } catch (error) {
    logger.error('Error fetching rental companies:', error);
    throw error;
  }
}

export async function getRentalCompany(id: string): Promise<RentalCompany | null> {
  try {
    if (!isFirebaseConfigured()) {
      const found = mockRentalCompanies.find(rc => rc.id === id);
      return found ? {
        ...found,
        isActive: true
      } : null;
    }

    const docRef = doc(db, COLLECTIONS.RENTAL_COMPANIES, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data()
      } as RentalCompany;
    }
    return null;
  } catch (error) {
    logger.error(`Error fetching rental company ${id}:`, error);
    throw error;
  }
}

export async function createRentalCompany(data: Omit<RentalCompany, 'id'> & { id?: string }): Promise<RentalCompany> {
  try {
    if (!isFirebaseConfigured()) {
      throw new Error('Firebase is not configured for write operations');
    }

    // Use provided ID or auto-generate
    const newDoc: any = {
      ...data,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    };

    // Remove id from newDoc if it exists
    const { id, ...docData } = newDoc;
    const rentalCompanyId = id || null;

    if (rentalCompanyId) {
      // Use setDoc with specific ID
      const docRef = doc(db, COLLECTIONS.RENTAL_COMPANIES, rentalCompanyId);
      await setDoc(docRef, docData);
      return { ...docData, id: rentalCompanyId } as RentalCompany;
    } else {
      // Use addDoc for auto-generated ID
      const docRef = await addDoc(collection(db, COLLECTIONS.RENTAL_COMPANIES), docData);
      return { ...docData, id: docRef.id } as RentalCompany;
    }
  } catch (error) {
    logger.error('Error creating rental company:', error);
    throw error;
  }
}

export async function updateRentalCompany(id: string, data: Partial<RentalCompany>): Promise<void> {
  try {
    if (!isFirebaseConfigured()) {
      throw new Error('Firebase is not configured for write operations');
    }

    const docRef = doc(db, COLLECTIONS.RENTAL_COMPANIES, id);
    const updateData = {
      ...data,
      updatedAt: serverTimestamp()
    };

    await updateDoc(docRef, updateData);
  } catch (error) {
    logger.error(`Error updating rental company ${id}:`, error);
    throw error;
  }
}

export async function toggleRentalCompanyStatus(id: string, isActive: boolean): Promise<void> {
  return updateRentalCompany(id, { isActive });
}

export async function deleteRentalCompany(id: string): Promise<void> {
  try {
    if (!isFirebaseConfigured()) {
      throw new Error('Firebase is not configured for write operations');
    }

    const docRef = doc(db, COLLECTIONS.RENTAL_COMPANIES, id);
    await deleteDoc(docRef);
  } catch (error) {
    logger.error(`Error deleting rental company ${id}:`, error);
    throw error;
  }
}

// Import data
export async function importData(data: {
  manufacturers: (Omit<Manufacturer, 'id'> & { id?: string })[];
  products: (Omit<Product, 'id'> & { id?: string })[];
  rentalCompanies: (Omit<RentalCompany, 'id'> & { id?: string })[];
}): Promise<void> {
  try {
    if (!isFirebaseConfigured()) {
      throw new Error('Firebase is not configured for write operations');
    }

    const batch = writeBatch(db);

    // Import manufacturers
    data.manufacturers.forEach((manufacturer) => {
      // Use explicit ID if provided, otherwise generate one
      const docId = manufacturer.id || undefined;
      const docRef = docId
        ? doc(db, COLLECTIONS.MANUFACTURERS, docId)
        : doc(collection(db, COLLECTIONS.MANUFACTURERS));

      // Remove id from the data object if it exists
      const { id, ...manufacturerData } = manufacturer;

      batch.set(docRef, {
        ...manufacturerData,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });
    });

    // Import products
    data.products.forEach((product) => {
      // Use explicit ID if provided, otherwise generate one
      const docId = product.id || undefined;
      const docRef = docId
        ? doc(db, COLLECTIONS.PRODUCTS, docId)
        : doc(collection(db, COLLECTIONS.PRODUCTS));

      // Remove id from the data object if it exists
      const { id, ...productData } = product;

      batch.set(docRef, {
        ...productData,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });
    });

    // Import rental companies
    data.rentalCompanies.forEach((rentalCompany) => {
      // Use explicit ID if provided, otherwise generate one
      const docId = rentalCompany.id || undefined;
      const docRef = docId
        ? doc(db, COLLECTIONS.RENTAL_COMPANIES, docId)
        : doc(collection(db, COLLECTIONS.RENTAL_COMPANIES));

      // Remove id from the data object if it exists
      const { id, ...rentalCompanyData } = rentalCompany;

      batch.set(docRef, {
        ...rentalCompanyData,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });
    });

    await batch.commit();
  } catch (error) {
    logger.error('Error importing data to Firestore:', error);
    throw error;
  }
} 