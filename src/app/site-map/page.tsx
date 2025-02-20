import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

const siteStructure = [
  {
    title: 'Main Pages',
    links: [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/about' },
      { name: 'Services', href: '/services' },
      { name: 'Laboratory', href: '/laboratory' },
      { name: 'Marketplace', href: '/marketplace' },
      { name: 'Vendors', href: '/vendors' },
      { name: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Profile Section',
    links: [
      { name: 'My Profile', href: '/profile/profile' },
      { name: 'My Listings', href: '/profile/listings' },
      { name: 'My Earnings', href: '/profile/earnings' },
      { name: 'My Orders', href: '/profile/orders' },
      { name: 'My Billing', href: '/profile/billing' },
    ],
  },
  {
    title: 'Settings',
    links: [
      { name: 'Configuration', href: '/config' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms of Service', href: '/terms-of-service' },
      { name: 'Cookie Policy', href: '/cookie-policy' },
    ],
  },
];

export default function SitemapPage() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Sitemap</h1>
          
          <div className="grid gap-8 md:grid-cols-2">
            {siteStructure.map((section) => (
              <div
                key={section.title}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6"
              >
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {section.title}
                </h2>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="group flex items-center text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
                      >
                        <ChevronRight className="w-4 h-4 mr-2 text-gray-400 group-hover:text-primary" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
