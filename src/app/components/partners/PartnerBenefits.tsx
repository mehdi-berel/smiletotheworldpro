'use client';

import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  Award, 
  Wrench, 
  BookOpen, 
  HeartHandshake 
} from 'lucide-react';

const benefits = [
  {
    title: 'Growth Opportunities',
    description: 'Access to a wider customer base and increased market visibility',
    icon: TrendingUp,
  },
  {
    title: 'Network Access',
    description: 'Connect with industry leaders and dental professionals',
    icon: Users,
  },
  {
    title: 'Quality Recognition',
    description: 'Association with our trusted and recognized brand',
    icon: Award,
  },
  {
    title: 'Technical Support',
    description: '24/7 technical assistance and professional guidance',
    icon: Wrench,
  },
  {
    title: 'Training Resources',
    description: 'Access to exclusive training materials and workshops',
    icon: BookOpen,
  },
  {
    title: 'Dedicated Support',
    description: 'Personal account manager for seamless collaboration',
    icon: HeartHandshake,
  },
];

export default function PartnerBenefits() {
  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Partnership Benefits
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Join our network and unlock exclusive benefits designed to help your business thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 hover:shadow-md transition-all"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {benefit.description}
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
