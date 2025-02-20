'use client';

import * as React from 'react';
import { 
  ScanLine, 
  Cog, 
  Printer, 
  CheckCircle 
} from 'lucide-react';

const steps = [
  {
    name: "Numérisation",
    description: "Scan précis de l'empreinte dentaire",
    icon: ScanLine,
    details: [
      "Haute résolution",
      "Précision garantie",
      "Modélisation 3D"
    ]
  },
  {
    name: "Conception CAD",
    description: "Design assisté par ordinateur",
    icon: Cog,
    details: [
      "Logiciels spécialisés",
      "Design personnalisé",
      "Validation technique"
    ]
  },
  {
    name: "Fabrication",
    description: "Production avec équipements de pointe",
    icon: Printer,
    details: [
      "Matériaux premium",
      "Contrôle qualité",
      "Finition experte"
    ]
  },
  {
    name: "Validation",
    description: "Tests et vérifications approfondis",
    icon: CheckCircle,
    details: [
      "Tests multiples",
      "Contrôle esthétique",
      "Validation finale"
    ]
  }
];

export default function LabProcess() {
  return (
    <div className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Notre Processus
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
            Un workflow optimisé pour des résultats d'excellence
          </p>
        </div>

        <div className="mt-16 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group bg-card/40 hover:bg-card/60 backdrop-blur-sm rounded-xl p-6 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-sm font-semibold text-primary">
                    {index + 1}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {step.description}
                </p>

                <ul className="space-y-2">
                  {step.details.map((detail, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-muted-foreground/90 group-hover:text-muted-foreground transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary/60 mr-2 transition-colors" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
