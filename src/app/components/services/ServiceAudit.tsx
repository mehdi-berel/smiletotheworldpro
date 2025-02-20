'use client';

import * as React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Check,
  Sparkles,
  ShieldCheck,
  Clock,
  Users,
  Microscope,
  Truck,
  HeartPulse,
  BadgeCheck
} from 'lucide-react';

const auditFeatures = [
  {
    title: "Quality Assurance",
    description: "Comprehensive quality checks at every stage of dental procedures.",
    icon: Check,
    metrics: ["99.9% Success Rate", "Daily Quality Checks"],
    details: [
      "Multi-point quality inspection",
      "Real-time monitoring systems",
      "Advanced testing protocols",
      "Regular auditor reviews"
    ]
  },
  {
    title: "Performance Tracking",
    description: "Detailed analysis of treatment outcomes and satisfaction rates.",
    icon: Sparkles,
    metrics: ["Real-time Monitoring", "Monthly Reports"],
    details: [
      "Patient satisfaction tracking",
      "Treatment success metrics",
      "Performance analytics",
      "Continuous improvement"
    ]
  },
  {
    title: "Compliance Review",
    description: "Regular audits to ensure adherence to dental standards.",
    icon: ShieldCheck,
    metrics: ["100% Compliance", "Quarterly Reviews"],
    details: [
      "Regulatory compliance checks",
      "Documentation review",
      "Standard operating procedures",
      "Policy adherence"
    ]
  },
  {
    title: "Safety Standards",
    description: "Strict protocols for patient safety and infection control.",
    icon: ShieldCheck,
    metrics: ["Zero Incidents", "Daily Safety Checks"],
    details: [
      "Infection control protocols",
      "Equipment sterilization",
      "Safety training",
      "Emergency procedures"
    ]
  },
  {
    title: "Lab Testing",
    description: "Regular testing of materials and equipment calibration.",
    icon: Microscope,
    metrics: ["Weekly Testing", "ISO Standards"],
    details: [
      "Material quality testing",
      "Equipment calibration",
      "Environmental monitoring",
      "Quality control checks"
    ]
  },
  {
    title: "Staff Training",
    description: "Continuous professional development and skill assessment.",
    icon: Users,
    metrics: ["Monthly Training", "Certified Staff"],
    details: [
      "Professional development",
      "Skill assessments",
      "Certification tracking",
      "Team workshops"
    ]
  }
];

const certifications = [
  { cert: "ISO 9001", year: "2024", description: "Quality Management System" },
  { cert: "FDA Approved", year: "2024", description: "Medical Device Standards" },
  { cert: "CE Marked", year: "2024", description: "European Conformity" },
  { cert: "HIPAA Compliant", year: "2024", description: "Data Security Standards" }
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

export default function AuditSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [hoveredCert, setHoveredCert] = useState<string | null>(null);

  return (
    <section className="py-12 overflow-hidden">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-foreground text-transparent bg-clip-text">
          Quality & Compliance
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Our commitment to excellence is reflected in our rigorous quality assurance and compliance processes.
        </p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {auditFeatures.map((feature, index) => (
          <motion.div
            key={index}
            variants={item}
            className={`
              group bg-card text-card-foreground rounded-xl shadow-lg
              transition-all duration-300 hover:shadow-xl
              ${expandedIndex === index ? 'lg:col-span-2 row-span-2' : ''}
            `}
            onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
          >
            <div className="p-6">
              <div className="flex flex-col items-center text-center">
                <motion.div 
                  className="p-3 bg-primary/10 rounded-full"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <feature.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <h3 className="text-lg font-semibold mt-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm mt-2">
                  {feature.description}
                </p>

                <div className="flex gap-4 mt-4">
                  {feature.metrics.map((metric, metricIndex) => (
                    <motion.span
                      key={metricIndex}
                      className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * metricIndex }}
                    >
                      {metric}
                    </motion.span>
                  ))}
                </div>

                {/* Expandable Details */}
                <motion.div 
                  className={`w-full mt-4 ${expandedIndex === index ? 'block' : 'hidden'}`}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ 
                    opacity: expandedIndex === index ? 1 : 0,
                    height: expandedIndex === index ? 'auto' : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="border-t border-border pt-4">
                    <ul className="space-y-2 text-left">
                      {feature.details.map((detail, detailIndex) => (
                        <motion.li 
                          key={detailIndex}
                          className="flex items-center text-muted-foreground"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * detailIndex }}
                        >
                          <Check className="w-4 h-4 text-primary mr-2" />
                          {detail}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Certification Section */}
      <motion.div 
        className="mt-16 bg-card text-card-foreground rounded-xl shadow-lg p-8 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-semibold mb-8 text-center">Our Certifications</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {certifications.map((cert) => (
            <motion.div
              key={cert.cert}
              className="relative group"
              onMouseEnter={() => setHoveredCert(cert.cert)}
              onMouseLeave={() => setHoveredCert(null)}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex flex-col items-center p-4 rounded-lg bg-primary/5 relative z-10">
                <BadgeCheck className="w-8 h-8 text-primary mb-2" />
                <h4 className="font-semibold">{cert.cert}</h4>
                <p className="text-sm text-muted-foreground">{cert.year}</p>
                
                {/* Hover Description */}
                <motion.div
                  className={`
                    absolute inset-0 bg-primary/10 rounded-lg backdrop-blur-sm
                    flex items-center justify-center p-4 transition-opacity duration-200
                    ${hoveredCert === cert.cert ? 'opacity-100' : 'opacity-0'}
                  `}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredCert === cert.cert ? 1 : 0 }}
                >
                  <p className="text-sm font-medium text-primary-foreground">
                    {cert.description}
                  </p>
                </motion.div>
              </div>
              
              {/* Background Glow */}
              <div 
                className={`
                  absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-foreground/20
                  rounded-lg blur-xl transition-opacity duration-300
                  ${hoveredCert === cert.cert ? 'opacity-100' : 'opacity-0'}
                `}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
