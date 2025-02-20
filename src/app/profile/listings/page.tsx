'use client';

import { useState } from 'react';
import { Plus, Edit2, Trash2, Search, Filter, ArrowUpDown } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const listings = [
  {
    id: 1,
    title: 'Dental Chair Pro X3000',
    price: 2999.99,
    status: 'active',
    views: 245,
    date: '2024-02-15',
    image: '/placeholder.jpg',
  },
  {
    id: 2,
    title: 'Sterilization Unit V2',
    price: 1499.99,
    status: 'pending',
    views: 123,
    date: '2024-02-10',
    image: '/placeholder.jpg',
  },
  {
    id: 3,
    title: 'Digital X-Ray System',
    price: 5999.99,
    status: 'active',
    views: 189,
    date: '2024-02-08',
    image: '/placeholder.jpg',
  },
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

export default function ListingsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortBy, setSortBy] = useState('date');

  const filteredListings = listings
    .filter(listing => {
      const matchesSearch = listing.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = statusFilter === 'all' || listing.status === statusFilter;
      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      if (sortBy === 'price') return b.price - a.price;
      if (sortBy === 'views') return b.views - a.views;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  return (
    <motion.div
      className="space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">My Listings</h1>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-lg transition-colors shadow-sm shadow-primary/20"
        >
          <Plus className="w-4 h-4" />
          New Listing
        </motion.button>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search listings..."
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
            <option value="active">Active</option>
            <option value="pending">Pending</option>
          </select>
        </div>
        <div className="relative">
          <ArrowUpDown className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 appearance-none"
          >
            <option value="date">Sort by Date</option>
            <option value="price">Sort by Price</option>
            <option value="views">Sort by Views</option>
          </select>
        </div>
      </div>

      <motion.div 
        className="grid grid-cols-1 gap-4"
        variants={containerVariants}
      >
        {filteredListings.map((listing) => (
          <motion.div
            key={listing.id}
            variants={itemVariants}
            className="flex flex-col md:flex-row gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
          >
            <div className="w-full md:w-48 h-48 relative rounded-lg overflow-hidden">
              <Image
                src={listing.image}
                alt={listing.title}
                fill
                className="object-cover transition-transform hover:scale-105"
              />
            </div>

            <div className="flex-1 space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">{listing.title}</h3>
                <p className="text-2xl font-bold text-primary">${listing.price.toLocaleString()}</p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                  listing.status === 'active'
                    ? 'bg-green-100 text-green-700 dark:bg-green-700/20 dark:text-green-400'
                    : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-700/20 dark:text-yellow-400'
                }`}>
                  {listing.status.charAt(0).toUpperCase() + listing.status.slice(1)}
                </span>
                <span className="text-sm text-gray-600 dark:text-gray-400">{listing.views} views</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Listed on {new Date(listing.date).toLocaleDateString()}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-1 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/10 rounded-lg transition-colors"
                >
                  <Edit2 className="w-4 h-4" />
                  Edit
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-1 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                  Delete
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
