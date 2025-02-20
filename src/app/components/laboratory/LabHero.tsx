'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Beaker, ArrowRight } from 'lucide-react';

export default function LabHero() {
  return (
    <div className="relative isolate overflow-hidden bg-background">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-background/80 shadow-xl shadow-primary/10 ring-1 ring-primary/5" />
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
                French Laboratory
              </span>
              <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-foreground">
                <span>ISO 9001 Certified</span>
              </span>
            </a>
          </div>
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            High-Precision <br />
            <span className="text-primary">Dental Laboratory</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Perfect alliance between French expertise and innovative technologies for excellence in dental solutions.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link
              href="/services"
              className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary group"
            >
              <span>Discover Our Services</span>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="rounded-lg px-6 py-3 text-sm font-semibold text-foreground border border-border hover:bg-card/80 transition-colors"
            >
              Book an Appointment
            </Link>
          </div>

          {/* Stats section */}
          <div className="mt-16 grid grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold tracking-tight text-foreground">15+</div>
              <div className="mt-1 text-sm leading-6 text-muted-foreground">Years of Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold tracking-tight text-foreground">10k+</div>
              <div className="mt-1 text-sm leading-6 text-muted-foreground">Prostheses Made</div>
            </div>
            <div>
              <div className="text-3xl font-bold tracking-tight text-foreground">99%</div>
              <div className="mt-1 text-sm leading-6 text-muted-foreground">Satisfied Clients</div>
            </div>
          </div>
        </motion.div>

        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <motion.div
              className="pt-8"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 opacity-50 blur-xl" />
                <div className="relative z-10 rounded-2xl bg-card p-8 ring-1 ring-card/5 backdrop-blur">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <Beaker className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Advanced Technology</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Maximum precision guaranteed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
