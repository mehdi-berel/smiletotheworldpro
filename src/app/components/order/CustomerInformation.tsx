'use client'

interface CustomerInformationProps {
  onNext: () => void
  formData: {
    firstName: string
    lastName: string
    email: string
    phone: string
  }
  isLoading?: boolean
  error?: string | null
  updateFormData: (data: Partial<CustomerInformationProps['formData']>) => void
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_REGEX = /^\+?[\d\s-]{10,}$/

export default function CustomerInformation({ 
  onNext, 
  formData, 
  isLoading = false,
  error,
  updateFormData 
}: CustomerInformationProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    let formattedValue = value

    // Format phone number
    if (name === 'phone') {
      formattedValue = value.replace(/[^\d+\s-]/g, '')
    }

    updateFormData({ [name]: formattedValue })
  }

  const validateForm = () => {
    if (!formData.firstName.trim()) {
      return 'First name is required'
    }
    if (!formData.lastName.trim()) {
      return 'Last name is required'
    }
    if (!formData.email.trim() || !EMAIL_REGEX.test(formData.email)) {
      return 'Please enter a valid email address'
    }
    if (!formData.phone.trim() || !PHONE_REGEX.test(formData.phone)) {
      return 'Please enter a valid phone number'
    }
    return null
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const validationError = validateForm()
    if (!validationError) {
      onNext()
    } else {
      updateFormData({ ...formData }) // Trigger error display
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-semibold">Customer Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
              !formData.firstName.trim() ? 'border-red-500' : 'border-gray-300'
            }`}
            disabled={isLoading}
            placeholder="John"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
              !formData.lastName.trim() ? 'border-red-500' : 'border-gray-300'
            }`}
            disabled={isLoading}
            placeholder="Doe"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
              formData.email && !EMAIL_REGEX.test(formData.email) ? 'border-red-500' : 'border-gray-300'
            }`}
            disabled={isLoading}
            placeholder="john.doe@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
              formData.phone && !PHONE_REGEX.test(formData.phone) ? 'border-red-500' : 'border-gray-300'
            }`}
            disabled={isLoading}
            placeholder="+1 234 567 8900"
          />
        </div>
      </div>

      {error && (
        <div className="text-red-500 text-sm mt-2">
          {error}
        </div>
      )}

      <div className="flex justify-end">
        <button
          type="submit"
          className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Next'}
        </button>
      </div>
    </form>
  )
}
