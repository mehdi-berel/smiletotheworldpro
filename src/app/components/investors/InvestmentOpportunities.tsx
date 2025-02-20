'use client';

import { motion } from 'framer-motion';
import { 
  Globe, 
  TrendingUp, 
  Users, 
  Shield,
  Database,
  Smartphone
} from 'lucide-react';

const opportunities = [
  {
    title: 'Global Expansion',
    description: 'Investment in expanding our platform to new international markets and regions.',
    icon: Globe,
    metrics: {
      target: '$50M',
      timeline: '24 months',
      roi: '35%'
    }
  },
  {
    title: 'Technology Development',
    description: 'Funding for AI-driven dental diagnostics and treatment planning tools.',
    icon: Database,
    metrics: {
      target: '$30M',
      timeline: '18 months',
      roi: '45%'
    }
  },
  {
    title: 'Market Penetration',
    description: 'Strategic investment in marketing and user acquisition across key demographics.',
    icon: TrendingUp,
    metrics: {
      target: '$20M',
      timeline: '12 months',
      roi: '28%'
    }
  },
  {
    title: 'Platform Enhancement',
    description: 'Development of advanced features and improved user experience.',
    icon: Smartphone,
    metrics: {
      target: '$15M',
      timeline: '15 months',
      roi: '32%'
    }
  },
  {
    title: 'User Base Growth',
    description: 'Expansion of our dental professional and patient network.',
    icon: Users,
    metrics: {
      target: '$25M',
      timeline: '18 months',
      roi: '38%'
    }
  },
  {
    title: 'Security Infrastructure',
    description: 'Investment in advanced security and compliance measures.',
    icon: Shield,
    metrics: {
      target: '$10M',
      timeline: '12 months',
      roi: '25%'
    }
  }
];

export default function InvestmentOpportunities() {
  return (
    <section id="opportunities" className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Investment Opportunities
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our strategic investment opportunities designed to drive growth and innovation in dental care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {opportunities.map((opportunity, index) => {
            const Icon = opportunity.icon;
            return (
              <motion.div
                key={opportunity.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 hover:shadow-lg transition-all"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {opportunity.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {opportunity.description}
                    </p>
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                      <div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Target</div>
                        <div className="font-semibold text-primary">{opportunity.metrics.target}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Timeline</div>
                        <div className="font-semibold text-gray-900 dark:text-white">{opportunity.metrics.timeline}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Proj. ROI</div>
                        <div className="font-semibold text-green-500">{opportunity.metrics.roi}</div>
                      </div>
                    </div>
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
