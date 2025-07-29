import Button from '../../components/ui/Button';
import type { ICartItem } from '../../types/order';
import { formatCurrency } from '../../utils/helpers';

type Props = {
  item: ICartItem;
};

function CartItem({ item }: Props) {
  const { name, quantity, totalPrice } = item;

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="">
        {quantity}&times; {name}
      </p>
      <div className="mt-1 flex items-center justify-between sm:mt-0 sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <Button variant="small">Delete</Button>
      </div>
    </li>
  );
}

export default CartItem;
