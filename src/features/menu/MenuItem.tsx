import type { IMenuItem } from '../../types/menu';
import { formatCurrency } from '../../utils/helpers';

type Props = {
  item: IMenuItem;
};

function MenuItem({ item }: Props) {
  const { name, unitPrice, ingredients, soldOut, imageUrl } = item;

  return (
    <li>
      <img src={imageUrl} alt={name} />
      <div>
        <p>{name}</p>
        <p>{ingredients.join(', ')}</p>
        <div>
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
