'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { UserCircle2, ChevronDown, Settings, List, DollarSign, ShoppingBag, CreditCard, User, LogOut } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../auth/AuthContext';

const menuItems = [
  { name: 'My Profile', href: '/profile/profile', icon: User },
  { name: 'My Listings', href: '/profile/listings', icon: List },
  { name: 'My Earnings', href: '/profile/earnings', icon: DollarSign },
  { name: 'My Orders', href: '/profile/orders', icon: ShoppingBag },
  { name: 'My Configuration', href: '/profile/config', icon: Settings },
  { name: 'My Billing', href: '/profile/billing', icon: CreditCard },
];

export default function ProfileButton() {
  const { user, signOut } = useAuth();
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

  if (!user) return null;

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 text-sm text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
      >
        <UserCircle2 className="h-5 w-5" />
        <span>{user.firstName || 'User'}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-56 rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
          >
            {/* User info */}
            <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-700">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {user.firstName} {user.lastName}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                {user.email}
              </p>
            </div>

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
              
              {/* Sign out button */}
              <button
                onClick={async () => {
                  await signOut();
                  setIsOpen(false);
                }}
                className="w-full group flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-red-400 dark:hover:bg-gray-700/50"
              >
                <LogOut className="mr-3 h-4 w-4 text-red-400 group-hover:text-red-500" />
                Sign Out
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
