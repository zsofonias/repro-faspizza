// import { useDispatch } from 'react-redux';

// import { removeItem } from '../../store/slices/cartSlice';
import { useCart } from '../../context/CartContext';
import type { ICartItem } from '../../types/order';
import { formatCurrency } from '../../utils/helpers';

import Button from '../../components/ui/Button';
import UpdateItemQuntity from './UpdateItemQuntity';

type Props = {
  item: ICartItem;
};

function CartItem({ item }: Props) {
  const { name, quantity, totalPrice } = item;

  // const dispatch = useDispatch();
  const { removeItem } = useCart();

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="">
        {quantity}&times; {name}
      </p>
      <div className="mt-1 flex items-center justify-between sm:mt-0 sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuntity pizzaId={item.pizzaId} />
        <Button
          // onClick={() => dispatch(removeItem(item.pizzaId))}
          onClick={() => removeItem(item.pizzaId)}
          variant="small"
        >
          Delete
        </Button>
      </div>
    </li>
  );
}

export default CartItem;
