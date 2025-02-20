'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Package, Truck } from 'lucide-react';
import { Order, OrderStatus } from './types';

interface OrderDetailsProps {
  orderId: string;
}

const statusStyles: Record<OrderStatus, { bg: string; text: string }> = {
  processing: {
    bg: 'bg-yellow-100 dark:bg-yellow-800/20',
    text: 'text-yellow-800 dark:text-yellow-400'
  },
  shipped: {
    bg: 'bg-blue-100 dark:bg-blue-800/20',
    text: 'text-blue-800 dark:text-blue-400'
  },
  delivered: {
    bg: 'bg-green-100 dark:bg-green-800/20',
    text: 'text-green-800 dark:text-green-400'
  }
};

export default function OrderDetails({ orderId }: OrderDetailsProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [order, setOrder] = useState<Order | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchOrder() {
      try {
        setIsLoading(true);
        // TODO: Replace with actual API call
        const mockOrder: Order = {
          id: orderId,
          status: 'processing',
          date: new Date().toISOString(),
          total: 299.99,
          items: [
            {
              name: 'Dental Cleaning Kit',
              quantity: 1,
              price: 299.99,
              image: '/images/product1.jpg'
            }
          ],
          shipping: {
            address: '123 Main St, City, Country',
            tracking: 'TRK123456789',
            estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()
          }
        };
        
        setOrder(mockOrder);
        setError(null);
      } catch (err) {
        setError('Failed to fetch order details. Please try again later.');
        console.error('Error fetching order:', err);
      } finally {
        setIsLoading(false);
      }
    }

    if (orderId) {
      fetchOrder();
    }
  }, [orderId]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500 text-center">
          <h2 className="text-xl font-semibold mb-2">Error</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-500 text-center">
          <h2 className="text-xl font-semibold mb-2">Order Not Found</h2>
          <p>The requested order could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Order #{order.id}
          </h2>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Placed on {new Date(order.date).toLocaleDateString()}
          </p>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-5 sm:p-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Order Status
              </h3>
              <div className="mt-2">
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    statusStyles[order.status].bg
                  } ${statusStyles[order.status].text}`}
                >
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Items
              </h3>
              <div className="mt-2 space-y-4">
                {order.items.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                  >
                    <div className="flex-shrink-0 h-16 w-16">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover rounded"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                        {item.name}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Quantity: {item.quantity}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Shipping Information
              </h3>
              <div className="mt-2 space-y-4">
                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                  <Package className="h-5 w-5" />
                  <span>{order.shipping.address}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                  <Truck className="h-5 w-5" />
                  <span>Tracking: {order.shipping.tracking}</span>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Estimated Delivery:{' '}
                  {new Date(order.shipping.estimatedDelivery).toLocaleDateString()}
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
              <div className="flex justify-between text-base font-medium text-gray-900 dark:text-white">
                <p>Total</p>
                <p>${order.total.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
