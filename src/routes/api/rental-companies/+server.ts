import { json } from '@sveltejs/kit';
import { rentalCompanies, products, manufacturers } from '$lib/data/mockData';
import type { RentalCompany } from '$lib/types';

// Creates searchable text for filtering
function createSearchableText(company: RentalCompany): string {
	const companyProducts = company.inventory
		.map((item) => {
			const product = products.find((p) => p.id === item.productId);
			if (!product) return '';

			const manufacturer = manufacturers.find((m) => m.id === product.manufacturerId);
			return `${product.name} ${manufacturer?.name || ''}`;
		})
		.join(' ');

	return `${company.name} ${company.city} ${company.address} ${companyProducts}`.toLowerCase();
}

export async function GET({ url }) {
	const searchText = url.searchParams.get('search')?.toLowerCase() || '';
	const manufacturerIds = url.searchParams.getAll('manufacturer');
	const productIds = url.searchParams.getAll('product');

	let results = [...rentalCompanies];

	// Filter by search text
	if (searchText) {
		results = results.filter((company) => {
			const searchableText = createSearchableText(company);
			return searchableText.includes(searchText);
		});
	}

	// Filter by manufacturer
	if (manufacturerIds.length > 0) {
		results = results.filter((company) => {
			const companyManufacturerIds = company.inventory.map((item) => {
				const product = products.find((p) => p.id === item.productId);
				return product?.manufacturerId;
			});

			return manufacturerIds.some((id) => companyManufacturerIds.includes(id));
		});
	}

	// Filter by product
	if (productIds.length > 0) {
		results = results.filter((company) => {
			const companyProductIds = company.inventory.map((item) => item.productId);
			return productIds.some((id) => companyProductIds.includes(id));
		});
	}

	return json(results);
}
