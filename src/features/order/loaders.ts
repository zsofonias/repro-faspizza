import type { LoaderFunctionArgs } from 'react-router';

import { getOrder } from '../../services/apiRestaurant';
import type { OrderLoaderProps } from '../../types/order';

export async function orderLoader({
  params,
}: LoaderFunctionArgs<OrderLoaderProps>) {
  if (!params.orderId) return;
  return await getOrder(params.orderId);
}
