'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'CEO at DentalTech Pro',
    image: '/testimonials/sarah.jpg',
    content: 'Partnering with SmileToTheWorld has been transformative for our business. Their commitment to excellence and innovation aligns perfectly with our values.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Director at OrthoMasters',
    image: '/testimonials/michael.jpg',
    content: 'The support and resources provided by the partnership program have helped us expand our market reach significantly.',
    rating: 5,
  },
  {
    name: 'Emma Rodriguez',
    role: 'Founder of SmileCare Solutions',
    image: '/testimonials/emma.jpg',
    content: 'Outstanding collaboration platform. The team is responsive, professional, and always ready to help partners succeed.',
    rating: 5,
  },
];

export default function PartnerTestimonials() {
  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Partner Success Stories
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Hear from our partners about their experience working with SmileToTheWorld.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6"
            >
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <p className="text-gray-600 dark:text-gray-300 italic">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
