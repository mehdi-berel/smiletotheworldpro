'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const milestones = [
  {
    year: '2023',
    title: 'The Beginning',
    description: 'Kathy Essid founded SmileToTheWorld Pro with a vision to revolutionize dental equipment trading globally.'
  },
  {
    year: '2024',
    title: 'Development Phase',
    description: 'Intensive development of our platform, focusing on AI-powered verification and secure payment systems.'
  },
  {
    year: '2025',
    title: 'Platform Launch',
    description: 'Official launch of SmileToTheWorld Pro, connecting dental professionals across Europe with cutting-edge technology.'
  },
  {
    year: '2026',
    title: 'Global Expansion',
    description: 'Projected expansion into Asia and Americas, aiming to become the leading global marketplace for dental equipment.'
  }
];

const AboutStory = () => {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        {/* Founder's Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative h-[500px] w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <Quote className="w-20 h-20 opacity-20" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col space-y-6"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Our Story
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Founded by Kathy Essid, SmileToTheWorld Pro emerged from a simple observation: 
              the dental equipment market needed a modern, efficient platform that prioritized 
              quality and trust.
            </p>
            <div className="relative">
              <blockquote className="text-lg italic text-gray-700 dark:text-gray-300 border-l-4 border-primary pl-4">
                "I envisioned a platform where dental professionals could confidently trade equipment, 
                knowing they're getting the best value and quality. That vision became SmileToTheWorld Pro."
                <footer className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  - Kathy Essid, Founder
                </footer>
              </blockquote>
            </div>
          </motion.div>
        </div>

        {/* Milestones */}
        <div className="space-y-16">
          <div className="text-center">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Our Journey
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-gray-600 dark:text-gray-400"
            >
              From a simple idea to a global platform, here's how we've grown.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="absolute -left-3 top-1 h-6 w-6 rounded-full border-2 border-primary bg-white dark:bg-gray-800" />
                <div className="pl-6 border-l border-gray-200 dark:border-gray-700">
                  <span className="block text-sm text-primary font-semibold mb-1">
                    {milestone.year}
                  </span>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {milestone.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
