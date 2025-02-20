'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Clock, 
  Shield, 
  Users, 
  Cog, 
  LineChart 
} from 'lucide-react';

interface Feature {
  name: string;
  description: string;
  icon: any;
}

const features: Feature[] = [
  {
    name: 'Advanced Technology',
    description: 'Cutting-edge dental technology and digital solutions for optimal patient care.',
    icon: Sparkles,
  },
  {
    name: 'Efficient Workflow',
    description: 'Streamlined processes that save time and improve practice productivity.',
    icon: Clock,
  },
  {
    name: 'Secure Platform',
    description: 'Enterprise-grade security to protect sensitive patient information.',
    icon: Shield,
  },
  {
    name: 'Patient Management',
    description: 'Comprehensive tools for managing patient records and appointments.',
    icon: Users,
  },
  {
    name: 'Customizable Solutions',
    description: 'Flexible features that adapt to your specific practice needs.',
    icon: Cog,
  },
  {
    name: 'Analytics & Insights',
    description: 'Data-driven insights to help grow your dental practice.',
    icon: LineChart,
  },
];

const Features = () => {
  return (
    <section className="relative py-24 bg-gray-50/50 dark:bg-gray-900/50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-gray-100/50 dark:bg-grid-gray-900/50 bg-grid-pattern opacity-50" />
      
      <div className="relative container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 bg-primary/10 rounded-lg text-sm font-semibold text-primary mb-4"
          >
            Why Choose Us
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
          >
            Everything you need to run your dental practice
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300"
          >
            Comprehensive solutions designed to streamline your workflow and enhance patient care
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute -inset-px bg-gradient-to-r from-primary/50 via-primary/30 to-primary/50 rounded-lg blur-sm group-hover:blur opacity-75 transition duration-500 group-hover:opacity-100" />
                <div className="relative flex flex-col h-full p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                  <div className="p-3 mb-4 bg-primary/10 rounded-lg w-fit group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 flex-grow">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
