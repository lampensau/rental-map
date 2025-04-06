# Import Test Data

This repository contains test data files to validate the import functionality for the rental equipment management system.

## Available Files

- `sample-import-data.json` - Test data in JSON format with 20 rental companies and their inventory
- `sample-import-data.csv` - Test data in CSV format with 20 rental companies and their inventory

## Data Structure

### JSON Format

The JSON file contains an array of rental company objects with the following structure:

```json
{
  "id": "K1001",                           // Rental company ID (KXXXX format)
  "address": "Friedrichstraße 123",        // Street address 
  "city": "Berlin",                        // City
  "postalCode": "10117",                   // Postal code
  "country": "DE",                         // Country code
  "website": "https://example.com",        // Website URL
  "phone": "+49 30 12345678",              // Phone number
  "email": "info@example.com",             // Email address
  "inventory": [                           // Array of inventory items
    { 
      "productId": "511-5083-3310",        // Product ID
      "productName": "Product Name",       // Product name
      "manufacturerName": "Manufacturer",  // Manufacturer name
      "quantity": 5                        // Quantity in stock
    }
  ]
}
```

### CSV Format

The CSV file contains rental companies and their inventory in the following format:

```
KXXXX, street address, city, country, zip, web page, phone, email  // Rental company line
product-id, product name, manufacturer name, quantity              // Product line
```

The products belong to the most recently defined rental company above them in the file.

## Testing Instructions

1. Open the Admin Panel in the application
2. Click on the "Import" button
3. Select the appropriate format (CSV or JSON)
4. Either:
   - Upload one of the test files using the file upload option
   - Copy and paste the contents of a test file into the text area
5. Configure import options as needed (select which entity types to import)
6. Click "Import Data" to start the import process

### Testing Entity Resolution

To test the entity resolution functionality:

1. Ensure some of the manufacturers or products in the test data don't exist in your system
2. Disable the "Auto-create missing entities" option before importing
3. The system should detect missing entities and prompt for resolution

## Data Characteristics

- All rental company data includes real German addresses for testing geocoding functionality
- Various quantities of inventory items per rental company (1-4 items per company)
- Mix of different products from different manufacturers
- Some duplicated products across different rental companies to test aggregation

## Notes

- The IDs used in this test data (K1001-K1020 for JSON and K2001-K2020 for CSV) are distinct to help differentiate the source during testing
- All product IDs and names match those provided in the product-examples.md file 