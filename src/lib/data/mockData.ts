import type { Manufacturer, Product, RentalCompany } from '$lib/types';

export const manufacturers: Manufacturer[] = [
  {
    id: 'elc',
    name: 'ELC Lighting',
    isActive: true,
    products: []
  },
  {
    id: 'firststage',
    name: 'fiRSTstage',
    isActive: true,
    products: []
  },
  {
    id: 'greengo',
    name: 'Green-GO',
    isActive: true,
    products: []
  },
  {
    id: 'greenhippo',
    name: 'Green Hippo',
    isActive: true,
    products: []
  },
  {
    id: 'hive',
    name: 'HIVE',
    isActive: true,
    products: []
  },
  {
    id: 'ronstagemaster',
    name: 'RonStageMaster',
    isActive: true,
    products: []
  },
  {
    id: 'srslighting',
    name: 'SRS Lighting',
    isActive: true,
    products: []
  },
  {
    id: 'srsrigging',
    name: 'SRS Rigging',
    isActive: true,
    products: []
  },
  {
    id: 'stagemaker',
    name: 'Stagemaker',
    isActive: true,
    products: []
  }
];

export const products: Product[] = [
  // ELC Lighting products
  { id: 'elc1', name: 'node8 GBx', manufacturerId: 'elc', isActive: true },
  { id: 'elc2', name: 'node3 TM FI', manufacturerId: 'elc', isActive: true },
  { id: 'elc3', name: 'showStore GBx', manufacturerId: 'elc', isActive: true },

  // fiRSTstage products
  { id: 'firststage1', name: 'GS1 HD', manufacturerId: 'firststage', isActive: true },
  { id: 'firststage2', name: 'LT-Easy 30', manufacturerId: 'firststage', isActive: true },
  { id: 'firststage3', name: 'LT1-X', manufacturerId: 'firststage', isActive: true },
  { id: 'firststage4', name: 'LT2-X', manufacturerId: 'firststage', isActive: true },

  // Green-GO products
  { id: 'greengo1', name: 'MCX Rack', manufacturerId: 'greengo', isActive: true },
  { id: 'greengo2', name: 'MCXD Desk', manufacturerId: 'greengo', isActive: true },
  { id: 'greengo3', name: 'BPX Beltpack', manufacturerId: 'greengo', isActive: true },
  { id: 'greengo4', name: 'WBPX Beltpack', manufacturerId: 'greengo', isActive: true },
  { id: 'greengo5', name: 'INTX Interface', manufacturerId: 'greengo', isActive: true },

  // Green Hippo products
  { id: 'greenhippo1', name: 'Nevis', manufacturerId: 'greenhippo', isActive: true },
  { id: 'greenhippo2', name: 'TEKA', manufacturerId: 'greenhippo', isActive: true },
  { id: 'greenhippo3', name: 'HYCO', manufacturerId: 'greenhippo', isActive: true },

  // HIVE products
  { id: 'hive1', name: 'Minima', manufacturerId: 'hive', isActive: true },
  { id: 'hive2', name: 'Osmia', manufacturerId: 'hive', isActive: true },
  { id: 'hive3', name: 'Pluto', manufacturerId: 'hive', isActive: true },
  { id: 'hive4', name: 'Nexus', manufacturerId: 'hive', isActive: true },

  // RonStageMaster products
  { id: 'ronstagemaster1', name: '5000-G4', manufacturerId: 'ronstagemaster', isActive: true },

  // SRS Lighting products
  { id: 'srslighting1', name: 'DC6-5-JR', manufacturerId: 'srslighting', isActive: true },
  { id: 'srslighting2', name: 'SPUN12', manufacturerId: 'srslighting', isActive: true },
  { id: 'srslighting3', name: 'DMX1SW', manufacturerId: 'srslighting', isActive: true },

  // SRS Rigging products
  { id: 'srsrigging1', name: 'AHD12-LV-12H6', manufacturerId: 'srsrigging', isActive: true },
  { id: 'srsrigging2', name: 'AHD8-DV-CEE', manufacturerId: 'srsrigging', isActive: true },
  { id: 'srsrigging3', name: 'PDU12354321S', manufacturerId: 'srsrigging', isActive: true },

  // Stagemaker products
  { id: 'stagemaker1', name: 'SL10', manufacturerId: 'stagemaker', isActive: true },
  { id: 'stagemaker2', name: 'SL5', manufacturerId: 'stagemaker', isActive: true },
  { id: 'stagemaker3', name: 'SR1', manufacturerId: 'stagemaker', isActive: true }
];

// Update manufacturers with their products
manufacturers.forEach((manufacturer) => {
  manufacturer.products = products.filter((product) => product.manufacturerId === manufacturer.id);
});

export const rentalCompanies: RentalCompany[] = [
  {
    id: 'rc1',
    name: 'Tech Rentals Berlin',
    address: 'Berliner Str. 123',
    city: 'Berlin',
    postalCode: '10115',
    country: 'Germany',
    latitude: 52.52,
    longitude: 13.405,
    website: 'https://tech-rentals-berlin.de',
    phone: '+49-30-12345678',
    isActive: true,
    inventory: [
      { productId: 'elc1', quantity: 5 },
      { productId: 'greengo3', quantity: 10 },
      { productId: 'hive2', quantity: 3 }
    ]
  },
  {
    id: 'rc2',
    name: 'StageEquip Hamburg',
    address: 'Hamburger Platz 45',
    city: 'Hamburg',
    postalCode: '20095',
    country: 'Germany',
    latitude: 53.5511,
    longitude: 9.9937,
    website: 'https://stageequip-hamburg.de',
    phone: '+49-40-9876543',
    isActive: true,
    inventory: [
      { productId: 'firststage2', quantity: 8 },
      { productId: 'greenhippo1', quantity: 2 },
      { productId: 'stagemaker1', quantity: 4 }
    ]
  },
  {
    id: 'rc3',
    name: 'LiveTech Munich',
    address: 'Münchner Weg 78',
    city: 'Munich',
    postalCode: '80331',
    country: 'Germany',
    latitude: 48.1351,
    longitude: 11.582,
    website: 'https://livetech-munich.de',
    phone: '+49-89-5647382',
    isActive: true,
    inventory: [
      { productId: 'greengo1', quantity: 3 },
      { productId: 'srslighting2', quantity: 15 },
      { productId: 'ronstagemaster1', quantity: 2 }
    ]
  },
  {
    id: 'rc4',
    name: 'Stage Systems Frankfurt',
    address: 'Frankfurter Ring 240',
    city: 'Frankfurt',
    postalCode: '60311',
    country: 'Germany',
    latitude: 50.1109,
    longitude: 8.6821,
    website: 'https://stage-systems-frankfurt.de',
    phone: '+49-69-12378945',
    isActive: true,
    inventory: [
      { productId: 'elc3', quantity: 4 },
      { productId: 'firststage4', quantity: 6 },
      { productId: 'srsrigging3', quantity: 7 }
    ]
  },
  {
    id: 'rc5',
    name: 'Event Tech Cologne',
    address: 'Kölner Str. 56',
    city: 'Cologne',
    postalCode: '50667',
    country: 'Germany',
    latitude: 50.9375,
    longitude: 6.9603,
    website: 'https://eventtech-cologne.de',
    phone: '+49-221-3456789',
    isActive: true,
    inventory: [
      { productId: 'greengo5', quantity: 5 },
      { productId: 'greenhippo3', quantity: 1 },
      { productId: 'hive4', quantity: 2 }
    ]
  },
  {
    id: 'rc6',
    name: 'Pro Audio Düsseldorf',
    address: 'Düsseldorfer Allee 121',
    city: 'Düsseldorf',
    postalCode: '40210',
    country: 'Germany',
    latitude: 51.2277,
    longitude: 6.7735,
    website: 'https://proaudio-duesseldorf.de',
    phone: '+49-211-7654321',
    isActive: true,
    inventory: [
      { productId: 'elc2', quantity: 3 },
      { productId: 'firststage1', quantity: 5 },
      { productId: 'stagemaker2', quantity: 6 }
    ]
  },
  {
    id: 'rc7',
    name: 'Stage Gear Leipzig',
    address: 'Leipziger Ring 88',
    city: 'Leipzig',
    postalCode: '04109',
    country: 'Germany',
    latitude: 51.3397,
    longitude: 12.3731,
    website: 'https://stagegear-leipzig.de',
    phone: '+49-341-9876543',
    isActive: true,
    inventory: [
      { productId: 'greengo2', quantity: 4 },
      { productId: 'srslighting1', quantity: 8 },
      { productId: 'srsrigging1', quantity: 3 }
    ]
  },
  {
    id: 'rc8',
    name: 'Rent-A-Stage Stuttgart',
    address: 'Stuttgarter Platz 34',
    city: 'Stuttgart',
    postalCode: '70173',
    country: 'Germany',
    latitude: 48.7758,
    longitude: 9.1829,
    website: 'https://rentastage-stuttgart.de',
    phone: '+49-711-2345678',
    isActive: true,
    inventory: [
      { productId: 'firststage3', quantity: 7 },
      { productId: 'hive1', quantity: 2 },
      { productId: 'stagemaker3', quantity: 5 }
    ]
  },
  {
    id: 'rc9',
    name: 'Event Solutions Dresden',
    address: 'Dresdner Allee 67',
    city: 'Dresden',
    postalCode: '01067',
    country: 'Germany',
    latitude: 51.0504,
    longitude: 13.7373,
    website: 'https://eventsolutions-dresden.de',
    phone: '+49-351-6543210',
    isActive: true,
    inventory: [
      { productId: 'greengo4', quantity: 6 },
      { productId: 'greenhippo2', quantity: 2 },
      { productId: 'srsrigging2', quantity: 4 }
    ]
  },
  {
    id: 'rc10',
    name: 'Tech Hire Bremen',
    address: 'Bremer Straße 112',
    city: 'Bremen',
    postalCode: '28195',
    country: 'Germany',
    latitude: 53.0793,
    longitude: 8.8017,
    website: 'https://techhire-bremen.de',
    phone: '+49-421-9876543',
    isActive: true,
    inventory: [
      { productId: 'elc1', quantity: 3 },
      { productId: 'hive3', quantity: 1 },
      { productId: 'srslighting3', quantity: 9 }
    ]
  }
];
