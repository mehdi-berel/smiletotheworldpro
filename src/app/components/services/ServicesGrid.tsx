'use client';

import { useState } from 'react';
import { 
  Microscope, 
  Crown, 
  Stethoscope, 
  Syringe, 
  Smile, 
  HeartPulse, 
  Activity, 
  Sparkles 
} from 'lucide-react';
import { motion } from 'framer-motion';

const mainService = {
  title: "Premium Digital Design Package",
  description: "Complete digital dental design solution with guaranteed satisfaction",
  price: "$999",
  originalPrice: "$1,499",
  features: [
    "Full 3D modeling and design",
    "Digital smile design planning",
    "CAD/CAM ready outputs",
    "Multiple revision rounds",
    "48-hour turnaround time",
    "Quality assurance report"
  ],
  advantages: [
    {
      title: "Advanced Technology",
      description: "Latest CAD/CAM software and 3D modeling tools",
      icon: Sparkles,
      color: "from-blue-500/20 to-blue-600/20"
    },
    {
      title: "Precision Quality",
      description: "High-accuracy scans and detailed design work",
      icon: Microscope,
      color: "from-purple-500/20 to-purple-600/20"
    },
    {
      title: "Premium Materials",
      description: "Expert material selection and compatibility",
      icon: Crown,
      color: "from-green-500/20 to-green-600/20"
    },
    {
      title: "Medical Grade",
      description: "Certified medical-grade processes",
      icon: Stethoscope,
      color: "from-yellow-500/20 to-yellow-600/20"
    },
    {
      title: "Quality Guarantee",
      description: "100% satisfaction or free revisions",
      icon: Syringe,
      color: "from-red-500/20 to-red-600/20"
    },
    {
      title: "Fast Turnaround",
      description: "48-hour standard delivery time",
      icon: HeartPulse,
      color: "from-teal-500/20 to-teal-600/20"
    }
  ]
};

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

export default function ServicesGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="py-16 px-4">
      {/* Main Service Offer */}
      <motion.div 
        className="max-w-4xl mx-auto mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="bg-card rounded-2xl p-8 border border-border relative overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-foreground/5 pointer-events-none" />
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-foreground text-transparent bg-clip-text mb-2">
                  {mainService.title}
                </h2>
                <p className="text-muted-foreground text-lg">
                  {mainService.description}
                </p>
              </div>
              <div className="text-right">
                <div className="text-sm text-muted-foreground line-through">
                  {mainService.originalPrice}
                </div>
                <div className="text-3xl font-bold text-primary">
                  {mainService.price}
                </div>
                <div className="text-sm text-muted-foreground">
                  per design project
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {mainService.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <Smile className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              className="w-full md:w-auto bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium
                flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started Now
              <Activity className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Advantages Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {mainService.advantages.map((advantage, index) => (
          <motion.div
            key={index}
            variants={item}
            className="relative group"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className={`
              absolute inset-0 bg-gradient-to-br ${advantage.color}
              rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300
            `} />
            
            <div className="bg-card border border-border rounded-xl p-6 relative z-10
              hover:border-primary/20 transition-colors duration-300"
            >
              <motion.div 
                className="p-3 bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <advantage.icon className="w-6 h-6 text-primary" />
              </motion.div>
              
              <h3 className="text-lg font-semibold mb-2">
                {advantage.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {advantage.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
