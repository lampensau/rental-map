/**
 * Geocoding service using Nominatim (OpenStreetMap)
 * This provides a free geocoding service without API key requirements
 */
import { createLogger } from '$lib/utils/logger';

const logger = createLogger('geocoding');

interface GeocodingResult {
  latitude: number;
  longitude: number;
}

interface NominatimResponse {
  place_id: number;
  licence: string;
  osm_type: string;
  osm_id: number;
  boundingbox: string[];
  lat: string;
  lon: string;
  display_name: string;
  class: string;
  type: string;
  importance: number;
  address?: {
    house_number?: string;
    road?: string;
    suburb?: string;
    city?: string;
    municipality?: string;
    county?: string;
    state?: string;
    postcode?: string;
    country?: string;
    country_code?: string;
  };
}

/**
 * Parse an address into components for more accurate geocoding
 * Supports format: "street name <number>, <2-letter-country-code>-<zip-code>"
 * @param address Full address string
 */
function parseAddress(address: string): {
  street?: string;
  houseNumber?: string;
  city?: string;
  postalCode?: string;
  country?: string;
  countryCode?: string;
} {
  const components: {
    street?: string;
    houseNumber?: string;
    city?: string;
    postalCode?: string;
    country?: string;
    countryCode?: string;
  } = {};

  try {
    // First, let's handle the comma separation - typically separates street from city/postal
    const parts = address.split(',').map(p => p.trim());

    // Handle the street part (first segment)
    if (parts.length > 0) {
      // Match street name and house number 
      const streetMatch = parts[0].match(/^(.+?)\s+(\d+(?:[-\/]?\d*)?(?:\s*[A-Za-z]*)?)$/);

      if (streetMatch) {
        components.street = streetMatch[1].trim();
        // Extract house number and remove any non-numeric characters
        let rawHouseNumber = streetMatch[2].trim();
        components.houseNumber = rawHouseNumber.replace(/[^\d]/g, '');

        logger.debug(`Parsed house number: "${rawHouseNumber}" → "${components.houseNumber}"`);
      } else {
        // If we can't extract a house number, use the whole thing as street
        components.street = parts[0];
      }
    }

    // Handle city/postal code part (second segment if it exists)
    if (parts.length > 1) {
      // Check for country code and postal code format: "DE-12345 City"
      const locationMatch = parts[1].match(/^([A-Z]{2})-(\d+)\s+(.+)$/);

      if (locationMatch) {
        components.countryCode = locationMatch[1];
        components.postalCode = locationMatch[2];
        components.city = locationMatch[3];
      } else {
        // Try to extract postal code if in the form "12345 City"
        const postalCityMatch = parts[1].match(/^(\d+)\s+(.+)$/);

        if (postalCityMatch) {
          components.postalCode = postalCityMatch[1];
          components.city = postalCityMatch[2];
        } else {
          // Just use the whole thing as city
          components.city = parts[1];
        }
      }
    }

    // Use Germany as default country if not specified
    if (!components.country && !components.countryCode) {
      components.country = 'Deutschland';
      components.countryCode = 'DE';
    }
  } catch (error) {
    logger.error('Error parsing address:', error);
  }

  return components;
}

/**
 * Convert an address to latitude and longitude coordinates
 * @param address Full address string
 * @returns Promise with latitude and longitude
 */
export async function geocodeAddress(address: string): Promise<GeocodingResult> {
  try {
    // Parse the address into components
    const components = parseAddress(address);
    logger.debug('Parsed address components:', components);

    // First try: Use structured query with all available components
    // This is most precise when components are correctly parsed
    let params = new URLSearchParams({
      format: 'json',
      addressdetails: '1',
      limit: '1',
      extratags: '1',
      countrycodes: components.countryCode || 'de',
    });

    // Add structured parameters for more precise geocoding
    if (components.street) params.append('street', `${components.street} ${components.houseNumber || ''}`);
    if (components.city) params.append('city', components.city);
    if (components.postalCode) params.append('postalcode', components.postalCode);
    if (components.country) params.append('country', components.country);

    logger.debug('Geocoding URL params (structured):', params.toString());

    // Make the request to Nominatim
    let response = await fetch(
      `https://nominatim.openstreetmap.org/search?${params.toString()}`,
      {
        headers: {
          'Accept-Language': 'de', // Return German results
          'User-Agent': 'RentalMap/1.0' // Required by Nominatim ToS
        }
      }
    );

    if (!response.ok) {
      throw new Error(`Geocoding API error: ${response.status} ${response.statusText}`);
    }

    let data = await response.json() as NominatimResponse[];

    // If structured search failed or returned no results, try with "q" parameter
    if (!data || data.length === 0) {
      // Second try: Use the full address as a single search string
      // This sometimes works better for addresses in non-standard formats
      return geocodeAddressFallback(address);
    }

    // Log the actual matched address for debugging
    if (data[0].display_name) {
      logger.info('Geocoded to:', data[0].display_name);
      if (data[0].address) {
        logger.debug('Address details:', data[0].address);
      }
    }

    return {
      latitude: parseFloat(data[0].lat),
      longitude: parseFloat(data[0].lon)
    };
  } catch (error) {
    logger.error('Geocoding error:', error);
    throw error;
  }
}

/**
 * Fallback geocoding function using the q parameter
 */
async function geocodeAddressFallback(address: string): Promise<GeocodingResult> {
  try {
    // We'll try two different query formats for better results
    const components = parseAddress(address);

    // Format 1: Full address as given
    let encodedAddress = encodeURIComponent(address);
    logger.debug('Using fallback geocoding with q parameter');

    let response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodedAddress}&addressdetails=1&limit=1&countrycodes=de`,
      {
        headers: {
          'Accept-Language': 'de',
          'User-Agent': 'RentalMap/1.0'
        }
      }
    );

    if (!response.ok) {
      throw new Error(`Geocoding API error: ${response.status} ${response.statusText}`);
    }

    let data = await response.json() as NominatimResponse[];

    // If first approach fails, try a more specific format
    if (!data || data.length === 0) {
      // Format 2: Try with explicit house number and street in the query
      if (components.street && components.houseNumber) {
        const structuredQuery = `${components.houseNumber} ${components.street}, ${components.postalCode || ''} ${components.city || ''}, ${components.country || 'Deutschland'}`;
        logger.debug('Using second fallback with structured query:', structuredQuery);

        encodedAddress = encodeURIComponent(structuredQuery);
        response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodedAddress}&addressdetails=1&limit=1&countrycodes=de`,
          {
            headers: {
              'Accept-Language': 'de',
              'User-Agent': 'RentalMap/1.0'
            }
          }
        );

        if (!response.ok) {
          throw new Error(`Geocoding API error: ${response.status} ${response.statusText}`);
        }

        data = await response.json() as NominatimResponse[];
      }
    }

    if (!data || data.length === 0) {
      throw new Error('Adresse konnte nicht gefunden werden');
    }

    // Log the fallback matched address
    logger.info('Fallback geocoded to:', data[0].display_name);

    return {
      latitude: parseFloat(data[0].lat),
      longitude: parseFloat(data[0].lon)
    };
  } catch (error) {
    logger.error('Geocoding fallback error:', error);
    throw error;
  }
}

/**
 * Reverse geocoding - convert coordinates to address
 * @param latitude Latitude
 * @param longitude Longitude
 * @returns Promise with address
 */
export async function reverseGeocode(latitude: number, longitude: number): Promise<string> {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&addressdetails=1`,
      {
        headers: {
          'Accept-Language': 'de', // Return German results
          'User-Agent': 'RentalMap/1.0' // Required by Nominatim ToS
        }
      }
    );

    if (!response.ok) {
      throw new Error(`Reverse geocoding API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json() as NominatimResponse;

    if (!data || !data.display_name) {
      throw new Error('Adresse konnte nicht gefunden werden');
    }

    return data.display_name;
  } catch (error) {
    logger.error('Reverse geocoding error:', error);
    throw error;
  }
} 