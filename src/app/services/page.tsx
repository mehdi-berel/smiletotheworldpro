import { Metadata } from 'next';
import ServicesGrid from '../components/services/ServicesGrid';
import ServiceBenefitsSection from '../components/services/ServiceBenefitsSection';
import ServiceAudit from '../components/services/ServiceAudit';
import ServiceHero from '../components/services/ServiceHero';
import PageContainer from '../components/shared/PageContainer';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services | Dentist Design',
  description: 'Transform your dental practice with our state-of-the-art digital design services and solutions.',
};

export default function Services() {
  return (
    <PageContainer>
      {/* Hero Section */}
      <ServiceHero />

      {/* Main Service Offering */}
      <div className="mb-24">
        <ServicesGrid />
      </div>

      {/* Benefits Section */}
      <div className="mb-24 bg-gradient-to-b from-background to-primary/5">
        <ServiceBenefitsSection />
      </div>

      {/* Quality & Compliance */}
      <div className="mb-24">
        <ServiceAudit />
      </div>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative overflow-hidden rounded-2xl bg-primary">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-grid-white/10 opacity-10" />
          
          <div className="relative p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Ready to Transform Your Practice?
                </h2>
                <p className="text-white/90 mb-8 text-lg">
                  Join the digital revolution in dental design. Get started with our premium services today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary font-semibold rounded-full hover:bg-white/90 transition-colors duration-200 group"
                  >
                    Get Started Now
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </a>
                  <a
                    href="/pricing"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-colors duration-200"
                  >
                    View Pricing
                  </a>
                </div>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-8">
                {[
                  { value: "2500+", label: "Designs Completed" },
                  { value: "98%", label: "Success Rate" },
                  { value: "24/7", label: "Support" },
                  { value: "48h", label: "Turnaround" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-white/80 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
