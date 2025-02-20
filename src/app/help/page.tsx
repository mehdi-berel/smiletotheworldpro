import type { Metadata } from 'next';
import { HelpCircle, Book, MessageCircle, FileText, Mail, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Help Center - SmileToTheWorld Pro',
  description: 'Get help with your dental equipment marketplace experience. Access guides, FAQs, and support resources.',
};

const categories = [
  {
    icon: Book,
    title: "Getting Started",
    description: "New to SmileToTheWorld Pro? Learn the basics of buying and selling equipment.",
    link: "#guides"
  },
  {
    icon: MessageCircle,
    title: "FAQs",
    description: "Find answers to commonly asked questions about our platform.",
    link: "#faqs"
  },
  {
    icon: FileText,
    title: "Documentation",
    description: "Detailed guides and documentation for using our platform effectively.",
    link: "#docs"
  }
];

const faqs = [
  {
    question: "How do you ensure equipment quality?",
    answer: "Every piece of equipment undergoes a rigorous quality check by certified experts before being listed on our platform. We verify authenticity, condition, and functionality."
  },
  {
    question: "How does the payment system work?",
    answer: "We use a secure escrow system. Funds are held safely until both parties confirm the transaction is complete, ensuring security for buyers and sellers."
  },
  {
    question: "What if I have issues with my purchase?",
    answer: "Our dedicated support team is available 24/7 to help resolve any issues. We also offer buyer protection for eligible purchases."
  }
];

export default function HelpPage() {
  return (
    <main className="flex-1">
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-16">
            <div className="p-3 bg-primary/10 rounded-full">
              <HelpCircle className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              How Can We Help?
            </h1>
            <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Find answers, guides, and support for all your dental equipment trading needs.
            </p>
          </div>

          {/* Help Categories */}
          <div className="grid gap-8 md:grid-cols-3 mb-16">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <a
                  key={category.title}
                  href={category.link}
                  className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200"
                >
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {category.description}
                  </p>
                </a>
              );
            })}
          </div>

          {/* FAQs */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6 max-w-[800px] mx-auto">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
                >
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Options */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-8">Still Need Help?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@smile2theworldpro.com"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white shadow-lg hover:bg-primary/90 transition-all duration-200"
              >
                <Mail className="h-4 w-4" />
                Email Support
              </a>
              <a
                href="tel:+1234567890"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white dark:bg-gray-800 px-6 py-3 text-sm font-medium text-primary shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200"
              >
                <Phone className="h-4 w-4" />
                Call Support
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
