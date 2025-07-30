import { useDispatch, useSelector } from 'react-redux';

import {
  addItem,
  getCartItemQuantityById,
  removeItem,
} from '../../store/slices/cartSlice';

import type { ICartItem } from '../../types/order';
import { formatCurrency } from '../../utils/helpers';
import type { IMenuItem } from '../../types/menu';

import Button from '../../components/ui/Button';
import UpdateItemQuntity from '../cart/UpdateItemQuntity';

type Props = {
  item: IMenuItem;
};

function MenuItem({ item }: Props) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = item;

  const itemQuntity = useSelector(getCartItemQuantityById(id));
  const dispatch = useDispatch();

  const isItemInCart = Boolean(itemQuntity);

  function handleAddToCart() {
    const cartItem: ICartItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice,
    };
    dispatch(addItem(cartItem));
  }

  return (
    <li className={`flex gap-4 py-2 ${soldOut ? 'opacity-50 grayscale' : ''}`}>
      <img src={imageUrl} alt={name} className="h-24" />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm text-stone-500 capitalize italic">
          {ingredients.join(', ')}
        </p>
        <div className="mt-auto flex items-center justify-between text-sm">
          <p>{formatCurrency(unitPrice)}</p>

          {!isItemInCart ? (
            <Button
              isDisabled={soldOut}
              key="add"
              onClick={() => handleAddToCart()}
              variant="small"
            >
              {soldOut ? 'Out of stock' : 'Add to cart'}
            </Button>
          ) : (
            <div className="flex items-center gap-2 sm:gap-4 lg:gap-6">
              <UpdateItemQuntity pizzaId={id} />
              <Button
                key="remove"
                variant="small"
                onClick={() => dispatch(removeItem(id))}
              >
                Remove From Cart
              </Button>
            </div>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
