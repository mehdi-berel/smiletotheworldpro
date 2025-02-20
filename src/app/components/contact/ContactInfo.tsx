'use client';

import { Instagram } from 'lucide-react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const social = [
  { 
    name: 'Instagram',
    href: 'https://www.instagram.com/smiletotheworldpro/',
    icon: Instagram
  }
];

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '(+33) 07 69 92 29 13',
    href: 'tel:+330769922913',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'support@smile2theworldpro.com',
    href: 'mailto:support@smile2theworldpro.com',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: 'Ville de Paris, Paris, France',
    href: 'https://maps.google.com',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Mon-Fri: 9:00 AM - 6:00 PM\nSat: 9:00 AM - 2:00 PM',
    href: null,
  },
];

export default function ContactInfo() {
  return (
    <div className="bg-card text-card-foreground rounded-xl shadow-lg p-6 md:p-8 space-y-8">
      <div>
        <h2 className="text-2xl font-semibold mb-2">More Information</h2>
        <p className="text-muted-foreground">
          Have questions about our services? We&apos;re here to help you create your perfect smile.
        </p>
      </div>
      
      <div className="grid gap-8 sm:grid-cols-2">
        {contactInfo.map((item) => (
          <div key={item.label} className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <item.icon className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">{item.label}</h3>
              {item.href ? (
                <a
                  href={item.href}
                  className="mt-2 text-base text-muted-foreground hover:text-primary"
                >
                  {item.value}
                </a>
              ) : (
                <p className="mt-2 text-base text-muted-foreground whitespace-pre-line">
                  {item.value}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="pt-6 border-t border-border">
        <h3 className="font-medium text-foreground mb-4">Connect With Us</h3>
        <div className="flex space-x-4">
          {social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-muted-foreground hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
