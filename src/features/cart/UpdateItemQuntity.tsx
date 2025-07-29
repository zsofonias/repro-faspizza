import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/ui/Button';
import {
  decreaseItemQuantity,
  getCartItemQuantityById,
  increaseItemQuantity,
} from '../../store/slices/cartSlice';

type Props = {
  pizzaId: number;
};

function UpdateItemQuntity({ pizzaId }: Props) {
  const itemCount = useSelector(getCartItemQuantityById(pizzaId));
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-2">
      <Button
        key={`-${itemCount}`}
        variant="round"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <span className="text-sm font-medium">{itemCount}</span>
      <Button
        key={`+${itemCount}`}
        variant="round"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}
export default UpdateItemQuntity;
