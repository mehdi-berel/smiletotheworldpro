import { type Metadata } from 'next'
import OrderProcess from '@/app/components/order/OrderProcess'

export const metadata: Metadata = {
  title: 'Order Process - SmileToTheWorld',
  description: 'Complete your order with SmileToTheWorld',
}

interface PageProps {
  params: {
    id: string
  }
}

export default function Page({ params }: PageProps) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Complete Your Order
        </h1>
        <OrderProcess id={params.id} />
      </div>
    </div>
  )
}
