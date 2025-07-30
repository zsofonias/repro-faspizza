import { useState } from 'react';
import { Form, useActionData, useNavigation } from 'react-router';
import { useSelector } from 'react-redux';

import { getCart, getTotalCartPrice } from '../../store/slices/cartSlice';
import { useUser } from '../../context/UserContext';
import { formatCurrency } from '../../utils/helpers';

import Button from '../../components/ui/Button';
import EmptyCart from '../cart/EmptyCart';

function CreateOrder() {
  const navigation = useNavigation();
  const { username } = useUser();

  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const [withPriority, setWithPriority] = useState(false);
  const formErrors = useActionData<Record<string, string>>();

  const totalPrice = totalCartPrice + (withPriority ? totalCartPrice * 0.2 : 0);

  const isSubmitting = navigation.state === 'submitting';

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-6">
      <h2 className="text-xl font-semibold">Ready to order? Let's go!</h2>

      <Form method="POST" className="mt-6">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input
            type="text"
            name="customer"
            defaultValue={username}
            required
            className="input grow"
          />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input type="tel" name="phone" required className="input w-full" />
            {formErrors?.phone && (
              <p className="mt-2 bg-red-100 p-2 text-xs text-red-700">
                {formErrors.phone}
              </p>
            )}
          </div>
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input
              type="text"
              name="address"
              required
              className="input w-full"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority ? 'on' : 'off'}
            onChange={(e) => setWithPriority(e.target.checked)}
            className="h-6 w-6 cursor-pointer accent-yellow-400 focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:outline-none"
          />
          <label htmlFor="priority" className="font-medium">
            Want to yo give your order priority?
          </label>
        </div>

        <input type="hidden" name="cart" value={JSON.stringify(cart)} />

        <div className="mt-12">
          <Button isDisabled={isSubmitting}>
            {isSubmitting
              ? 'Placing order...'
              : `Order now (${formatCurrency(totalPrice)})`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default CreateOrder;
