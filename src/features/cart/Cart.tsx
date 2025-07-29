import { useDispatch, useSelector } from 'react-redux';

import type { RootState } from '../../store/store';
import { clearCart, getCart } from '../../store/slices/cartSlice';
import CartItem from './CartItem';
import Button from '../../components/ui/Button';
import LinkButton from '../../components/ui/LinkButton';

function Cart() {
  const username = useSelector((state: RootState) => state.user.username);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  const isCartEmpty = cart.length === 0;

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>

      {isCartEmpty && (
        <div className="mt-10 flex flex-col items-center gap-6 text-center">
          <p>Your cart is empty. Add some pizzas to get started!</p>

          <Button to="/menu">View pizzas</Button>
        </div>
      )}

      {!isCartEmpty && (
        <>
          <ul className="mt-3 divide-y divide-stone-200 border-b border-stone-200">
            {cart.map((item) => (
              <CartItem key={item.pizzaId} item={item} />
            ))}
          </ul>
          <div className="mt-6 space-x-5">
            <Button to="/order/new">Order pizzas</Button>

            <Button variant="secondary" onClick={() => dispatch(clearCart())}>
              Clear cart
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
