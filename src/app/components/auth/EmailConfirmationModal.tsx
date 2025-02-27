'use client'

import { X } from 'lucide-react'

interface EmailConfirmationModalProps {
  email: string
  onClose: () => void
}

export default function EmailConfirmationModal({ email, onClose }: EmailConfirmationModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2">Verify Your Email</h3>
          <div className="mb-4">
            <p className="text-gray-600 dark:text-gray-300">
              We've sent a confirmation email to:
            </p>
            <p className="font-medium text-primary mt-1">{email}</p>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Please check your email and click the confirmation link to complete your registration.
            You won't be able to sign in until you verify your email address.
          </p>
          
          <div className="mt-6">
            <button
              onClick={onClose}
              className="w-full py-2 px-4 bg-primary text-white rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Got it
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 