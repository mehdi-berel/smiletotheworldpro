import { Metadata } from 'next';
import OrderDetails from './OrderDetails';
import { notFound } from 'next/navigation';

interface Props {
  params: { id: string };
}

export const metadata: Metadata = {
  title: 'Order Details - SmileToTheWorld',
  description: 'View your order details and tracking information',
};

export default async function Page({ params }: Props) {
  if (!params.id) {
    notFound();
  }

  return <OrderDetails orderId={params.id} />;
}
