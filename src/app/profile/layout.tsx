'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { User, List, ShoppingBag, DollarSign, CreditCard, Settings } from 'lucide-react';

const sidebarItems = [
  { name: 'My Profile', href: '/profile/profile', icon: User },
  { name: 'My Listings', href: '/profile/listings', icon: List },
  { name: 'My Orders', href: '/profile/orders', icon: ShoppingBag },
  { name: 'My Earnings', href: '/profile/earnings', icon: DollarSign },
  { name: 'My Billing', href: '/profile/billing', icon: CreditCard },
  { name: 'Configuration', href: '/profile/config', icon: Settings },
];

interface LayoutProps {
  children: ReactNode;
}

export default function ProfileLayout({ children }: LayoutProps) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <motion.aside 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="w-full md:w-64 space-y-2 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm"
          >
            {sidebarItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-primary text-white'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {item.icon && <item.icon className="w-5 h-5" />}
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </motion.aside>

          {/* Main Content */}
          <motion.main 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex-1 bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6"
          >
            {children}
          </motion.main>
        </div>
      </div>
    </div>
  );
}
