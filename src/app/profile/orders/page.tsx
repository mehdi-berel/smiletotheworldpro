'use client';

import { useState } from 'react';
import { Package, Eye, Download, Search, Filter, Calendar } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const orders = [
  {
    id: 'ORD-2024-001',
    date: '2024-02-15',
    total: 2999.99,
    status: 'delivered',
    items: [
      {
        name: 'Dental Chair Pro X3000',
        quantity: 1,
        price: 2999.99,
        image: '/placeholder.jpg'
      },
    ],
    tracking: 'DHL-123456789',
    estimatedDelivery: '2024-02-20'
  },
  {
    id: 'ORD-2024-002',
    date: '2024-02-10',
    total: 1499.99,
    status: 'processing',
    items: [
      {
        name: 'Sterilization Unit V2',
        quantity: 1,
        price: 1499.99,
        image: '/placeholder.jpg'
      },
    ],
    tracking: 'DHL-987654321',
    estimatedDelivery: '2024-02-25'
  },
  {
    id: 'ORD-2024-003',
    date: '2024-02-08',
    total: 799.99,
    status: 'shipped',
    items: [
      {
        name: 'Dental Instruments Set',
        quantity: 2,
        price: 399.99,
        image: '/placeholder.jpg'
      },
    ],
    tracking: 'DHL-456789123',
    estimatedDelivery: '2024-02-18'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'delivered':
      return 'bg-green-100 text-green-700 dark:bg-green-700/20 dark:text-green-400';
    case 'processing':
      return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-700/20 dark:text-yellow-400';
    case 'shipped':
      return 'bg-blue-100 text-blue-700 dark:bg-blue-700/20 dark:text-blue-400';
    case 'cancelled':
      return 'bg-red-100 text-red-700 dark:bg-red-700/20 dark:text-red-400';
    default:
      return 'bg-gray-100 text-gray-700 dark:bg-gray-700/20 dark:text-gray-400';
  }
};

export default function OrdersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [dateSort, setDateSort] = useState('desc');

  const filteredOrders = orders
    .filter(order => {
      const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.items.some(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateSort === 'desc' ? dateB - dateA : dateA - dateB;
    });

  return (
    <motion.div
      className="space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">My Orders</h1>
        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setDateSort(dateSort === 'desc' ? 'asc' : 'desc')}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors"
          >
            <Calendar className="w-4 h-4" />
            {dateSort === 'desc' ? 'Newest First' : 'Oldest First'}
          </motion.button>
        </div>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search orders..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800"
          />
        </div>
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 appearance-none"
          >
            <option value="all">All Status</option>
            <option value="processing">Processing</option>
            <option value="shipped">Shipped</option>
            <option value="delivered">Delivered</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
      </div>

      <motion.div 
        className="space-y-4"
        variants={containerVariants}
      >
        {filteredOrders.map((order) => (
          <motion.div
            key={order.id}
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
          >
            <div className="p-6 space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <Package className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                      Order {order.id}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Placed on {new Date(order.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(order.status)}`}>
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </span>
                  <span className="text-lg font-bold text-gray-900 dark:text-white">
                    ${order.total.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                {order.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row md:items-center justify-between py-2"
                  >
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{item.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Quantity: {item.quantity} × ${item.price.toLocaleString()}
                      </p>
                    </div>
                    {order.status !== 'delivered' && (
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                        Estimated delivery: {new Date(order.estimatedDelivery).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/10 rounded-lg transition-colors"
                >
                  <Eye className="w-4 h-4" />
                  View Details
                </motion.button>
                {order.status === 'delivered' && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/10 rounded-lg transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Download Invoice
                  </motion.button>
                )}
                {order.tracking && order.status !== 'delivered' && (
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Tracking: {order.tracking}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
