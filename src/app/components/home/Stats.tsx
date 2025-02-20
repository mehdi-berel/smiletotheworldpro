'use client';

import { motion } from 'framer-motion';
import { Users, Clock, Stethoscope, Award } from 'lucide-react';

const stats = [
  {
    name: 'Years of Experience',
    value: '15+',
    icon: Clock,
    description: 'Providing excellence in dental care'
  },
  {
    name: 'Satisfied Clients',
    value: '1000+',
    icon: Users,
    description: 'Happy smiles and counting'
  },
  {
    name: 'Dental Procedures',
    value: '5000+',
    icon: Stethoscope,
    description: 'Successful treatments delivered'
  },
  {
    name: 'Expert Dentists',
    value: '50+',
    icon: Award,
    description: 'Skilled professionals at your service'
  }
];

export default function Stats() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-gray-100/50 dark:bg-grid-gray-900/50 bg-grid-pattern" />
      
      <div className="relative container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
          >
            Trusted by Dentists Worldwide
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300"
          >
            Our track record speaks for itself
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute -inset-px bg-gradient-to-r from-primary/50 via-primary/30 to-primary/50 rounded-lg blur-sm group-hover:blur opacity-75 transition duration-500 group-hover:opacity-100" />
                <div className="relative flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                  <div className="p-3 bg-primary/10 rounded-full mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <dt className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      {stat.name}
                    </dt>
                    <dd className="text-3xl font-bold tracking-tight text-primary">
                      {stat.value}
                    </dd>
                    <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
