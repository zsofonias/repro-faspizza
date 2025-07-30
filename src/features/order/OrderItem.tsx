import type { ICartItem } from '../../types/order';
import { formatCurrency } from '../../utils/helpers';

type Props = {
  item: ICartItem;
  isLoadingIngredients?: boolean;
  ingredients?: string[];
};

function OrderItem({ item, isLoadingIngredients, ingredients = [] }: Props) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="py-3">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-sm text-stone-500 capitalize italic">
        {isLoadingIngredients ? 'Loading...' : ingredients.join(', ')}
      </p>
    </li>
  );
}

export default OrderItem;
