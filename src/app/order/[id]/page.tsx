import { Metadata } from 'next';
import OrderDetails from './OrderDetails';
import { notFound } from 'next/navigation';

type PageProps = {
  params: {
    id: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

export const metadata: Metadata = {
  title: 'Order Details - SmileToTheWorld',
  description: 'View your order details and tracking information',
};

export default function Page({ params }: PageProps) {
  if (!params.id) {
    notFound();
  }

  return <OrderDetails orderId={params.id} />;
}
