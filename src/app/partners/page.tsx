import type { Metadata } from 'next';
import PartnerHero from '../components/partners/PartnerHero';
import PartnerShowcase from '../components/partners/PartnerShowcase';
import PartnerBenefits from '../components/partners/PartnerBenefits';
import PartnerApplication from '../components/partners/PartnerApplication';
import PartnerTestimonials from '../components/partners/PartnerTestimonials';

export const metadata: Metadata = {
  title: 'Partners - SmileToTheWorld Pro',
  description: 'Join our network of trusted partners in the dental industry. Discover partnership opportunities and benefits.',
  keywords: ['dental partners', 'dental industry collaboration', 'dental equipment partnership', 'dental technology alliance'],
};

export default function PartnersPage() {
  return (
    <main>
      {/* Hero Section */}
      <PartnerHero />

      {/* Partner Showcase */}
      <PartnerShowcase />

      {/* Benefits Section */}
      <div id="benefits">
        <PartnerBenefits />
      </div>

      {/* Testimonials */}
      <PartnerTestimonials />

      {/* Application Form */}
      <div id="apply">
        <PartnerApplication />
      </div>
    </main>
  );
}
