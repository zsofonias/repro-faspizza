import Button from '../../components/ui/Button';
import type { IMenuItem } from '../../types/menu';
import { formatCurrency } from '../../utils/helpers';

type Props = {
  item: IMenuItem;
};

function MenuItem({ item }: Props) {
  const { name, unitPrice, ingredients, soldOut, imageUrl } = item;

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? 'opacity-50 grayscale' : ''}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm text-stone-500 capitalize italic">
          {ingredients.join(', ')}
        </p>
        <div className="mt-auto flex items-center justify-between text-sm">
          {!soldOut ? (
            <p>{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="font-medium text-stone-500 uppercase">Sold out</p>
          )}

          <Button variant="small">Add to cart</Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
