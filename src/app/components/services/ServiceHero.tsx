'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ShieldCheck, Clock } from 'lucide-react';

const advantages = [
  {
    name: 'Quality Guaranteed',
    description: 'We ensure the highest quality standards in every project.',
    icon: ShieldCheck,
  },
  {
    name: 'Fast Turnaround',
    description: 'Quick delivery without compromising on quality.',
    icon: Clock,
  },
  {
    name: 'Expert Solutions',
    description: 'Innovative solutions from experienced professionals.',
    icon: Sparkles,
  },
];

export default function ServiceHero() {
  return (
    <div className="relative isolate overflow-hidden bg-background">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <motion.div 
          className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <a href="#special-offer" className="inline-flex space-x-6">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold leading-6 text-primary ring-1 ring-inset ring-primary/10">
                Special Introduction Offer
              </span>
              <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-foreground">
                <span>Learn more</span>
                <ArrowRight className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
              </span>
            </a>
          </div>
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Transform Your Dental Practice
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            We provide comprehensive dental design solutions that help you deliver exceptional patient care while growing your practice.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="#contact"
              className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Get started
            </a>
            <a href="#services" className="text-sm font-semibold leading-6 text-foreground">
              View services <span aria-hidden="true">→</span>
            </a>
          </div>
        </motion.div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <motion.div 
              className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {advantages.map((advantage) => (
                <div
                  key={advantage.name}
                  className="relative bg-card rounded-2xl p-6 shadow-sm ring-1 ring-gray-900/5"
                >
                  <div className="flex items-center gap-x-4">
                    <advantage.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                    <h3 className="text-sm font-semibold leading-7 text-foreground">
                      {advantage.name}
                    </h3>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {advantage.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
