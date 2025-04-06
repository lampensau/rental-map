import type { Manufacturer, Product, RentalCompany } from '$lib/types';

// Base API URL
const API_URL = '/api';

// Error handling helper
async function handleResponse<T>(response: Response): Promise<T> {
	if (!response.ok) {
		const errorData = await response.json().catch(() => null);
		throw new Error(errorData?.error || `API Error: ${response.status} ${response.statusText}`);
	}
	return response.json() as Promise<T>;
}

// Manufacturers API
export async function getManufacturers(): Promise<Manufacturer[]> {
	const response = await fetch(`${API_URL}/manufacturers`);
	return handleResponse<Manufacturer[]>(response);
}

// Products API
export async function getProducts(manufacturerId?: string): Promise<Product[]> {
	const url = manufacturerId
		? `${API_URL}/products?manufacturer=${manufacturerId}`
		: `${API_URL}/products`;

	const response = await fetch(url);
	return handleResponse<Product[]>(response);
}

// Rental Companies API
export async function getRentalCompanies(params: {
	search?: string;
	manufacturers?: string[];
	products?: string[];
}): Promise<RentalCompany[]> {
	// Build query parameters
	const queryParams = new URLSearchParams();

	if (params.search) {
		queryParams.append('search', params.search);
	}

	if (params.manufacturers && params.manufacturers.length > 0) {
		params.manufacturers.forEach((id) => {
			queryParams.append('manufacturer', id);
		});
	}

	if (params.products && params.products.length > 0) {
		params.products.forEach((id) => {
			queryParams.append('product', id);
		});
	}

	const url = `${API_URL}/rental-companies?${queryParams.toString()}`;
	const response = await fetch(url);
	return handleResponse<RentalCompany[]>(response);
}

// Import data
export async function importData(data: {
	manufacturers?: Manufacturer[];
	products?: Product[];
	rentalCompanies?: RentalCompany[];
}): Promise<{ success: boolean; message: string }> {
	const response = await fetch(`${API_URL}/import`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	});

	return handleResponse<{ success: boolean; message: string }>(response);
}
