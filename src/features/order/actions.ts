import { redirect, type ActionFunctionArgs } from 'react-router';
import { createOrder } from '../../services/apiRestaurant';
import type { INewOrder } from '../../types/order';

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str: string) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

export async function newOrderAction({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order: INewOrder = {
    customer: data.customer as string,
    phone: data.phone as string,
    address: data.address as string,
    cart: JSON.parse(data.cart as string),
    priority: data.priority === 'on',
  };

  const errors: Record<string, string> = {};

  if (!isValidPhone(order.phone)) {
    errors.phone = 'Invalid phone number, please provide correct phone number';
  }

  if (Object.keys(errors).length) {
    return errors;
  }

  const newOrder = await createOrder(order);
  return redirect(`/order/${newOrder.id}`);
}
