'use client';

import { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, Search, Filter, ArrowUpDown, Loader2 } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '@/app/components/auth/AuthContext';
import { supabase } from '@/lib/supabase';
import ListingFormModal from './ListingFormModal';

interface Listing {
  id: string;
  title: string;
  description: string;
  price: number;
  status: 'active' | 'pending' | 'sold' | 'draft';
  views: number;
  image_url: string;
  created_at: string;
  updated_at: string;
}

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
  const { user } = useAuth();
  const [listings, setListings] = useState<Listing[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortBy, setSortBy] = useState('date');
  const [isDeleting, setIsDeleting] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingListing, setEditingListing] = useState<Listing | undefined>(undefined);

  useEffect(() => {
    if (user) {
      fetchListings();
    }
  }, [user]);

  const fetchListings = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const { data, error } = await supabase
        .from('listings')
        .select('*')
        .eq('user_id', user?.id)
        .order('created_at', { ascending: false });

      if (error) throw error;

      setListings(data || []);
    } catch (err: any) {
      console.error('Error fetching listings:', err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (listing: Listing) => {
    setEditingListing(listing);
    setIsModalOpen(true);
  };

  const handleDelete = async (listingId: string) => {
    if (!confirm('Are you sure you want to delete this listing?')) return;

    try {
      setIsDeleting(listingId);
      const { error } = await supabase
        .from('listings')
        .delete()
        .eq('id', listingId);

      if (error) throw error;

      setListings(prev => prev.filter(listing => listing.id !== listingId));
    } catch (err: any) {
      console.error('Error deleting listing:', err);
      setError(err.message);
    } finally {
      setIsDeleting(null);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setEditingListing(undefined);
  };

  const filteredListings = listings
    .filter(listing => {
      const matchesSearch = listing.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = statusFilter === 'all' || listing.status === statusFilter;
      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      if (sortBy === 'price') return b.price - a.price;
      if (sortBy === 'views') return b.views - a.views;
      return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
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
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-lg transition-colors shadow-sm shadow-primary/20"
        >
          <Plus className="w-4 h-4" />
          New Listing
        </motion.button>
      </div>

      {error && (
        <div className="p-4 text-red-500 bg-red-50 dark:bg-red-900/20 rounded-lg">
          {error}
        </div>
      )}

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
            <option value="sold">Sold</option>
            <option value="draft">Draft</option>
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

      {/* Listings */}
      <AnimatePresence>
        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : filteredListings.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-gray-500 dark:text-gray-400">
              {searchTerm || statusFilter !== 'all' ? (
                <>
                  <p className="text-lg font-medium">No listings found</p>
                  <p className="text-sm">Try adjusting your filters</p>
                </>
              ) : (
                <>
                  <p className="text-lg font-medium">No listings yet</p>
                  <p className="text-sm">Create your first listing to get started</p>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="mt-4 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-lg transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                    New Listing
                  </button>
                </>
              )}
            </div>
          </motion.div>
        ) : (
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
                    src={listing.image_url || '/placeholder.jpg'}
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
                        : listing.status === 'pending'
                        ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-700/20 dark:text-yellow-400'
                        : listing.status === 'sold'
                        ? 'bg-blue-100 text-blue-700 dark:bg-blue-700/20 dark:text-blue-400'
                        : 'bg-gray-100 text-gray-700 dark:bg-gray-700/20 dark:text-gray-400'
                    }`}>
                      {listing.status.charAt(0).toUpperCase() + listing.status.slice(1)}
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{listing.views} views</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Listed on {new Date(listing.created_at).toLocaleDateString()}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleEdit(listing)}
                      className="inline-flex items-center gap-1 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/10 rounded-lg transition-colors"
                    >
                      <Edit2 className="w-4 h-4" />
                      Edit
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleDelete(listing.id)}
                      disabled={isDeleting === listing.id}
                      className="inline-flex items-center gap-1 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20 rounded-lg transition-colors disabled:opacity-50"
                    >
                      {isDeleting === listing.id ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <Trash2 className="w-4 h-4" />
                      )}
                      Delete
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Form Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <ListingFormModal
            isOpen={isModalOpen}
            onClose={handleModalClose}
            listing={editingListing}
            onSuccess={fetchListings}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
