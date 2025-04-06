import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
import { importData, parseCSV, parseJSON } from '$lib/services/importService';
import { createLogger } from '$lib/utils/logger';
import { randomUUID } from 'crypto';
import type { Manufacturer, Product, RentalCompany } from '$lib/types';

// In-memory storage for import sessions
const importSessions = new Map<string, {
	data: string;
	format: 'csv' | 'json';
	options: ImportOptions;
	missingEntities?: MissingEntity[];
}>();

// Types
interface ImportOptions {
	importManufacturers: boolean;
	importProducts: boolean;
	importRentalCompanies: boolean;
	createMissingEntities?: boolean; // Make this optional for backward compatibility
}

interface MissingEntity {
	type: 'manufacturer' | 'product';
	id: string;
	referencedIn: string;
	referenceName?: string;
}

interface EntityResolutions {
	[entityId: string]: {
		action: 'create' | 'reference' | 'skip';
		name?: string;
		referenceId?: string;
	};
}

const logger = createLogger('import-api');

export const POST: RequestHandler = async ({ request }) => {
	const body = await request.json();
	logger.debug('Import API request received:', {
		hasSessionId: !!body.importSessionId,
		hasResolutions: !!body.resolutions,
		format: body.format
	});

	// Handle import session resolution (user provided missing entity details)
	if (body.importSessionId && body.resolutions) {
		const sessionId = body.importSessionId;
		const sessionData = importSessions.get(sessionId);

		if (!sessionData) {
			logger.warn('Import session not found:', sessionId);
			return json({ success: false, error: 'Import session not found or expired' }, { status: 404 });
		}

		logger.debug('Processing resolutions for session:', sessionId);
		logger.debug('Resolutions received:', body.resolutions);

		// Apply resolutions and continue import
		try {
			const result = await importData(sessionData.data, sessionData.format, {
				...sessionData.options,
				resolutions: body.resolutions
			});

			// Clear the session
			importSessions.delete(sessionId);

			logger.info('Import with resolutions completed:', {
				success: result.success,
				created: result.created,
				errors: result.errors.length
			});

			return json({
				success: result.success,
				message: result.success ? 'Import completed successfully' : 'Import completed with errors',
				created: result.created,
				updated: result.updated,
				errors: result.errors
			});
		} catch (error) {
			logger.error('Error during resolution import:', error);
			return json(
				{
					success: false,
					error: error instanceof Error ? error.message : 'Unknown error during import'
				},
				{ status: 500 }
			);
		}
	}

	// Handle new import request
	const { data, format, options } = body;

	if (!data || !format || (format !== 'csv' && format !== 'json')) {
		logger.warn('Invalid import request:', { data: !!data, format });
		return json(
			{ success: false, error: 'Invalid import data or format' },
			{ status: 400 }
		);
	}

	try {
		// Start the import process
		logger.debug('Starting import with options:', options);
		const result = await importData(data, format, options);

		// Check for missing entities that need resolution
		if ((!options.createMissingEntities) && result.errors &&
			result.errors.some(e => e.includes('Missing manufacturers need to be resolved'))) {
			// Create an import session for later resolution
			const sessionId = randomUUID();

			// Extract missing entities
			const missingEntities: MissingEntity[] = [];

			// If we have missingManufacturers in the result, use those directly
			if (result.missingManufacturers) {
				logger.debug('Missing manufacturers found:', result.missingManufacturers);
				missingEntities.push(
					...result.missingManufacturers.map((m: { id: string; referenceName?: string; referencedIn: string }) => ({
						type: 'manufacturer' as const,
						id: m.id,
						referencedIn: m.referencedIn,
						referenceName: m.referenceName
					}))
				);
			}

			logger.info('Created import session for resolution:', {
				sessionId,
				entityCount: missingEntities.length
			});

			// Store session data for later
			importSessions.set(sessionId, {
				data,
				format,
				options,
				missingEntities
			});

			// Return response indicating missing entities
			return json({
				success: false,
				message: 'Missing entities need to be resolved before import can continue',
				missingEntities,
				importSessionId: sessionId
			});
		}

		// If no missing entities or createMissingEntities is true, return the result
		logger.info('Import completed without resolutions:', {
			success: result.success,
			created: result.created,
			errors: result.errors.length
		});

		return json({
			success: result.success,
			message: result.success ? 'Import completed successfully' : 'Import completed with errors',
			created: result.created,
			updated: result.updated,
			errors: result.errors
		});
	} catch (error) {
		logger.error('Error during import:', error);
		return json(
			{
				success: false,
				error: error instanceof Error ? error.message : 'Unknown error during import'
			},
			{ status: 500 }
		);
	}
};
