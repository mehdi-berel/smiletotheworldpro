import { Metadata } from 'next';
import ContactClient from '../components/contact/ContactClient';
import PageContainer from '../components/shared/PageContainer';

export const metadata: Metadata = {
  title: 'Contact Us | Dentist Design',
  description: 'Get in touch with our dental team. We\'re here to answer your questions and provide assistance.',
};

export default function Contact() {
  return (
    <PageContainer>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-teal-600 dark:from-blue-400 dark:to-teal-400 text-transparent bg-clip-text">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Have questions or need assistance? We're here to help! Reach out to us using the form below or through our contact information.
          </p>
        </div>

        <ContactClient />
      </div>
    </PageContainer>
  );
}
