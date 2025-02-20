'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  ShieldCheck, 
  Globe2, 
  Banknote,
  Clock,
  Users,
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: 'Market Evolution',
    description: 'Digital transformation is revolutionizing how dental equipment is traded globally.'
  },
  {
    icon: ShieldCheck,
    title: 'Enhanced Security',
    description: 'Advanced verification systems ensure equipment authenticity and quality.'
  },
  {
    icon: Globe2,
    title: 'Global Reach',
    description: 'Connect with dental professionals and suppliers worldwide.'
  },
  {
    icon: Banknote,
    title: 'Cost Efficiency',
    description: 'Competitive pricing and reduced transaction costs through our platform.'
  }
];

const features = [
  {
    icon: Clock,
    title: 'Time-Saving Platform',
    description: 'Our streamlined process reduces equipment sourcing time by 60%',
    stat: '60%',
    label: 'Faster Process'
  },
  {
    icon: Users,
    title: 'Growing Network',
    description: 'Join thousands of dental professionals already using our platform',
    stat: '10K+',
    label: 'Active Users'
  },
  {
    icon: CheckCircle2,
    title: 'Verified Equipment',
    description: 'Every piece of equipment undergoes thorough quality verification',
    stat: '100%',
    label: 'Verified Items'
  }
];

export default function AboutWhy() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container px-4 md:px-6">
        {/* Main Content */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-4"
          >
            Why Choose SmileToTheWorld Pro?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-400"
          >
            We're transforming the dental equipment market through technology, 
            trust, and innovation.
          </motion.p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex items-center text-primary">
                    <span className="text-2xl font-bold mr-2">{feature.stat}</span>
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {feature.description}
                </p>
                <div className="text-sm text-primary font-medium">
                  {feature.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
