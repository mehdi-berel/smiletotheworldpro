import { Metadata } from 'next';
import OrderDetails from './OrderDetails';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
  searchParams: { [key: string]: string | string[] | undefined };
}

export const metadata: Metadata = {
  title: 'Order Details - SmileToTheWorld',
  description: 'View your order details and tracking information',
};

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  
  if (!resolvedParams.id) {
    notFound();
  }

  return <OrderDetails orderId={resolvedParams.id} />;
}
