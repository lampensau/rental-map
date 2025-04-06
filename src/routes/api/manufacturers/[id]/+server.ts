import { json } from '@sveltejs/kit';
import * as firestoreService from '$lib/services/firestore';
import type { RequestEvent } from '@sveltejs/kit';
import { isUserAdmin } from '$lib/services/auth';
import { createLogger } from '$lib/utils/logger';

// Create logger for this module
const logger = createLogger('manufacturerIDAPI');

export async function GET({ params }: RequestEvent) {
  try {
    const id = params.id;
    if (!id) {
      logger.warn('Invalid manufacturer ID parameter');
      return new Response(JSON.stringify({ error: 'Invalid manufacturer ID' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    logger.debug(`Fetching manufacturer with ID: ${id}`);
    const manufacturer = await firestoreService.getManufacturer(id);

    if (!manufacturer) {
      logger.warn(`Manufacturer not found: ${id}`);
      return new Response(JSON.stringify({ error: 'Manufacturer not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return json(manufacturer);
  } catch (error) {
    logger.error(`Error fetching manufacturer ${params.id}:`, error);
    return new Response(
      JSON.stringify({ error: 'Failed to fetch manufacturer' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

export async function PATCH({ request, params }: RequestEvent) {
  // Check authentication
  let isAdminUser = false;
  isUserAdmin.subscribe(value => {
    isAdminUser = value;
  })();

  if (!isAdminUser) {
    logger.warn(`Unauthorized PATCH attempt for manufacturer ${params.id}`);
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const id = params.id;
    if (!id) {
      logger.warn('Invalid manufacturer ID parameter');
      return new Response(JSON.stringify({ error: 'Invalid manufacturer ID' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const data = await request.json();
    logger.info(`Updating manufacturer ${id} with data:`, data);
    await firestoreService.updateManufacturer(id, data);

    // Return the updated manufacturer
    const manufacturer = await firestoreService.getManufacturer(id);

    if (!manufacturer) {
      logger.warn(`Manufacturer not found after update: ${id}`);
      return new Response(JSON.stringify({ error: 'Manufacturer not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return json(manufacturer);
  } catch (error) {
    logger.error(`Error updating manufacturer ${params.id}:`, error);
    return new Response(
      JSON.stringify({ error: 'Failed to update manufacturer' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

export async function PUT({ request, params }: RequestEvent) {
  // Check authentication
  let isAdminUser = false;
  isUserAdmin.subscribe(value => {
    isAdminUser = value;
  })();

  if (!isAdminUser) {
    logger.warn(`Unauthorized PUT attempt for manufacturer ${params.id}`);
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const id = params.id;
    if (!id) {
      logger.warn('Invalid manufacturer ID parameter');
      return new Response(JSON.stringify({ error: 'Invalid manufacturer ID' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const { isActive } = await request.json();

    if (typeof isActive !== 'boolean') {
      logger.warn(`Invalid isActive parameter for manufacturer ${id}`);
      return new Response(JSON.stringify({ error: 'isActive must be a boolean' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    logger.info(`Toggling manufacturer ${id} status to ${isActive}`);
    await firestoreService.toggleManufacturerStatus(id, isActive);

    return json({ success: true, isActive });
  } catch (error) {
    logger.error(`Error toggling manufacturer ${params.id} status:`, error);
    return new Response(
      JSON.stringify({ error: 'Failed to toggle manufacturer status' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
} 