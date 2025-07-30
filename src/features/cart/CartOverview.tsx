// import { useSelector } from 'react-redux';
import { Link } from 'react-router';

// import {
//   getCartItemsCount,
//   getTotalCartPrice,
// } from '../../store/slices/cartSlice';
import { useCart } from '../../context/CartContext';
import { formatCurrency } from '../../utils/helpers';

function CartOverview() {
  // const itemsCount = useSelector(getCartItemsCount);
  // const totalPrice = useSelector(getTotalCartPrice);

  const { getItemsCount, getTotalPrice } = useCart();
  const itemsCount = getItemsCount();
  const totalPrice = getTotalPrice();

  if (!itemsCount) return null;

  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm text-stone-200 uppercase sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{itemsCount} pizzas</span>
        <span>{formatCurrency(totalPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
