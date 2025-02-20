'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const benefits = [
  'Free 30-day trial period',
  'No credit card required',
  'Full access to all features',
  '24/7 technical support'
];

export default function CallToAction() {
  return (
    <section className="relative py-24 bg-gray-50/50 dark:bg-gray-900/50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-gray-100/50 dark:bg-grid-gray-900/50 bg-grid-pattern opacity-50" />
      
      <div className="relative container">
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 bg-primary/10 rounded-lg text-sm font-semibold text-primary mb-4"
          >
            Get Started Today
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
          >
            Ready to Transform Your Dental Practice?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300"
          >
            Join thousands of dental professionals who trust SmileToTheWorld Pro
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-col items-center gap-4"
          >
            <div className="relative group inline-block">
              <div className="absolute -inset-px bg-gradient-to-r from-primary/50 via-primary/30 to-primary/50 rounded-lg blur-sm group-hover:blur opacity-75 transition duration-500 group-hover:opacity-100" />
              <Link
                href="/signup"
                className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-primary hover:bg-primary/90 rounded-lg transition-colors duration-200"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300"
                >
                  <CheckCircle className="h-5 w-5 text-primary" />
                  {benefit}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
