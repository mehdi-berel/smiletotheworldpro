'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-gray-100/50 dark:bg-grid-gray-900/50 bg-grid-pattern" />
      
      <div className="relative container py-24 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 rounded-lg blur opacity-30" />
              <div className="relative px-4 py-2 bg-primary/10 rounded-lg inline-block">
                <p className="text-sm font-semibold text-primary">
                  Transforming Dental Care
                </p>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl"
            >
              Advanced Dental Solutions for Modern Practices
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
            >
              Elevate your dental practice with cutting-edge technology and streamlined workflows. Join thousands of satisfied professionals who trust SmileToTheWorld Pro.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary hover:bg-primary/90 rounded-lg transition-colors duration-200"
              >
                Book Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-primary bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors duration-200"
              >
                Explore Services
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative lg:ml-auto"
          >
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-primary/50 rounded-xl blur-2xl opacity-30 animate-pulse" />
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src="/hero.jpg"
                  alt="Modern dental practice"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Stats Overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    Trusted by
                  </p>
                  <p className="text-2xl font-bold text-primary">1000+</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Dental Practices
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
