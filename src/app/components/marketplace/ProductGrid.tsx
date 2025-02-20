'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import ProductModal from './ProductModal';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  condition: string;
  warranty: {
    duration: string;
    coverage: string;
  };
  specifications: {
    [key: string]: string;
  };
  images: string[];
  vendor: {
    id: string;
    name: string;
    rating: number;
    phone: string;
    email: string;
    location: string;
    joinedDate: string;
  };
  category: string;
  type: string;
}

const products: Product[] = [
  {
    id: 'premium-dental-chair',
    name: 'Dental Chair XR-500',
    description: 'Advanced dental chair with integrated LED lighting and ergonomic design.',
    price: 4999.99,
    condition: 'New',
    warranty: {
      duration: '2 Years',
      coverage: 'Full parts and labor coverage',
    },
    specifications: {
      'Max Weight': '180 kg',
      'Power': '110V/220V',
      'Material': 'Premium leather upholstery',
      'Color': 'Pearl White',
      'Features': 'LED lighting, USB ports',
      'Dimensions': '1800 x 720 x 650 mm',
    },
    images: [
      '/images/marketplace/dental-chair-1.jpg',
      '/images/dental-chair-2.jpg',
      '/images/dental-chair-3.jpg',
      '/images/dental-chair-4.jpg',
    ],
    vendor: {
      id: 'dentaltech-solutions',
      name: 'DentalTech Solutions',
      rating: 4.8,
      phone: '+1 (555) 123-4567',
      email: 'sales@dentaltech.com',
      location: 'Los Angeles, CA',
      joinedDate: 'January 2020',
    },
    category: 'Equipment',
    type: 'Dental Chair',
  },
  {
    id: 'digital-scanner-pro',
    name: 'Digital Scanner Pro X3',
    description: 'High-precision intraoral scanner with real-time 3D modeling capabilities.',
    price: 15999.99,
    condition: 'New',
    warranty: {
      duration: '3 Years',
      coverage: 'Comprehensive coverage with priority support',
    },
    specifications: {
      'Accuracy': '10 microns',
      'Scan Speed': '60 FPS',
      'Output Format': 'STL, PLY, OBJ',
      'Connection': 'USB 3.0',
      'Weight': '250g',
      'Field of View': '16 x 14 mm',
    },
    images: [
      '/images/marketplace/xray-enclave.jpg',
      '/images/scanner-2.jpg',
      '/images/scanner-3.jpg',
      '/images/scanner-4.jpg',
    ],
    vendor: {
      id: 'digital-dental-systems',
      name: 'Digital Dental Systems',
      rating: 4.9,
      phone: '+1 (555) 987-6543',
      email: 'info@digitaldental.com',
      location: 'San Francisco, CA',
      joinedDate: 'March 2019',
    },
    category: 'Equipment',
    type: 'Digital Scanner',
  },
  {
    id: 'composite-kit-deluxe',
    name: 'Premium Composite Resin Kit',
    description: 'Complete kit of premium composite resins for anterior and posterior restorations.',
    price: 599.99,
    condition: 'New',
    warranty: {
      duration: '1 Year',
      coverage: 'Material quality guarantee',
    },
    specifications: {
      'Shades': '16 VITA shades',
      'Type': 'Nano-hybrid',
      'Curing Time': '20 seconds',
      'Package Contents': '16 syringes, shade guide',
      'Storage': 'Room temperature',
      'Shelf Life': '24 months',
    },
    images: [
      '/images/marketplace/dental-kit.jpg',
      '/images/composite-kit-2.jpg',
      '/images/composite-kit-3.jpg',
      '/images/composite-kit-4.jpg',
    ],
    vendor: {
      id: 'dental-materials-plus',
      name: 'Dental Materials Plus',
      rating: 4.7,
      phone: '+1 (555) 456-7890',
      email: 'sales@dentalmaterials.com',
      location: 'Chicago, IL',
      joinedDate: 'June 2021',
    },
    category: 'Materials',
    type: 'Composite Resin',
  },
  {
    id: 'led-dental-light-pro',
    name: 'LED Dental Light System',
    description: 'High-intensity LED operatory light with color temperature control.',
    price: 2299.99,
    condition: 'New',
    warranty: {
      duration: '2 Years',
      coverage: 'Manufacturer warranty',
    },
    specifications: {
      'Intensity': '8,000-40,000 lux',
      'Color Temperature': '4200K-6000K',
      'Control': 'Touch-free sensor',
      'Mount Type': 'Ceiling/Wall mount',
      'Power': '24V DC',
      'Lifespan': '50,000 hours',
    },
    images: [
      '/images/marketplace/dental-lamp.jpg',
      '/images/dental-light-2.jpg',
      '/images/dental-light-3.jpg',
      '/images/dental-light-4.jpg',
    ],
    vendor: {
      id: 'dental-lighting-co',
      name: 'Dental Lighting Co',
      rating: 4.8,
      phone: '+1 (555) 234-5678',
      email: 'info@dentallighting.com',
      location: 'Seattle, WA',
      joinedDate: 'May 2021',
    },
    category: 'Equipment',
    type: 'Lighting',
  },
  {
    id: 'handpiece-set-premium',
    name: 'Dental Handpiece Set',
    description: 'Premium high-speed and low-speed handpiece set with LED illumination.',
    price: 2499.99,
    condition: 'New',
    warranty: {
      duration: '2 Years',
      coverage: 'Parts and maintenance',
    },
    specifications: {
      'Speed Range': '100,000-400,000 rpm',
      'Illumination': 'LED with daylight',
      'Spray Ports': 'Triple spray',
      'Chuck Type': 'Push button',
      'Noise Level': '<65 dB',
      'Set Contents': '2 high-speed, 2 low-speed',
    },
    images: [
      '/images/marketplace/dental-drill.jpg',
      '/images/handpiece-2.jpg',
      '/images/handpiece-3.jpg',
      '/images/handpiece-4.jpg',
    ],
    vendor: {
      id: 'professional-dental-supply',
      name: 'Professional Dental Supply',
      rating: 4.8,
      phone: '+1 (555) 678-9012',
      email: 'sales@prodental.com',
      location: 'Phoenix, AZ',
      joinedDate: 'March 2021',
    },
    category: 'Equipment',
    type: 'Handpieces',
  },
  {
    id: 'education-model-complete',
    name: 'Dental Education Model Set',
    description: 'Comprehensive dental models for patient education and treatment planning.',
    price: 799.99,
    condition: 'New',
    warranty: {
      duration: '1 Year',
      coverage: 'Manufacturing defects',
    },
    specifications: {
      'Models Included': '12 different conditions',
      'Material': 'Medical-grade resin',
      'Scale': '1:1 life-size',
      'Features': 'Removable parts',
      'Display': 'Included stand',
      'Educational Guide': 'Included',
    },
    images: [
      '/images/marketplace/dental-prosthesis.jpg',
      '/images/education-model-2.jpg',
      '/images/education-model-3.jpg',
      '/images/education-model-4.jpg',
    ],
    vendor: {
      id: 'dental-education-plus',
      name: 'Dental Education Plus',
      rating: 4.6,
      phone: '+1 (555) 789-0123',
      email: 'info@dentaledu.com',
      location: 'Portland, OR',
      joinedDate: 'January 2022',
    },
    category: 'Education',
    type: 'Models',
  },
  {
    id: 'dental-curing-light-pro',
    name: 'Dental Curing Light Pro',
    description: 'High-power LED curing light with multiple modes and wireless charging.',
    price: 899.99,
    condition: 'New',
    warranty: {
      duration: '2 Years',
      coverage: 'Full warranty',
    },
    specifications: {
      'Light Intensity': '2000-3500 mW/cm²',
      'Wavelength': '385-515nm',
      'Modes': '5 programming modes',
      'Battery': 'Li-ion rechargeable',
      'Charging': 'Wireless charging base',
      'Display': 'OLED screen',
    },
    images: [
      '/images/curing-light-1.jpg',
      '/images/curing-light-2.jpg',
      '/images/curing-light-3.jpg',
      '/images/curing-light-4.jpg',
    ],
    vendor: {
      id: 'dental-equipment-pro',
      name: 'Dental Equipment Pro',
      rating: 4.9,
      phone: '+1 (555) 890-1234',
      email: 'sales@dentalequip.com',
      location: 'Houston, TX',
      joinedDate: 'April 2021',
    },
    category: 'Equipment',
    type: 'Curing Light',
  },
  {
    id: 'dental-air-compressor',
    name: 'Dental Air Compressor',
    description: 'Oil-free dental air compressor with noise reduction technology and dual head system.',
    price: 3299.99,
    condition: 'New',
    warranty: {
      duration: '3 Years',
      coverage: 'Parts and labor',
    },
    specifications: {
      'Power': '2.0 HP',
      'Noise Level': '45dB',
      'Tank Capacity': '30 Gallons',
      'Air Flow': '7.0 CFM @ 90 PSI',
      'Technology': 'Oil-free',
      'Features': 'Auto drain, Low noise',
    },
    images: [
      '/images/compressor-1.jpg',
      '/images/compressor-2.jpg',
      '/images/compressor-3.jpg',
      '/images/compressor-4.jpg',
    ],
    vendor: {
      id: 'dental-air-systems',
      name: 'Dental Air Systems',
      rating: 4.8,
      phone: '+1 (555) 901-2345',
      email: 'sales@dentalair.com',
      location: 'Nashville, TN',
      joinedDate: 'May 2021',
    },
    category: 'Equipment',
    type: 'Compressor',
  },
  {
    id: 'digital-shade-matching-system',
    name: 'Digital Shade Matching System',
    description: 'Advanced digital shade matching device for precise color matching in restorative dentistry.',
    price: 2799.99,
    condition: 'New',
    warranty: {
      duration: '2 Years',
      coverage: 'Factory warranty',
    },
    specifications: {
      'Technology': 'Spectrophotometer',
      'Accuracy': '96%',
      'Display': '4.3" LCD',
      'Battery': 'Li-ion rechargeable',
      'Memory': '1000 measurements',
      'Connectivity': 'Bluetooth, USB',
    },
    images: [
      '/images/shade-matching-1.jpg',
      '/images/shade-matching-2.jpg',
      '/images/shade-matching-3.jpg',
      '/images/shade-matching-4.jpg',
    ],
    vendor: {
      id: 'digital-dental-tech',
      name: 'Digital Dental Tech',
      rating: 4.7,
      phone: '+1 (555) 012-3456',
      email: 'info@digitaldentaltech.com',
      location: 'San Diego, CA',
      joinedDate: 'June 2021',
    },
    category: 'Equipment',
    type: 'Color Matching',
  }
];

export default function ProductGrid() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [imageError, setImageError] = useState<{ [key: string]: boolean }>({});
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const handleImageError = (id: string) => {
    setImageError(prev => ({...prev, [id]: true}));
  };

  // Calculate pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {currentProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            onClick={() => setSelectedProduct(product)}
          >
            <div className="relative h-48">
              <Image
                src={imageError[product.id] ? '/images/placeholder.jpg' : product.images[0]}
                alt={product.name}
                fill
                className="object-cover"
                onError={() => handleImageError(product.id)}
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                {product.name}
              </h3>
              <div className="flex items-center justify-between mb-2">
                <span className="text-primary font-medium">${product.price.toLocaleString()}</span>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  <span className="ml-1 text-sm text-gray-600 dark:text-gray-400">
                    {product.vendor.rating.toFixed(1)}
                  </span>
                </div>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <p>Condition: {product.condition}</p>
                <p className="truncate">Vendor: {product.vendor.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-8 gap-2">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 disabled:opacity-50"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <span className="text-gray-600 dark:text-gray-400">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 disabled:opacity-50"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
          product={selectedProduct}
        />
      )}
    </div>
  );
}
