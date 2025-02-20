'use client';

import * as React from 'react';
import { Check } from 'lucide-react';

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted: boolean;
}

const plans: PricingPlan[] = [
  {
    name: "Basic Care",
    price: "$99",
    period: "per month",
    description: "Essential dental care for individuals",
    features: [
      "Regular check-ups",
      "Basic cleaning",
      "X-rays",
      "Cavity fillings",
      "Emergency care"
    ],
    highlighted: false
  },
  {
    name: "Premium Care",
    price: "$199",
    period: "per month",
    description: "Comprehensive care for families",
    features: [
      "All Basic Care features",
      "Deep cleaning",
      "Cosmetic procedures",
      "Orthodontic care",
      "Priority appointments",
      "Family discounts"
    ],
    highlighted: true
  },
  {
    name: "Professional",
    price: "$299",
    period: "per month",
    description: "Complete dental solutions",
    features: [
      "All Premium Care features",
      "Advanced cosmetic procedures",
      "Dental implants",
      "24/7 emergency support",
      "VIP appointments",
      "Complimentary consultations"
    ],
    highlighted: false
  }
];

export default function PricingPlansSection() {
  return (
    <section className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-600 dark:from-blue-400 dark:to-teal-400 text-transparent bg-clip-text">
          Treatment Plans
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Choose the perfect dental care plan that suits your needs and budget.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`
              relative bg-card text-card-foreground rounded-xl shadow-lg overflow-hidden
              ${plan.highlighted ? 'ring-2 ring-primary scale-105 md:scale-110' : ''}
            `}
          >
            {plan.highlighted && (
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 rounded-bl-lg text-sm font-medium">
                Popular
              </div>
            )}

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-muted-foreground mb-4">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground">/{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`
                  w-full py-2 px-4 rounded-lg font-medium transition-colors duration-200
                  ${
                    plan.highlighted
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  }
                `}
              >
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
