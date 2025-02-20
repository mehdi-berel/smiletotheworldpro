'use client'

interface ShippingDetailsProps {
  onNext: () => void
  onBack: () => void
  formData: {
    address: string
    city: string
    state: string
    postalCode: string
    country: string
  }
  isLoading?: boolean
  error?: string | null
  updateFormData: (data: Partial<ShippingDetailsProps['formData']>) => void
}

const POSTAL_CODE_REGEX = /^[A-Z0-9]{3,10}$/i

export default function ShippingDetails({ 
  onNext, 
  onBack, 
  formData, 
  isLoading = false,
  error,
  updateFormData 
}: ShippingDetailsProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    let formattedValue = value

    // Format postal code
    if (name === 'postalCode') {
      formattedValue = value.replace(/[^A-Z0-9]/gi, '').slice(0, 10).toUpperCase()
    }

    updateFormData({ [name]: formattedValue })
  }

  const validateForm = () => {
    if (!formData.address.trim()) {
      return 'Address is required'
    }
    if (!formData.city.trim()) {
      return 'City is required'
    }
    if (!formData.state.trim()) {
      return 'State/Province is required'
    }
    if (!formData.postalCode.trim() || !POSTAL_CODE_REGEX.test(formData.postalCode)) {
      return 'Please enter a valid postal code'
    }
    if (!formData.country.trim()) {
      return 'Country is required'
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
      <h2 className="text-2xl font-semibold">Shipping Details</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Address
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
              !formData.address.trim() ? 'border-red-500' : 'border-gray-300'
            }`}
            disabled={isLoading}
            placeholder="123 Main St, Apt 4B"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              City
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                !formData.city.trim() ? 'border-red-500' : 'border-gray-300'
              }`}
              disabled={isLoading}
              placeholder="New York"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              State/Province
            </label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                !formData.state.trim() ? 'border-red-500' : 'border-gray-300'
              }`}
              disabled={isLoading}
              placeholder="NY"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Postal Code
            </label>
            <input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              required
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                formData.postalCode && !POSTAL_CODE_REGEX.test(formData.postalCode) ? 'border-red-500' : 'border-gray-300'
              }`}
              disabled={isLoading}
              placeholder="10001"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Country
            </label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                !formData.country.trim() ? 'border-red-500' : 'border-gray-300'
              }`}
              disabled={isLoading}
              placeholder="United States"
            />
          </div>
        </div>
      </div>

      {error && (
        <div className="text-red-500 text-sm mt-2">
          {error}
        </div>
      )}

      <div className="flex justify-between">
        <button
          type="button"
          onClick={onBack}
          className="px-6 py-2 text-primary border-2 border-primary rounded-lg hover:bg-primary hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isLoading}
        >
          Back
        </button>
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
