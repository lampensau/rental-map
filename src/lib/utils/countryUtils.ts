/**
 * Country utilities for standardizing country names to ISO 2-letter codes
 */

/**
 * Map of common country names to their ISO 2-letter country codes
 */
const COUNTRY_CODE_MAP: Record<string, string> = {
  // German names
  'deutschland': 'DE',
  'österreich': 'AT',
  'schweiz': 'CH',
  'frankreich': 'FR',
  'niederlande': 'NL',
  'belgien': 'BE',
  'luxemburg': 'LU',
  'italien': 'IT',
  'spanien': 'ES',
  'portugal': 'PT',
  'dänemark': 'DK',
  'schweden': 'SE',
  'norwegen': 'NO',
  'finnland': 'FI',
  'grossbritannien': 'GB',
  'vereinigtes königreich': 'GB',
  'polen': 'PL',
  'tschechien': 'CZ',
  'ungarn': 'HU',
  'slowakei': 'SK',
  'slowenien': 'SI',
  'kroatien': 'HR',
  'russland': 'RU',
  'griechenland': 'GR',
  'türkei': 'TR',
  'ukraine': 'UA',
  'rumänien': 'RO',
  'bulgarien': 'BG',
  'serbien': 'RS'
};

// Additional map for German variants and compound words
const GERMAN_VARIANTS: Record<string, string> = {
  'großbritannien': 'GB',
  'vereinigte königreich': 'GB'
};

// Map for English country names
const ENGLISH_NAMES: Record<string, string> = {
  'germany': 'DE',
  'austria': 'AT',
  'switzerland': 'CH',
  'france': 'FR',
  'netherlands': 'NL',
  'belgium': 'BE',
  'luxembourg': 'LU',
  'italy': 'IT',
  'spain': 'ES',
  'portugal': 'PT',
  'denmark': 'DK',
  'sweden': 'SE',
  'norway': 'NO',
  'finland': 'FI',
  'united kingdom': 'GB',
  'great britain': 'GB',
  'poland': 'PL',
  'czech republic': 'CZ',
  'czechia': 'CZ',
  'hungary': 'HU',
  'slovakia': 'SK',
  'slovenia': 'SI',
  'croatia': 'HR',
  'russia': 'RU',
  'greece': 'GR',
  'turkey': 'TR',
  'ukraine': 'UA',
  'romania': 'RO',
  'bulgaria': 'BG',
  'serbia': 'RS'
};

// Common abbreviations and simple country codes
const COUNTRY_ABBREVIATIONS: Record<string, string> = {
  'uk': 'GB',
  'de': 'DE',
  'at': 'AT',
  'ch': 'CH',
  'fr': 'FR',
  'nl': 'NL',
  'be': 'BE',
  'lu': 'LU',
  'it': 'IT',
  'es': 'ES',
  'pt': 'PT',
  'dk': 'DK',
  'se': 'SE',
  'no': 'NO',
  'fi': 'FI',
  'gb': 'GB',
  'pl': 'PL',
  'cz': 'CZ',
  'hu': 'HU',
  'sk': 'SK',
  'si': 'SI',
  'hr': 'HR',
  'ru': 'RU',
  'gr': 'GR',
  'tr': 'TR',
  'ua': 'UA',
  'ro': 'RO',
  'bg': 'BG',
  'rs': 'RS'
};

/**
 * Check if a string is a valid ISO 2-letter country code
 * @param code The country code to validate
 * @returns True if the code is a valid 2-letter country code
 */
export function isValidCountryCode(code: string): boolean {
  if (!code || typeof code !== 'string') return false;

  // Convert to uppercase and check if it's 2 letters
  const upperCode = code.toUpperCase();
  return /^[A-Z]{2}$/.test(upperCode);
}

/**
 * Convert a country name or code to a standardized ISO 2-letter country code
 * @param country The country name or code to convert
 * @returns The standardized 2-letter ISO country code, or the original string if no match
 */
export function convertCountryToCode(country: string): string {
  if (!country || typeof country !== 'string') return country;

  // If already a valid 2-letter code, return it
  if (isValidCountryCode(country)) {
    return country.toUpperCase();
  }

  // Normalize to lowercase for lookup
  const normalizedCountry = country.toLowerCase().trim();

  // Check all maps in order
  if (COUNTRY_ABBREVIATIONS[normalizedCountry]) {
    return COUNTRY_ABBREVIATIONS[normalizedCountry];
  }

  if (COUNTRY_CODE_MAP[normalizedCountry]) {
    return COUNTRY_CODE_MAP[normalizedCountry];
  }

  if (GERMAN_VARIANTS[normalizedCountry]) {
    return GERMAN_VARIANTS[normalizedCountry];
  }

  if (ENGLISH_NAMES[normalizedCountry]) {
    return ENGLISH_NAMES[normalizedCountry];
  }

  // Return the original string if no match found
  return country;
}

/**
 * Format an address according to the standardized format:
 * <street-name> <house-number>, <country-code>-<zip-code> <city>
 * @param address Street address
 * @param postalCode Postal/ZIP code
 * @param city City name
 * @param country Country name or code
 * @returns Formatted address string
 */
export function formatStandardAddress(
  address: string,
  postalCode: string,
  city: string,
  country: string
): string {
  const countryCode = convertCountryToCode(country);
  return `${address}, ${countryCode}-${postalCode} ${city}`;
} 