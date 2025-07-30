import {
  createContext,
  useContext,
  useReducer,
  // useState,
  type PropsWithChildren,
} from 'react';

import type { ICartItem } from '../types/order';
import {
  type ICartContext,
  ActionType,
  type Action,
} from './cart-context.type';

const initialState: ICartItem[] = [];

const reducer = (state: ICartItem[], action: Action) => {
  switch (action.type) {
    case ActionType.ADD_ITEM:
      return [...state, action.payload];
    case ActionType.REMOVE_ITEM:
      return state.filter((item) => item.pizzaId !== action.payload);
    case ActionType.REPLACE_ITEM:
      return state.map((item) =>
        item.pizzaId === action.payload.pizzaId ? action.payload : item,
      );
    case ActionType.INCREASE_ITEM_QUANTITY:
      return state.map((item) => {
        if (item.pizzaId === action.payload) {
          return {
            ...item,
            quantity: item.quantity + 1,
            totalPrice: (item.quantity + 1) * item.unitPrice,
          };
        }
        return item;
      });
    case ActionType.DECREASE_ITEM_QUANTITY:
      return state.map((item) =>
        item.pizzaId === action.payload
          ? {
              ...item,
              quantity: item.quantity - 1,
              totalPrice: (item.quantity - 1) * item.unitPrice,
            }
          : item,
      );
    case ActionType.CLEAR_CART:
      return [];
    default:
      throw new Error('Invalid action type');
  }
};

const CartContext = createContext<ICartContext | undefined>(undefined);

function CartProvider({ children }: PropsWithChildren) {
  // const [cart, setCart] = useState<ICartItem[]>([]);
  const [cart, dispatch] = useReducer(reducer, initialState);

  // function addItem(item: ICartItem) {
  //   setCart((prevCart) => [...prevCart, item]);
  // }

  // function removeItem(id: number) {
  //   setCart((prevCart) => prevCart.filter((item) => item.pizzaId !== id));
  // }

  // function increaseItemQuantity(id: number) {
  //   setCart((prevCart) =>
  //     prevCart.map((item) =>
  //       item.pizzaId === id
  //         ? {
  //             ...item,
  //             quantity: item.quantity + 1,
  //             totalPrice: (item.quantity + 1) * item.unitPrice,
  //           }
  //         : item,
  //     ),
  //   );
  // }

  // function decreaseItemQuantity(id: number) {
  //   if (getItemQuantity(id) === 1) {
  //     removeItem(id);
  //     return;
  //   }

  //   setCart((prevCart) =>
  //     prevCart.map((item) =>
  //       item.pizzaId === id
  //         ? {
  //             ...item,
  //             quantity: item.quantity - 1,
  //             totalPrice: (item.quantity - 1) * item.unitPrice,
  //           }
  //         : item,
  //     ),
  //   );
  // }

  // function clearCart() {
  //   setCart([]);
  // }

  function addItem(item: ICartItem) {
    dispatch({ type: ActionType.ADD_ITEM, payload: item });
  }

  function removeItem(id: number) {
    dispatch({ type: ActionType.REMOVE_ITEM, payload: id });
  }

  function increaseItemQuantity(id: number) {
    // dispatch({ type: ActionType.INCREASE_ITEM_QUANTITY, payload: id });
    const item = cart.find((item) => item.pizzaId === id);
    if (!item) return;
    dispatch({
      type: ActionType.REPLACE_ITEM,
      payload: {
        ...item,
        quantity: item.quantity + 1,
        totalPrice: (item.quantity + 1) * item.unitPrice,
      },
    });
  }

  function decreaseItemQuantity(id: number) {
    if (getItemQuantity(id) === 1) {
      removeItem(id);
      return;
    }

    // dispatch({ type: ActionType.DECREASE_ITEM_QUANTITY, payload: id });
    const item = cart.find((item) => item.pizzaId === id);
    if (!item) return;
    dispatch({
      type: ActionType.REPLACE_ITEM,
      payload: {
        ...item,
        quantity: item.quantity - 1,
        totalPrice: (item.quantity - 1) * item.unitPrice,
      },
    });
  }

  function clearCart() {
    dispatch({ type: ActionType.CLEAR_CART });
  }

  function getItemQuantity(id: number) {
    return cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
  }

  function getItemsCount() {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  }

  function getTotalPrice() {
    return cart.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        increaseItemQuantity,
        decreaseItemQuantity,
        clearCart,
        getItemQuantity,
        getTotalPrice,
        getItemsCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

// eslint-disable-next-line
export { CartProvider, useCart };
