'use client'

import { useState } from 'react'
import { LogIn, User } from 'lucide-react'
import { useAuth } from './AuthContext'
import AuthModal from './AuthModal'

export default function AuthButton() {
  const { user, isAuthenticated, signOut } = useAuth()
  const [showAuthModal, setShowAuthModal] = useState(false)

  if (isAuthenticated && user) {
    return (
      <div className="relative group">
        <button className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-primary">
          <User className="w-5 h-5" />
          <span>{user.firstName}</span>
        </button>
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 hidden group-hover:block">
          <button
            onClick={signOut}
            className="block w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 text-left"
          >
            Sign Out
          </button>
        </div>
      </div>
    )
  }

  return (
    <>
      <button
        onClick={() => setShowAuthModal(true)}
        className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-primary"
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
