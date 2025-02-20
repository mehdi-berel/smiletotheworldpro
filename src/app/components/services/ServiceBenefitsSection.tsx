'use client';

import * as React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Clock, 
  Users, 
  Sparkles, 
  Microscope, 
  BadgeCheck, 
  HeartPulse, 
  Truck 
} from 'lucide-react';

const benefits = [
  {
    title: "Patient-Centered Care",
    description: "Personalized treatment plans tailored to your unique dental needs and preferences.",
    icon: HeartPulse,
    stats: ["98% Patient Satisfaction", "24/7 Support"]
  },
  {
    title: "Convenient Hours",
    description: "Flexible scheduling options including evening and weekend appointments.",
    icon: Clock,
    stats: ["Extended Hours", "Weekend Slots"]
  },
  {
    title: "Expert Team",
    description: "Highly skilled dental professionals with years of experience and continuous training.",
    icon: Users,
    stats: ["20+ Years Experience", "Certified Staff"]
  },
  {
    title: "Modern Technology",
    description: "State-of-the-art equipment and latest dental techniques for optimal results.",
    icon: Sparkles,
    stats: ["Latest Equipment", "Digital Solutions"]
  },
  {
    title: "Affordable Options",
    description: "Competitive pricing and flexible payment plans to suit your budget.",
    icon: BadgeCheck,
    stats: ["Flexible Plans", "Insurance Accepted"]
  },
  {
    title: "Safety First",
    description: "Rigorous sterilization protocols and safety measures for your protection.",
    icon: ShieldCheck,
    stats: ["100% Safety Record", "Daily Checks"]
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function ServiceBenefitsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-12 overflow-hidden">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-foreground text-transparent bg-clip-text">
          Why Choose Us
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Experience the difference with our comprehensive dental care services and dedicated team.
        </p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            variants={item}
            className="group relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <motion.div
              className={`
                bg-card text-card-foreground rounded-xl shadow-lg p-6
                transition-all duration-300 relative z-10
                ${hoveredIndex === index ? 'scale-[1.02]' : ''}
              `}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start space-x-4">
                <motion.div 
                  className="p-3 bg-primary/10 rounded-full"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <benefit.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {benefit.description}
                  </p>
                  
                  {/* Stats */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {benefit.stats.map((stat, statIndex) => (
                      <motion.span
                        key={statIndex}
                        className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 * statIndex }}
                      >
                        {stat}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Background Gradient Effect */}
            <div 
              className={`
                absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-foreground/20
                rounded-xl blur-xl transition-opacity duration-300
                ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}
              `}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Trust Indicators */}
      <motion.div 
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="inline-flex flex-wrap justify-center gap-4 md:gap-8">
          {[
            { text: "20+ Years Experience", icon: Clock },
            { text: "5000+ Happy Patients", icon: Users },
            { text: "100% Satisfaction Rate", icon: HeartPulse },
            { text: "Award-Winning Care", icon: Sparkles }
          ].map((indicator, index) => (
            <motion.div
              key={index}
              className="flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <indicator.icon className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">{indicator.text}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
