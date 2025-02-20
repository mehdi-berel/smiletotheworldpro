'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Globe, Shield } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Trust & Transparency',
    description: 'Building lasting relationships through honest, transparent dealings in every transaction.'
  },
  {
    icon: Globe,
    title: 'Global Access',
    description: 'Breaking down geographical barriers to connect dental professionals worldwide.'
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'Rigorous quality control ensuring only the best dental equipment reaches our customers.'
  }
];

export default function AboutHero() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background dark:from-gray-900 dark:to-gray-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-gray-100/10 [mask-image:radial-gradient(white,transparent_70%)]" />
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-8"
          >
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-4"
              >
                Revolutionizing Dental Equipment Trading
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-xl text-gray-600 dark:text-gray-400"
              >
                We're on a mission to create a more efficient, transparent, and accessible 
                global marketplace for dental professionals.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white shadow-lg hover:bg-primary/90 transition-all duration-200"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#learn-more"
                className="inline-flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 px-6 py-3 text-sm font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
              >
                Learn More
              </a>
            </motion.div>
          </motion.div>

          {/* Values Grid */}
          <div className="grid gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                  className="flex gap-6 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200"
                >
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
