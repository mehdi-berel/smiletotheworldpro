'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, Star, Shield, Package, Info, User, Phone, Mail, Send, ShoppingCart } from 'lucide-react';

interface ProductModalProps {
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
  };
}

export default function ProductModal({ isOpen, onClose, product }: ProductModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white dark:bg-gray-900 p-6 shadow-xl transition-all">
                <div className="relative">
                  <button
                    onClick={onClose}
                    className="absolute right-0 top-0 p-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                  >
                    <X className="h-6 w-6" />
                  </button>

                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {/* Image Gallery */}
                    <div className="space-y-4">
                      <div className="relative aspect-square overflow-hidden rounded-lg">
                        <Image
                          src={product.images[0]}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="grid grid-cols-4 gap-2">
                        {product.images.slice(1).map((image, index) => (
                          <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
                            <Image
                              src={image}
                              alt={`${product.name} ${index + 2}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Product Details */}
                    <div className="space-y-6">
                      <div>
                        <Dialog.Title className="text-2xl font-bold text-gray-900 dark:text-white">
                          {product.name}
                        </Dialog.Title>
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
                      <div className="space-y-4">
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
                      <div>
                        <h3 className="font-medium flex items-center gap-2 mb-2">
                          <Info className="h-5 w-5 text-primary" />
                          Specifications
                        </h3>
                        <dl className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                          {Object.entries(product.specifications).map(([key, value]) => (
                            <div key={key} className="text-sm">
                              <dt className="font-medium text-gray-500 dark:text-gray-400">{key}</dt>
                              <dd className="text-gray-900 dark:text-gray-100">{value}</dd>
                            </div>
                          ))}
                        </dl>
                      </div>

                      {/* Vendor Information */}
                      <div className="border-t pt-6">
                        <h3 className="font-medium flex items-center gap-2 mb-4">
                          <User className="h-5 w-5 text-primary" />
                          Vendor Information
                        </h3>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{product.vendor.name}</span>
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                              <span className="text-sm">{product.vendor.rating.toFixed(1)}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <Phone className="h-4 w-4" />
                            {product.vendor.phone}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <Mail className="h-4 w-4" />
                            {product.vendor.email}
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Location: {product.vendor.location}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Joined: {product.vendor.joinedDate}
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4 mt-6">
                        <Link
                          href={`/vendor/${product.vendor.id}`}
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-primary border-2 border-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
                          onClick={() => onClose()}
                        >
                          <Send className="h-5 w-5" />
                          Contact Vendor
                        </Link>
                        <Link
                          href={`/order/${product.id}`}
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
                          onClick={() => onClose()}
                        >
                          <ShoppingCart className="h-5 w-5" />
                          Buy Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
