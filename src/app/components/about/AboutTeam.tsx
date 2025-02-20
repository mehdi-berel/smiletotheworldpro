'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, User } from 'lucide-react';

const founders = [
  {
    name: 'Kathy Essid',
    role: 'Founder & CEO',
    bio: 'With over 15 years of experience in dental practice and international business, Kathy founded SmileToTheWorld Pro to revolutionize how dental equipment is traded globally.',
    social: {
      linkedin: 'https://linkedin.com/in/kathyessid',
      email: 'kathy@smile2theworldpro.com'
    }
  },
  {
    name: 'Mehdi BEREL',
    role: 'Co-Founder & CTO',
    bio: 'An engineering student with experience in IT development, Mehdi drives technological innovation at SmileToTheWorld.',
    social: {
      linkedin: 'https://linkedin.com/in/davidchen',
      email: 'mehdi@smile2theworldpro.com'
    }
  }
];

export default function AboutTeam() {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-4">
            Meet Our Founders
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Visionaries who combined healthcare expertise and technological innovation to transform the dental equipment market.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col items-center"
            >
              <div className="w-64 h-64 mb-6 rounded-full overflow-hidden border-4 border-primary/10 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                <User className="w-32 h-32 text-gray-400" />
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {founder.name}
                </h3>
                <p className="text-primary font-medium mb-4">{founder.role}</p>
                <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
                  {founder.bio}
                </p>
                
                <div className="flex justify-center space-x-4">
                  <a
                    href={founder.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white dark:hover:bg-primary transition-colors duration-200"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:${founder.social.email}`}
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white dark:hover:bg-primary transition-colors duration-200"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a
            href="/partners"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white shadow-lg hover:bg-primary/90 transition-all duration-200"
          >
            Become Partners
          </a>
        </motion.div>
      </div>
    </section>
  );
}
