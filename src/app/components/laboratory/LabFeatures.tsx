'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { 
  Beaker, 
  Box, 
  Search, 
  Clock, 
  Users, 
  Sparkles,
  BoxSelect,
  FileText,
  Upload
} from 'lucide-react';

const features = [
  {
    name: 'Advanced Equipment',
    description: 'State-of-the-art dental laboratory equipment for precise results.',
    icon: Beaker,
  },
  {
    name: 'Quality Materials',
    description: 'Premium materials sourced from trusted suppliers worldwide.',
    icon: Box,
  },
  {
    name: 'Quality Control',
    description: 'Rigorous quality control processes for every project.',
    icon: Search,
  },
  {
    name: 'Fast Turnaround',
    description: '48-hour express service available for urgent cases.',
    icon: Clock,
  },
  {
    name: 'Expert Team',
    description: 'Highly skilled technicians with years of experience.',
    icon: Users,
  },
  {
    name: 'Advanced Technology',
    description: 'Digital workflow integration for better accuracy.',
    icon: Sparkles,
  },
  {
    name: 'Custom Solutions',
    description: 'Tailored solutions for unique patient needs.',
    icon: BoxSelect,
  },
  {
    name: 'Documentation',
    description: 'Detailed documentation for every case.',
    icon: FileText,
  },
  {
    name: 'Digital Integration',
    description: 'Seamless digital file transfer and case management.',
    icon: Upload,
  },
];

const formats = [
  {
    name: "STL (Stereolithography)",
    description: "Standard format for 3D printing and CAD/CAM dental applications",
    icon: Box,
    acceptedFormats: [
      ".stl (binary)",
      ".stl (ASCII)",
      "Resolution: minimum 50 microns",
      "Mesh quality: watertight"
    ],
    specifications: [
      "Supports color and texture",
      "Compatible with all major CAD software",
      "Ideal for dental models and surgical guides"
    ]
  },
  {
    name: "PLY (Polygon File Format)",
    description: "Format for storing 3D scanned dental data with color information",
    icon: FileText,
    acceptedFormats: [
      ".ply (binary)",
      ".ply (ASCII)",
      "Resolution: minimum 100 microns",
      "Color: RGB support"
    ],
    specifications: [
      "Supports vertex colors",
      "Includes texture coordinates",
      "Ideal for textured dental models"
    ]
  },
  {
    name: "OBJ (Wavefront)",
    description: "Universal 3D format for dental models and restorations",
    icon: Upload,
    acceptedFormats: [
      ".obj",
      ".mtl (material file)",
      "Resolution: minimum 50 microns",
      "Texture maps: PNG/JPG"
    ],
    specifications: [
      "Supports multiple textures",
      "Wide software compatibility",
      "Good for complex dental structures"
    ]
  }
];

export default function LabFeatures() {
  return (
    <div className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Equipment
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            State-of-the-art dental laboratory equipment for precise diagnostics and production
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-card/40 hover:bg-card/60 backdrop-blur-sm rounded-lg p-6 transition-all duration-300 border border-border/10 hover:border-border/30"
            >
              <div className="relative z-10">
                <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.name}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {[
            { label: "Years of Experience", value: "15+" },
            { label: "Cases Completed", value: "10k+" },
            { label: "Satisfied Clients", value: "500+" },
            { label: "Success Rate", value: "99.9%" },
          ].map((stat, index) => (
            <div 
              key={index} 
              className="group relative bg-card/40 hover:bg-card/60 backdrop-blur-sm rounded-lg p-6 transition-all duration-300 border border-border/10 hover:border-border/30 text-center"
            >
              <div className="text-3xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Digital Formats Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Accepted Digital Formats
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
            We support a wide range of digital formats for dental applications, ensuring compatibility with your existing workflow.
          </p>
        </div>

        <div className="mt-16 grid gap-8 grid-cols-1 md:grid-cols-3">
          {formats.map((format, index) => (
            <div
              key={index}
              className="relative group bg-card/40 hover:bg-card/60 backdrop-blur-sm rounded-lg p-6 transition-all duration-300 border border-border/10 hover:border-border/30"
            >
              <div className="flex items-center justify-between mb-4">
                <format.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                  Supported
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {format.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {format.description}
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs font-medium text-foreground mb-2">
                      Accepted Formats:
                    </h4>
                    <ul className="list-none space-y-1">
                      {format.acceptedFormats.map((format, idx) => (
                        <li key={idx} className="flex items-center text-xs text-muted-foreground">
                          <span className="w-0.5 h-0.5 bg-primary/40 rounded-full mr-1.5" />
                          {format}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-xs font-medium text-foreground mb-2">
                      Specifications:
                    </h4>
                    <ul className="list-none space-y-1">
                      {format.specifications.map((spec, idx) => (
                        <li key={idx} className="flex items-center text-xs text-muted-foreground">
                          <span className="w-0.5 h-0.5 bg-primary/40 rounded-full mr-1.5" />
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
