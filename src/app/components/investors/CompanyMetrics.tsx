'use client';

import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Users, 
  Globe, 
  TrendingUp,
  Building2,
  DollarSign
} from 'lucide-react';

const metrics = [
  {
    label: 'Annual Revenue',
    value: '$85M',
    growth: '+45%',
    icon: DollarSign,
    description: 'Year-over-year revenue growth'
  },
  {
    label: 'Active Users',
    value: '2.5M+',
    growth: '+68%',
    icon: Users,
    description: 'Dental professionals and patients'
  },
  {
    label: 'Market Presence',
    value: '45+',
    growth: '+12',
    icon: Globe,
    description: 'Countries with active users'
  },
  {
    label: 'Partner Network',
    value: '500+',
    growth: '+125',
    icon: Building2,
    description: 'Dental clinics and suppliers'
  },
  {
    label: 'Transaction Volume',
    value: '$250M',
    growth: '+85%',
    icon: BarChart3,
    description: 'Annual platform transactions'
  },
  {
    label: 'Market Growth',
    value: '48%',
    growth: '+15%',
    icon: TrendingUp,
    description: 'Year-over-year market share growth'
  }
];

export default function CompanyMetrics() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Company Performance
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Track record of consistent growth and market leadership in the dental technology sector.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {metric.label}
                    </h3>
                    <div className="flex items-baseline space-x-2 mb-2">
                      <span className="text-2xl font-bold text-primary">
                        {metric.value}
                      </span>
                      <span className="text-sm font-medium text-green-500">
                        {metric.growth}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {metric.description}
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
