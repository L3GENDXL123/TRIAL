import { Product } from './types';

export const MOCK_PHONES: Product[] = [
  {
    id: 1,
    name: 'Pixel Pro 9',
    brand: 'Google',
    price: 999,
    imageUrl: 'https://picsum.photos/seed/pixel9pro/600/400',
    description: 'The latest flagship from Google, featuring an unparalleled camera system and the powerful new Tensor G4 chip.',
    features: ['Pro-level Camera System', 'Tensor G4 Chip', 'All-day Adaptive Battery', '6.7" Super Actua Display'],
  },
  {
    id: 2,
    name: 'Galaxy Ultra 24',
    brand: 'Samsung',
    price: 1049,
    originalPrice: 1199,
    imageUrl: 'https://picsum.photos/seed/galaxyultra24/600/400',
    description: 'Experience the epic standard with Galaxy AI. A stunning display, pro-grade cameras, and the integrated S Pen.',
    features: ['Galaxy AI', '200MP Main Camera', 'Snapdragon® 8 Gen 3', 'Built-in S Pen'],
  },
  {
    id: 3,
    name: 'iPhone Pro 16',
    brand: 'Apple',
    price: 1099,
    imageUrl: 'https://picsum.photos/seed/iphone16pro/600/400',
    description: 'Forged in titanium and featuring the groundbreaking A18 Pro chip, a customizable Action button, and a more versatile Pro camera system.',
    features: ['A18 Pro Chip', 'Titanium Design', 'Action Button', 'Dynamic Island'],
  },
  {
    id: 4,
    name: 'Starlight X1',
    brand: 'Nova',
    price: 649,
    originalPrice: 749,
    imageUrl: 'https://picsum.photos/seed/starlightx1/600/400',
    description: 'A challenger flagship with a focus on clean software and blazing-fast performance. The ultimate minimalist device.',
    features: ['Clean Android Experience', '120Hz Fluid Display', 'Warp Speed Charging', 'Hasselblad Camera'],
  },
  {
    id: 5,
    name: 'Pixel 9a',
    brand: 'Google',
    price: 499,
    imageUrl: 'https://picsum.photos/seed/pixel9a/600/400',
    description: 'The helpful phone from Google, at a helpful price. All the power of Google AI in a budget-friendly package.',
    features: ['Tensor G3 Chip', 'Magic Eraser', 'Extreme Battery Saver', '6.1" OLED Display'],
  },
  {
    id: 6,
    name: 'Galaxy Flip 6',
    brand: 'Samsung',
    price: 999,
    imageUrl: 'https://picsum.photos/seed/galaxyflip6/600/400',
    description: 'The phone that flips to fit in your pocket. A large cover screen and versatile FlexCam make it a creative powerhouse.',
    features: ['Flex Window', 'FlexCam', 'Compact Design', 'IPX8 Water Resistance'],
  },
];

export const NEW_ARRIVALS: Product[] = MOCK_PHONES.filter(p => [1, 2, 3].includes(p.id));

export const DEALS_PHONES: Product[] = MOCK_PHONES.filter(p => p.originalPrice);

export const BRANDS: string[] = ['All', ...Array.from(new Set(MOCK_PHONES.map(p => p.brand)))];
