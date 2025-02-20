'use client'

import { useState, useEffect, type ComponentType, type ReactElement } from 'react'
import { Check, CreditCard, Truck, User } from 'lucide-react'
import { useRouter } from 'next/navigation'
import CustomerInformation from './CustomerInformation'
import ShippingDetails from './ShippingDetails'
import Payment from './Payment'

interface BaseStepProps {
  isLoading?: boolean
  error?: string | null
}

interface CustomerInfo {
  firstName: string
  lastName: string
  email: string
  phone: string
}

interface ShippingInfo {
  address: string
  city: string
  state: string
  postalCode: string
  country: string
}

interface PaymentInfo {
  cardNumber: string
  expiryDate: string
  cvv: string
}

interface ValidationResult {
  isValid: boolean
  error?: string
}

interface OrderProcessProps {
  id?: string
}

type StepKey = 'customer' | 'shipping' | 'payment'

type FormData = {
  customer: CustomerInfo
  shipping: ShippingInfo
  payment: PaymentInfo
}

interface StepComponentProps<T> extends BaseStepProps {
  formData: T
  updateFormData: (data: Partial<T>) => void
  onNext?: () => void
  onBack?: () => void
  onComplete?: () => Promise<void>
  id?: string
}

type StepComponent<K extends StepKey> = ComponentType<StepComponentProps<FormData[K]>>

interface OrderStep<K extends StepKey> {
  title: string
  icon: ReactElement
  component: StepComponent<K>
  validate: (data: FormData[K]) => ValidationResult
}

const STEP_KEYS = ['customer', 'shipping', 'payment'] as const
type StepIndex = 0 | 1 | 2

// Regular expressions for form validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const phoneRegex = /^\+?[\d\s-]{10,}$/
const postalCodeRegex = /^[A-Z\d]{3,10}$/
const cardNumberRegex = /^\d{16}$/

const validateCustomerInfo = (data: CustomerInfo): ValidationResult => {
  if (!data.firstName?.trim()) {
    return { isValid: false, error: 'Please enter your first name' }
  }
  if (!data.lastName?.trim()) {
    return { isValid: false, error: 'Please enter your last name' }
  }
  if (!data.email?.trim() || !emailRegex.test(data.email)) {
    return { isValid: false, error: 'Please enter a valid email address' }
  }
  if (!data.phone?.trim() || !phoneRegex.test(data.phone)) {
    return { isValid: false, error: 'Please enter a valid phone number' }
  }
  return { isValid: true }
}

const validateShippingInfo = (data: ShippingInfo): ValidationResult => {
  if (!data.address?.trim()) {
    return { isValid: false, error: 'Please enter your shipping address' }
  }
  if (!data.city?.trim()) {
    return { isValid: false, error: 'Please enter your city' }
  }
  if (!data.state?.trim()) {
    return { isValid: false, error: 'Please enter your state/province' }
  }
  if (!data.postalCode?.trim() || !postalCodeRegex.test(data.postalCode)) {
    return { isValid: false, error: 'Please enter a valid postal code' }
  }
  if (!data.country?.trim()) {
    return { isValid: false, error: 'Please select your country' }
  }
  return { isValid: true }
}

const validatePaymentInfo = (data: PaymentInfo): ValidationResult => {
  if (!data.cardNumber?.trim() || !cardNumberRegex.test(data.cardNumber)) {
    return { isValid: false, error: 'Please enter a valid 16-digit card number' }
  }
  if (!data.expiryDate?.trim() || !/^(0[1-9]|1[0-2])\/([0-9]{2})$/.test(data.expiryDate)) {
    return { isValid: false, error: 'Please enter a valid expiry date (MM/YY)' }
  }
  if (!data.cvv?.trim() || !/^[0-9]{3,4}$/.test(data.cvv)) {
    return { isValid: false, error: 'Please enter a valid CVV (3-4 digits)' }
  }
  return { isValid: true }
}

const steps: readonly [
  OrderStep<'customer'>,
  OrderStep<'shipping'>,
  OrderStep<'payment'>
] = [
  {
    title: 'Customer Information',
    icon: <User className="h-6 w-6" aria-hidden="true" />,
    component: CustomerInformation as StepComponent<'customer'>,
    validate: validateCustomerInfo,
  },
  {
    title: 'Shipping Details',
    icon: <Truck className="h-6 w-6" aria-hidden="true" />,
    component: ShippingDetails as StepComponent<'shipping'>,
    validate: validateShippingInfo,
  },
  {
    title: 'Payment',
    icon: <CreditCard className="h-6 w-6" aria-hidden="true" />,
    component: Payment as StepComponent<'payment'>,
    validate: validatePaymentInfo,
  },
] as const

export default function OrderProcess({ id }: OrderProcessProps) {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState<StepIndex>(0)
  const [formData, setFormData] = useState<FormData>({
    customer: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    },
    shipping: {
      address: '',
      city: '',
      state: '',
      postalCode: '',
      country: '',
    },
    payment: {
      cardNumber: '',
      expiryDate: '',
      cvv: '',
    },
  })
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setError(null)
  }, [currentStep])

  const updateFormData = (section: StepKey) => (data: Partial<FormData[typeof section]>) => {
    setFormData((prev) => ({
      ...prev,
      [section]: { ...prev[section], ...data },
    }))
    setError(null)
  }

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(0, prev - 1) as StepIndex)
  }

  const handleNext = () => {
    const currentSection = STEP_KEYS[currentStep]
    const step = steps[currentStep] as OrderStep<typeof currentSection>
    const currentStepData = formData[currentSection]
    
    try {
      const validation = step.validate(currentStepData)
      if (!validation.isValid) {
        setError(validation.error ?? 'Please complete all required fields')
        return
      }
      setCurrentStep((prev) => Math.min(steps.length - 1, prev + 1) as StepIndex)
    } catch (err) {
      setError('An unexpected error occurred. Please try again.')
    }
  }

  const handleComplete = async () => {
    try {
      setIsLoading(true)
      setError(null)
      // TODO: Implement order submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      router.push('/order/success')
    } catch (err) {
      setError('Failed to complete order. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const currentSection = STEP_KEYS[currentStep]
  const CurrentStepComponent = steps[currentStep].component as StepComponent<typeof currentSection>

  return (
    <div className="max-w-3xl mx-auto">
      <nav aria-label="Progress" className="mb-8">
        <ol role="list" className="space-y-4 md:flex md:space-y-0 md:space-x-8">
          {steps.map((step, index) => (
            <li key={step.title} className="md:flex-1">
              <div
                className={`
                  group pl-4 py-2 flex flex-col border-l-4 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4
                  ${
                    index < currentStep
                      ? 'border-primary'
                      : index === currentStep
                      ? 'border-primary'
                      : 'border-gray-200 dark:border-gray-700'
                  }
                `}
              >
                <span className="text-sm font-medium flex items-center space-x-2">
                  {index < currentStep ? (
                    <Check className="w-5 h-5 text-primary" />
                  ) : (
                    step.icon
                  )}
                  <span>{step.title}</span>
                </span>
              </div>
            </li>
          ))}
        </ol>
      </nav>

      <div className="mt-8">
        <CurrentStepComponent
          formData={formData[currentSection]}
          updateFormData={updateFormData(currentSection)}
          onNext={handleNext}
          onBack={currentStep > 0 ? handleBack : undefined}
          onComplete={currentStep === steps.length - 1 ? handleComplete : undefined}
          isLoading={isLoading}
          error={error}
          id={id}
        />
      </div>
    </div>
  )
}
