'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { 
  Microscope, 
  Crown, 
  Sparkles, 
  Beaker, 
  ShieldCheck, 
  Clock 
} from 'lucide-react';

const mainService = {
  title: "Laboratoire de Prothèse Dentaire",
  description: "Excellence et précision dans chaque création"
};

const features = [
  {
    title: "Advanced Technology",
    description: "Latest CAD/CAM software and 3D modeling tools",
    icon: Microscope,
    color: "from-blue-500/20 to-blue-600/20"
  },
  {
    title: "Precision Work",
    description: "High-accuracy scans and detailed design work",
    icon: Crown,
    color: "from-purple-500/20 to-purple-600/20"
  },
  {
    title: "Rapid Prototyping",
    description: "Quick iterations with 3D printed models",
    icon: Sparkles,
    color: "from-green-500/20 to-green-600/20"
  },
  {
    title: "Material Science",
    description: "Expert material selection and compatibility",
    icon: Beaker,
    color: "from-yellow-500/20 to-yellow-600/20"
  },
  {
    title: "Quality Guarantee",
    description: "100% satisfaction or free revisions",
    icon: ShieldCheck,
    color: "from-red-500/20 to-red-600/20"
  },
  {
    title: "Fast Turnaround",
    description: "48-hour standard delivery time",
    icon: Clock,
    color: "from-teal-500/20 to-teal-600/20"
  }
];

const additionalFeatures = [
  "ISO 9001:2015 certified laboratory",
  "Experienced technicians",
  "Latest digital workflow",
  "Competitive pricing",
  "Express service available",
  "Free consultations"
];

export default function LabDental() {
  return (
    <div className="relative isolate overflow-hidden bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-base font-semibold leading-7 text-primary">
              Notre Expertise
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {mainService.title}
            </p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              {mainService.description}
            </p>
          </motion.div>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative rounded-2xl border border-border/10 bg-card/40 backdrop-blur-sm p-8 hover:bg-card/60 transition-colors duration-300">
                  <div className="flex items-center gap-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <feature.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-semibold leading-8 text-foreground">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-base leading-7 text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 sm:mt-20 lg:mt-24"
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-2"
              >
                <Sparkles className="w-5 h-5 text-primary flex-shrink-0" />
                <span>{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
