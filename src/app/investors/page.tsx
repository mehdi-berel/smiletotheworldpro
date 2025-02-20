import type { Metadata } from 'next';
import InvestorHero from '../components/investors/InvestorHero';
import InvestmentOpportunities from '../components/investors/InvestmentOpportunities';
import CompanyMetrics from '../components/investors/CompanyMetrics';
import InvestorContact from '../components/investors/InvestorContact';

export const metadata: Metadata = {
  title: 'Investors - SmileToTheWorld Pro',
  description: 'Investment opportunities in the future of dental equipment trading. Learn about our growth, market potential, and investment thesis.',
  keywords: ['dental investment', 'dental technology investment', 'healthcare investment opportunity', 'dental market growth'],
};

export default function InvestorsPage() {
  return (
    <main>
      {/* Hero Section */}
      <InvestorHero />

      {/* Company Performance Metrics */}
      <CompanyMetrics />

      {/* Investment Opportunities */}
      <InvestmentOpportunities />

      {/* Contact Form */}
      <InvestorContact />
    </main>
  );
}
