import { Metadata } from 'next';
import LabHero from '../components/laboratory/LabHero';
import LabProcess from '../components/laboratory/LabProcess';
import LabFeatures from '../components/laboratory/LabFeatures';
import LabAudit from '../components/laboratory/LabAudit';

export const metadata: Metadata = {
  title: 'Dental Laboratory | High-Precision Dental Solutions',
  description: 'Our state-of-the-art dental laboratory combines French expertise with innovative technology for exceptional dental prosthetics.',
  keywords: 'dental laboratory, dental prosthetics, dental equipment, dental technology',
};

export default function Laboratory() {
  return (
    <main className="min-h-screen bg-background">
      <LabHero />
      <div className="space-y-16">
        <LabProcess />
        <LabFeatures />
        <LabAudit />
      </div>
    </main>
  );
}
