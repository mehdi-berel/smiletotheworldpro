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
        setError(null);
        // TODO: Replace with actual API call
        const mockOrder: Order = {
          id: orderId,
          status: 'processing',
          date: new Date().toISOString(),
          total: 2999.99,
          items: [
            {
              name: 'Dental Chair Pro X3000',
              quantity: 1,
              price: 2999.99,
              image: '/placeholder.jpg'
            }
          ],
          shipping: {
            address: '123 Main St, City, Country',
            tracking: 'DHL-123456789',
            estimatedDelivery: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString()
          }
        };
        setOrder(mockOrder);
      } catch (err) {
        console.error('Error fetching order:', err);
        setError('Failed to load order details. Please try again later.');
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
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-red-600 dark:text-red-400">{error}</p>
        </div>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-400">Order not found</p>
        </div>
      </div>
    );
  }

  const statusStyle = statusStyles[order.status];

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto space-y-8"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Order #{order.id}
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Placed on {new Date(order.date).toLocaleDateString()}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className={`px-3 py-1 text-sm font-medium rounded-full ${statusStyle.bg} ${statusStyle.text}`}>
              {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
            </span>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Package className="w-5 h-5 text-primary" />
                Order Items
              </h2>
              {order.items.map((item, index) => (
                <div key={index} className="flex items-start gap-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 dark:text-white">{item.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Quantity: {item.quantity} × ${item.price.toLocaleString()}
                    </p>
                  </div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    ${(item.quantity * item.price).toLocaleString()}
                  </p>
                </div>
              ))}
              <div className="mt-4 flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                <span className="font-medium text-gray-900 dark:text-white">Total</span>
                <span className="text-xl font-bold text-primary">
                  ${order.total.toLocaleString()}
                </span>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Truck className="w-5 h-5 text-primary" />
                Shipping Details
              </h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Delivery Address</p>
                  <p className="font-medium text-gray-900 dark:text-white">{order.shipping.address}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Tracking Number</p>
                  <p className="font-medium text-gray-900 dark:text-white">{order.shipping.tracking}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Estimated Delivery</p>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {new Date(order.shipping.estimatedDelivery).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <button
            onClick={() => window.history.back()}
            className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            ← Back to Orders
          </button>
          <button
            className="px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-lg transition-colors"
          >
            Download Invoice
          </button>
        </div>
      </motion.div>
    </div>
  );
}
