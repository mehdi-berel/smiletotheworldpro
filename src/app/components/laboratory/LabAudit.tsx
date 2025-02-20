'use client';

import React, { useState } from 'react';
import { Check } from 'lucide-react';

const auditSteps = [
  {
    id: 1,
    name: 'Equipment Inspection',
    description: 'Thorough inspection of all dental laboratory equipment',
  },
  {
    id: 2,
    name: 'Quality Control',
    description: 'Verification of compliance with ISO 9001 standards',
  },
  {
    id: 3,
    name: 'Safety Assessment',
    description: 'Evaluation of safety measures and protocols',
  },
  {
    id: 4,
    name: 'Documentation Review',
    description: 'Review of all technical and maintenance documentation',
  },
];

const conditions = [
  { value: 'factory', label: 'Factory' },
  { value: 'reconditioned', label: 'Reconditioned' },
  { value: 'used-rarely', label: 'Used rarely' },
  { value: 'used', label: 'Used' },
  { value: 'old', label: 'Old' },
  { value: 'broken', label: 'Broken' },
];

export default function LabAudit() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [equipmentDescription, setEquipmentDescription] = useState('');
  const [equipmentCondition, setEquipmentCondition] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState('');
  const [price, setPrice] = useState('');
  const [sellingPrice, setSellingPrice] = useState('');
  const [certificate, setCertificate] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (file) {
      setMessage(`Audit request submitted for: ${name} with description: ${equipmentDescription}, condition: ${equipmentCondition}, price: ${price}, selling price: ${sellingPrice}, and file: ${file.name}`);
    } else {
      setMessage(`Audit request submitted for: ${name} with description: ${equipmentDescription} and condition: ${equipmentCondition}, price: ${price}, selling price: ${sellingPrice}, but no file was uploaded.`);
    }
    // Reset form fields
    setName('');
    setEmail('');
    setEquipmentDescription('');
    setEquipmentCondition('');
    setFile(null);
    setPrice('');
    setSellingPrice('');
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleCertificateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCertificate(e.target.files[0]);
    }
  };

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Laboratory Audit</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Professional Equipment Audit
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Our comprehensive audit service ensures your dental laboratory equipment meets all quality and safety standards.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {auditSteps.map((step) => (
              <div key={step.id} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                  <div className="rounded-full bg-primary/10 p-1">
                    <Check className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                  {step.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">{step.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-foreground">
                Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full rounded-md border-0 bg-card/50 py-2 px-3.5 text-foreground shadow-sm ring-1 ring-inset ring-border placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-foreground">
                Email
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md border-0 bg-card/50 py-2 px-3.5 text-foreground shadow-sm ring-1 ring-inset ring-border placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="equipment" className="block text-sm font-medium leading-6 text-foreground">
                Equipment Description
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="equipment"
                  value={equipmentDescription}
                  onChange={(e) => setEquipmentDescription(e.target.value)}
                  className="block w-full rounded-md border-0 bg-card/50 py-2 px-3.5 text-foreground shadow-sm ring-1 ring-inset ring-border placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="condition" className="block text-sm font-medium leading-6 text-foreground">
                Equipment Condition
              </label>
              <div className="mt-2">
                <select
                  id="condition"
                  value={equipmentCondition}
                  onChange={(e) => setEquipmentCondition(e.target.value)}
                  className="block w-full rounded-md border-0 bg-card/50 py-2 px-3.5 text-foreground shadow-sm ring-1 ring-inset ring-border placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                >
                  <option value="">Select condition</option>
                  {conditions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="price" className="block text-sm font-medium leading-6 text-foreground">
                Price (€)
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  id="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="block w-full rounded-md border-0 bg-card/50 py-2 px-3.5 text-foreground shadow-sm ring-1 ring-inset ring-border placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  min="0"
                  step="0.01"
                />
              </div>
            </div>

            <div>
              <label htmlFor="sellingPrice" className="block text-sm font-medium leading-6 text-foreground">
                Requested Selling Price (€)
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  id="sellingPrice"
                  value={sellingPrice}
                  onChange={(e) => setSellingPrice(e.target.value)}
                  className="block w-full rounded-md border-0 bg-card/50 py-2 px-3.5 text-foreground shadow-sm ring-1 ring-inset ring-border placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  min="0"
                  step="0.01"
                />
              </div>
            </div>

            <div>
              <label htmlFor="file" className="block text-sm font-medium leading-6 text-foreground">
                Equipment Photos
              </label>
              <div className="mt-2">
                <input
                  type="file"
                  id="file"
                  onChange={handleFileChange}
                  className="block w-full rounded-md border-0 bg-card/50 py-2 px-3.5 text-foreground shadow-sm ring-1 ring-inset ring-border placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  accept="image/*"
                />
              </div>
            </div>

            <div>
              <label htmlFor="certificate" className="block text-sm font-medium leading-6 text-foreground">
                Equipment Certificate/Receipt
              </label>
              <div className="mt-2">
                <input
                  type="file"
                  id="certificate"
                  onChange={handleCertificateChange}
                  className="block w-full rounded-md border-0 bg-card/50 py-2 px-3.5 text-foreground shadow-sm ring-1 ring-inset ring-border placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  accept=".pdf,.jpg,.jpeg,.png"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Request Audit
              </button>
            </div>
          </form>

          {message && (
            <div className="mt-6 p-4 rounded-md bg-primary/10 text-primary text-sm">
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
