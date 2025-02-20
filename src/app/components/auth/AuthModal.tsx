'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import SignInForm from './SignInForm'
import RegisterForm from './RegisterForm'

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  defaultView?: 'signin' | 'register'
}

export default function AuthModal({ 
  isOpen, 
  onClose,
  defaultView = 'signin'
}: AuthModalProps) {
  const [view, setView] = useState<'signin' | 'register'>(defaultView)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="mb-6">
          <div className="flex space-x-4 mb-6">
            <button
              onClick={() => setView('signin')}
              className={`flex-1 py-2 text-center rounded-md ${
                view === 'signin'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setView('register')}
              className={`flex-1 py-2 text-center rounded-md ${
                view === 'register'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              Register
            </button>
          </div>

          {view === 'signin' ? (
            <SignInForm onSuccess={onClose} />
          ) : (
            <RegisterForm onSuccess={() => {
              setView('signin')
            }} />
          )}
        </div>
      </div>
    </div>
  )
}
