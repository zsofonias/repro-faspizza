// import { useDispatch, useSelector } from 'react-redux';
// import {
//   decreaseItemQuantity,
//   getCartItemQuantityById,
//   increaseItemQuantity,
// } from '../../store/slices/cartSlice';
import { useCart } from '../../context/CartContext';
import Button from '../../components/ui/Button';

type Props = {
  pizzaId: number;
};

function UpdateItemQuntity({ pizzaId }: Props) {
  // const itemCount = useSelector(getCartItemQuantityById(pizzaId));
  // const dispatch = useDispatch();
  const { increaseItemQuantity, decreaseItemQuantity, getItemQuantity } =
    useCart();
  const itemCount = getItemQuantity(pizzaId);

  return (
    <div className="flex items-center gap-2">
      <Button
        key={`-${itemCount}`}
        variant="round"
        // onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
        onClick={() => decreaseItemQuantity(pizzaId)}
      >
        -
      </Button>
      <span className="text-sm font-medium">{itemCount}</span>
      <Button
        key={`+${itemCount}`}
        variant="round"
        // onClick={() => dispatch(increaseItemQuantity(pizzaId))}
        onClick={() => increaseItemQuantity(pizzaId)}
      >
        +
      </Button>
    </div>
  );
}
export default UpdateItemQuntity;
