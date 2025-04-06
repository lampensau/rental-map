import { json } from '@sveltejs/kit';
import { products } from '$lib/data/mockData';

export async function GET({ url }) {
	const manufacturerId = url.searchParams.get('manufacturer');

	if (manufacturerId) {
		const filteredProducts = products.filter(
			(product) => product.manufacturerId === manufacturerId
		);
		return json(filteredProducts);
	}

	return json(products);
}
