'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function PartnerHero() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-20">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at 1px 1px, #4B5563 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto"
        >
          <div className="inline-block p-2 bg-primary/10 rounded-2xl mb-4">
            <span className="text-primary font-medium px-4 py-2">
              Partner Program
            </span>
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white"
          >
            Partner With Excellence
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl"
          >
            Join our network of industry leaders and innovators in dental technology.
            Together, we're shaping the future of dental care.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mt-4"
          >
            <a
              href="#apply"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-primary hover:bg-primary/90 rounded-lg transition-colors"
            >
              Become a Partner
            </a>
            <a
              href="#benefits"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              Learn More
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-12 w-full max-w-3xl"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Active Partners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Partner Satisfaction</div>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Countries Served</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
