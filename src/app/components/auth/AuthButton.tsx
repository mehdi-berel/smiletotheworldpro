'use client'

import { useState } from 'react'
import { LogIn } from 'lucide-react'
import { useAuth } from './AuthContext'
import AuthModal from './AuthModal'

interface AuthButtonProps {
  className?: string;
}

export default function AuthButton({ className = '' }: AuthButtonProps) {
  const { isAuthenticated, loading } = useAuth()
  const [showAuthModal, setShowAuthModal] = useState(false)

  // Show loading state
  if (loading) {
    return (
      <div className={`flex items-center ${className}`}>
        <span className="text-gray-500 dark:text-gray-400">Loading...</span>
      </div>
    );
  }

  // If authenticated, don't render the button
  if (isAuthenticated) {
    return null;
  }

  return (
    <>
      <button
        onClick={() => setShowAuthModal(true)}
        className={`flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-primary ${className}`}
      >
        <LogIn className="w-5 h-5" />
        <span>Sign In</span>
      </button>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      />
    </>
  )
}
