'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Modal } from '../ui/Modal';
import { Star, Shield, Package, Info, User, Phone, Mail, MapPin, Calendar, X, Send, ShoppingCart } from 'lucide-react';

interface ProductDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
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
      name: string;
      rating: number;
      phone: string;
      email: string;
      location: string;
      joinedDate: string;
    };
    category: string;
    type: string;
  };
}

export default function ProductDetails({ isOpen, onClose, product }: ProductDetailsProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  const handleContactVendor = () => {
    // Open email client with vendor's email
    window.location.href = `mailto:${product.vendor.email}?subject=Inquiry about ${product.name}&body=Hello ${product.vendor.name},%0D%0A%0D%0AI am interested in the ${product.name} listed on your marketplace.%0D%0A%0D%0APlease provide more information about this product.%0D%0A%0D%0AThank you.`;
  };

  const handleBuyNow = () => {
    // Implement buy functionality
    alert('Buy functionality will be implemented with payment gateway integration.');
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-2 -right-2 p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors z-10"
          aria-label="Close dialog"
        >
          <X className="h-5 w-5 text-gray-500 dark:text-gray-400" />
        </button>

        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800">
            <Image
              src={product.images[selectedImage]}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative aspect-square overflow-hidden rounded-lg ${
                  selectedImage === index
                    ? 'ring-2 ring-primary'
                    : 'ring-1 ring-gray-200 dark:ring-gray-700'
                }`}
              >
                <Image
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              onClick={handleContactVendor}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 text-primary border-2 border-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
            >
              <Send className="h-5 w-5" />
              Contact Vendor
            </button>
            <button
              onClick={handleBuyNow}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
            >
              <ShoppingCart className="h-5 w-5" />
              Buy Now
            </button>
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {product.name}
            </h2>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              {product.category} • {product.type}
            </p>
          </div>

          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              ${product.price.toLocaleString()}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">USD</span>
          </div>

          {/* Condition & Warranty */}
          <div className="space-y-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
            <div className="flex items-center gap-2">
              <Package className="h-5 w-5 text-primary" />
              <span className="font-medium">Condition:</span>
              <span className="text-gray-700 dark:text-gray-300">{product.condition}</span>
            </div>
            <div className="flex items-start gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <div>
                <span className="font-medium">Warranty:</span>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {product.warranty.duration} - {product.warranty.coverage}
                </p>
              </div>
            </div>
          </div>

          {/* Specifications */}
          <div className="space-y-3">
            <h3 className="font-medium flex items-center gap-2">
              <Info className="h-5 w-5 text-primary" />
              Specifications
            </h3>
            <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key}>
                  <dt className="font-medium text-gray-500 dark:text-gray-400">{key}</dt>
                  <dd className="text-gray-900 dark:text-gray-100">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Vendor Information */}
          <div className="border-t pt-6 space-y-4">
            <h3 className="font-medium flex items-center gap-2">
              <User className="h-5 w-5 text-primary" />
              Vendor Information
            </h3>
            <div className="space-y-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-900 dark:text-white">
                  {product.vendor.name}
                </span>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-sm font-medium">{product.vendor.rating.toFixed(1)}</span>
                </div>
              </div>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  {product.vendor.phone}
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  {product.vendor.email}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {product.vendor.location}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Member since {product.vendor.joinedDate}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
