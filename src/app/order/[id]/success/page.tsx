import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import { notFound } from 'next/navigation';

interface Props {
  params: { id: string };
}

export const metadata: Metadata = {
  title: 'Order Success - SmileToTheWorld',
  description: 'Your order has been successfully placed',
};

export default function OrderSuccessPage({ params }: Props) {
  if (!params.id) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <CheckCircle className="w-16 h-16 text-green-500" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Order Successfully Placed!
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Thank you for your order. Your order number is #{params.id}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={`/order/${params.id}`}
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary hover:bg-primary/90 rounded-lg transition-colors"
          >
            View Order Details
          </Link>
          <Link
            href="/profile/orders"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            View All Orders
          </Link>
        </div>
      </div>
    </div>
  );
}
