import { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Order Successful | DentistDesign',
  description: 'Your order has been successfully placed',
}

type OrderSuccessPageProps = {
  params: {
    id: string
  }
}

export default function OrderSuccessPage({ params }: OrderSuccessPageProps) {
  if (!params?.id) {
    return <div>Invalid order ID</div>
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <CheckCircle className="w-16 h-16 text-green-500" />
          </div>
          <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Order Successful!</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Thank you for your order. We have sent a confirmation email with your order details.
          </p>
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-300">
              Order ID: <span className="font-medium">{params.id}</span>
            </p>
            <Link
              href="/marketplace"
              className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
