'use client';

import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

export default function ContactClient() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="animate-fadeIn">
        <ContactForm />
      </div>
      <div className="animate-slideIn">
        <ContactInfo />
      </div>
    </div>
  );
}
