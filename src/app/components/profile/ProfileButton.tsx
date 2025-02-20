'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { UserCircle2, ChevronDown, Settings, List, DollarSign, ShoppingBag, CreditCard, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const menuItems = [
  { name: 'My Profile', href: '/profile/profile', icon: User },
  { name: 'My Listings', href: '/profile/listings', icon: List },
  { name: 'My Earnings', href: '/profile/earnings', icon: DollarSign },
  { name: 'My Orders', href: '/profile/orders', icon: ShoppingBag },
  { name: 'My Configuration', href: '/profile/config', icon: Settings },
  { name: 'My Billing', href: '/profile/billing', icon: CreditCard },
];

export default function ProfileButton() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 text-sm text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
      >
        <UserCircle2 className="h-5 w-5" />
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-56 rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <div className="py-1">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700/50"
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className="mr-3 h-4 w-4 text-gray-400 group-hover:text-primary dark:text-gray-500" />
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
