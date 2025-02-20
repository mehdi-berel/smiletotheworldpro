export type OrderStatus = 'processing' | 'shipped' | 'delivered';

export interface OrderItem {
  name: string;
  quantity: number;
  price: number;
  image: string;
}

export interface ShippingDetails {
  address: string;
  tracking: string;
  estimatedDelivery: string;
}

export interface Order {
  id: string;
  status: OrderStatus;
  date: string;
  total: number;
  items: OrderItem[];
  shipping: ShippingDetails;
}
