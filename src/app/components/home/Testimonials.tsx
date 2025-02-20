'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    content: "SmileToTheWorld Pro has revolutionized how I manage my dental practice. The platform's efficiency and user-friendly interface have saved us countless hours.",
    author: "Dr. Sarah Johnson",
    role: "Dental Clinic Owner",
    rating: 5,
    image: "/images/testimonials/avatar-1.jpg"
  },
  {
    content: "The quality control features and seamless communication with laboratories have significantly improved our workflow. Highly recommended for modern dental practices.",
    author: "Dr. Michael Chen",
    role: "Orthodontist",
    rating: 5,
    image: "/images/testimonials/avatar-2.jpg"
  },
  {
    content: "Outstanding platform that has helped us scale our dental laboratory operations. The digital workflow is intuitive and has reduced our turnaround time.",
    author: "James Wilson",
    role: "Lab Director",
    rating: 5,
    image: "/images/testimonials/avatar-3.jpg"
  }
];

export default function Testimonials() {
  return (
    <section className="relative py-24 bg-white dark:bg-gray-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-gray-100/50 dark:bg-grid-gray-900/50 bg-grid-pattern opacity-50" />
      
      <div className="relative container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 bg-primary/10 rounded-lg text-sm font-semibold text-primary mb-4"
          >
            Testimonials
          </motion.span>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
          >
            Trusted by Leading Dental Professionals
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300"
          >
            Discover why dental practices and laboratories choose SmileToTheWorld Pro for their digital workflow needs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute -inset-px bg-gradient-to-r from-primary/50 via-primary/30 to-primary/50 rounded-lg blur-sm group-hover:blur opacity-75 transition duration-500 group-hover:opacity-100" />
              <div className="relative flex flex-col h-full p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/20" />
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative h-14 w-14 flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {testimonial.author}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                <div className="flex gap-0.5 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                <blockquote className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {testimonial.content}
                </blockquote>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
