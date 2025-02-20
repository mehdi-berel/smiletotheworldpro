'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const partners = [
  {
    name: 'DentalTech Pro',
    logo: '/partners/dentaltech.svg',
    description: 'Leading provider of dental technology solutions',
    specialty: 'Digital Imaging',
    since: '2020',
  },
  {
    name: 'OrthoMasters',
    logo: '/partners/orthomasters.svg',
    description: 'Specialized in orthodontic equipment and supplies',
    specialty: 'Orthodontics',
    since: '2019',
  },
  {
    name: 'SmileCare Solutions',
    logo: '/partners/smilecare.svg',
    description: 'Comprehensive dental care product manufacturer',
    specialty: 'Dental Care Products',
    since: '2021',
  },
  {
    name: 'DentalLab Elite',
    logo: '/partners/dentallab.svg',
    description: 'Premium dental laboratory services',
    specialty: 'Lab Services',
    since: '2018',
  },
];

export default function PartnerShowcase() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Our Trusted Partners
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We collaborate with industry leaders to provide the best dental solutions for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 relative mb-4">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain dark:invert"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {partner.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {partner.description}
                </p>
                <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                  <span>{partner.specialty}</span>
                  <span>•</span>
                  <span>Partner since {partner.since}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
