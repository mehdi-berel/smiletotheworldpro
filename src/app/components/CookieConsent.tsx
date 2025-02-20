'use client'

import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { X } from 'lucide-react'

const COOKIE_CONSENT_KEY = 'cookie-consent'

interface CookieSettings {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [cookieSettings, setCookieSettings] = useState<CookieSettings>({
    necessary: true, // Always required
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    // Check if user has already made a choice
    const consent = Cookies.get(COOKIE_CONSENT_KEY)
    if (!consent) {
      setIsVisible(true)
    } else {
      try {
        const savedSettings = JSON.parse(consent)
        setCookieSettings(savedSettings)
      } catch (error) {
        console.error('Error parsing cookie settings:', error)
      }
    }
  }, [])

  const handleAcceptAll = () => {
    const settings: CookieSettings = {
      necessary: true,
      analytics: true,
      marketing: true,
    }
    saveSettings(settings)
  }

  const handleAcceptNecessary = () => {
    const settings: CookieSettings = {
      necessary: true,
      analytics: false,
      marketing: false,
    }
    saveSettings(settings)
  }

  const handleSavePreferences = () => {
    saveSettings(cookieSettings)
  }

  const saveSettings = (settings: CookieSettings) => {
    // Save settings for 1 year
    Cookies.set(COOKIE_CONSENT_KEY, JSON.stringify(settings), { expires: 365 })
    
    // Apply cookie settings
    if (settings.analytics) {
      // Initialize analytics (e.g., Google Analytics)
      console.log('Analytics cookies enabled')
    }
    if (settings.marketing) {
      // Initialize marketing cookies
      console.log('Marketing cookies enabled')
    }

    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg z-50">
      <div className="max-w-7xl mx-auto p-4">
        {!showPreferences ? (
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1">
              <h2 className="text-lg font-semibold mb-2">We value your privacy</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 min-w-fit">
              <button
                onClick={() => setShowPreferences(true)}
                className="px-4 py-2 text-sm text-primary border-2 border-primary rounded hover:bg-primary hover:text-white transition-colors"
              >
                Cookie Settings
              </button>
              <button
                onClick={handleAcceptNecessary}
                className="px-4 py-2 text-sm text-gray-600 border-2 border-gray-300 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                Necessary Only
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-4 py-2 text-sm bg-primary text-white rounded hover:bg-primary-dark transition-colors"
              >
                Accept All
              </button>
            </div>
          </div>
        ) : (
          <div className="relative">
            <button
              onClick={() => setShowPreferences(false)}
              className="absolute right-0 top-0 p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="mb-4">
              <h2 className="text-lg font-semibold mb-2">Cookie Preferences</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Manage your cookie preferences. Necessary cookies help make the website usable by enabling basic functions.
              </p>
            </div>
            <div className="space-y-4 mb-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Necessary Cookies</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Required for the website to function properly.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={cookieSettings.necessary}
                  disabled
                  className="h-4 w-4 text-primary border-gray-300 rounded"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Analytics Cookies</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Help us improve our website by collecting usage information.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={cookieSettings.analytics}
                  onChange={(e) =>
                    setCookieSettings({ ...cookieSettings, analytics: e.target.checked })
                  }
                  className="h-4 w-4 text-primary border-gray-300 rounded cursor-pointer"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Marketing Cookies</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Used to track visitors across websites to display relevant advertisements.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={cookieSettings.marketing}
                  onChange={(e) =>
                    setCookieSettings({ ...cookieSettings, marketing: e.target.checked })
                  }
                  className="h-4 w-4 text-primary border-gray-300 rounded cursor-pointer"
                />
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowPreferences(false)}
                className="px-4 py-2 text-sm text-gray-600 border-2 border-gray-300 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSavePreferences}
                className="px-4 py-2 text-sm bg-primary text-white rounded hover:bg-primary-dark transition-colors"
              >
                Save Preferences
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
