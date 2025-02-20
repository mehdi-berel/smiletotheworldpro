import { Metadata } from 'next';
import OrderDetails from './OrderDetails';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Order Details - SmileToTheWorld',
  description: 'View your order details and tracking information',
};

export default async function Page({
  params,
}: {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { id } = params;
  
  if (!id) {
    notFound();
  }

  return <OrderDetails orderId={id} />;
}
