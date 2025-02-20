'use client';

import * as React from 'react';
import { 
  Camera, 
  Computer, 
  Beaker 
} from 'lucide-react';

const equipment = [
  {
    name: "Imagerie Numérique",
    description: "Scanner intraoral dernière génération",
    icon: Camera,
    specs: [
      "Précision 10 microns",
      "Scan temps réel HD",
      "Export multi-formats"
    ]
  },
  {
    name: "Usinage CAD/CAM",
    description: "Centre d'usinage 5 axes ultra-précis",
    icon: Computer,
    specs: [
      "Précision 0.01mm",
      "Vitesse optimale",
      "Multi-matériaux"
    ]
  },
  {
    name: "Laboratoire R&D",
    description: "Innovation et recherche continue",
    icon: Beaker,
    specs: [
      "Tests avancés",
      "Contrôle qualité",
      "Veille technologique"
    ]
  }
];

export default function LabEquipment() {
  return (
    <div className="py-8 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            Équipements de Pointe
          </h2>
          <p className="text-lg text-muted-foreground">
            Technologies de dernière génération pour des résultats d'excellence
          </p>
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
          {equipment.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm hover:from-card/60 hover:to-card/40 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0 opacity-50 group-hover:opacity-70 transition-opacity" />
              
              <div className="relative p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>

                  <h3 className="text-lg font-semibold text-foreground">
                    {item.name}
                  </h3>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4">
                  {item.description}
                </p>
                
                <div className="space-y-2">
                  {item.specs.map((spec, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center text-sm text-muted-foreground/90 group-hover:text-muted-foreground transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary/60 mr-2 transition-colors" />
                      {spec}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
