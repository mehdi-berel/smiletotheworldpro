'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-react';

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'Marketplace', href: '/marketplace' },
    { name: 'Services', href: '/services' },
    { name: 'Laboratory', href: '/laboratory' },
    { name: 'Contact', href: '/contact' },
  ],
  company: [
    { name: 'Partners', href: '/partners' },
    { name: 'About', href: '/about' },
    { name: 'Investors', href: '/investors' },
    { name: 'Help Center', href: '/help' },
    { name: 'Blog', href: '/blog' },
  ],
  social: [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/smiletotheworldpro/',
      icon: Instagram,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/kathy-essid/',
      icon: Linkedin,
    }
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
    { name: 'Cookie Policy', href: '/cookie-policy' },
    { name: 'GDPR Compliance', href: '/gdpr' },
    { name: 'Accessibility', href: '/accessibility' }
  ],
};

const contactInfo = [
  {
    icon: Phone,
    text: '(+33) 07 69 92 29 13',
    href: 'tel:+330769922913',
  },
  {
    icon: Mail,
    text: 'support@smile2theworldpro.com',
    href: 'mailto:support@smile2theworldpro.com',
  },
  {
    icon: MapPin,
    text: 'Ville de Paris, Paris, France',
    href: 'https://maps.google.com',
  },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Image
                src="/logo.svg"
                alt="SmileToTheWorld"
                width={40}
                height={40}
                className="dark:invert"
              />
              <span className="text-xl font-bold text-gradient">
                SmileToTheWorld
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Creating beautiful smiles and maintaining optimal dental health through advanced technology and expert care.
            </p>
            <div className="flex space-x-4">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="footer-social"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="footer-title mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="footer-link">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="footer-title mb-6">Company</h3>
            <ul className="space-y-4">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="footer-link">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="footer-title mb-6">Contact Us</h3>
            <ul className="space-y-4">
              {contactInfo.map((item) => (
                <li key={item.text}>
                  <Link href={item.href} className="footer-contact">
                    <item.icon className="h-5 w-5" />
                    <span>{item.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-center text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} SmileToTheWorld. All rights reserved.
            </p>
            <ul className="flex flex-wrap justify-center gap-4">
              {navigation.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
