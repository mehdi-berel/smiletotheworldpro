'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Menu, 
  X as XIcon, 
  ShoppingCart, 
  Info,
  Stethoscope,
  FlaskRound,
  Phone,
  Sun,
  Moon,
  User,
  Home,
  Settings,
  List,
  DollarSign,
  CreditCard,
  LogIn
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import AuthButton from '../auth/AuthButton';
import ProfileButton from '../profile/ProfileButton';

const navigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About', href: '/about', icon: Info },
  { name: 'Services', href: '/services', icon: Stethoscope },
  { name: 'Laboratory', href: '/laboratory', icon: FlaskRound },
  { name: 'Contact', href: '/contact', icon: Phone },
];

const menuItems = [
  { name: 'My Profile', href: '/profile/profile', icon: User },
  { name: 'My Listings', href: '/profile/listings', icon: List },
  { name: 'My Earnings', href: '/profile/earnings', icon: DollarSign },
  { name: 'My Orders', href: '/profile/orders', icon: ShoppingCart },
  { name: 'My Configuration', href: '/profile/config', icon: Settings },
  { name: 'My Billing', href: '/profile/billing', icon: CreditCard },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <nav className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.svg"
              alt="SmileToTheWorld"
              width={40}
              height={40}
              className="dark:invert"
            />
            <span className="text-lg font-bold text-gradient">
              SmileToTheWorld
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="nav-link"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="nav-button"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>

          {/* Cart Link */}
          <Link
            href="/cart"
            className="nav-button"
            aria-label="Shopping cart"
          >
            <ShoppingCart className="h-5 w-5" />
          </Link>

          {/* Auth Button - Only show on desktop */}
          <div className="hidden lg:block">
            <AuthButton />
          </div>

          {/* Profile Button - Only show on desktop */}
          <div className="hidden lg:block">
            <ProfileButton />
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="nav-button lg:hidden"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 20 }}
              className="mobile-nav"
            >
              <div className="flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2" onClick={() => setMobileMenuOpen(false)}>
                  <Image
                    src="/logo.svg"
                    alt="SmileToTheWorld"
                    width={32}
                    height={32}
                    className="dark:invert"
                  />
                  <span className="text-lg font-bold text-gradient">
                    SmileToTheWorld
                  </span>
                </Link>
                <button
                  type="button"
                  className="nav-button"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  {/* Main Navigation */}
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="mobile-nav-link"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <div className="flex items-center">
                          <item.icon className="h-5 w-5 mr-3" />
                          {item.name}
                        </div>
                      </Link>
                    ))}
                  </div>
                  
                  {/* Profile Menu Items */}
                  <div className="py-6">
                    {menuItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="mobile-nav-link"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <div className="flex items-center">
                          <item.icon className="h-5 w-5 mr-3" />
                          {item.name}
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Sign In/Out Section */}
                  <div className="py-6">
                    <div className="mobile-nav-link">
                      <AuthButton className="w-full flex items-center" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
