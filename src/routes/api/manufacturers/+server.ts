import { json } from '@sveltejs/kit';
import * as firestoreService from '$lib/services/firestore';
import type { RequestEvent } from '@sveltejs/kit';
import { isUserAdmin } from '$lib/services/auth';
import { createLogger } from '$lib/utils/logger';

// Create logger for this module
const logger = createLogger('manufacturersAPI');

export async function GET({ url }: RequestEvent) {
	const includeInactive = url.searchParams.get('includeInactive') === 'true';
	logger.debug(`Getting manufacturers, includeInactive=${includeInactive}`);
	const manufacturers = await firestoreService.getManufacturers(includeInactive);
	return json(manufacturers);
}

export async function POST({ request, locals }: RequestEvent) {
	// Check authentication
	let isAdminUser = false;
	isUserAdmin.subscribe(value => {
		isAdminUser = value;
	})();

	if (!isAdminUser) {
		logger.warn('Unauthorized attempt to create manufacturer');
		return new Response(JSON.stringify({ error: 'Unauthorized' }), {
			status: 401,
			headers: { 'Content-Type': 'application/json' }
		});
	}

	try {
		const data = await request.json();

		if (!data.name) {
			logger.warn('Missing required name field for manufacturer');
			return new Response(JSON.stringify({ error: 'Name is required' }), {
				status: 400,
				headers: { 'Content-Type': 'application/json' }
			});
		}

		logger.info(`Creating manufacturer with name: ${data.name}`);
		const manufacturer = await firestoreService.createManufacturer({
			name: data.name,
			isActive: data.isActive ?? true,
			products: []
		});

		return json(manufacturer);
	} catch (error) {
		logger.error('Error creating manufacturer:', error);
		return new Response(
			JSON.stringify({ error: 'Failed to create manufacturer' }),
			{ status: 500, headers: { 'Content-Type': 'application/json' } }
		);
	}
}
