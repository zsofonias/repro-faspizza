export interface ICartItem {
  pizzaId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

export interface INewOrder {
  customer: string;
  phone: string;
  address: string;
  priority?: boolean;
  cart: ICartItem[];
}

export interface IOrder extends INewOrder {
  id?: string;
  estimatedDelivery: string;
  orderPrice: number;
  status: string;
  position?: string;
  priorityPrice?: number;
}

export type OrderLoaderProps = {
  params: { orderId: string };
};
