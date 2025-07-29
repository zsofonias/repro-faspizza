import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { ICartItem } from '../../types/order';

interface IState {
  cart: ICartItem[];
}

const initialState: IState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<ICartItem>) {
      state.cart.push(action.payload);
    },
    removeItem(state, action: PayloadAction<number>) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action: PayloadAction<number>) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      if (item) {
        item.quantity++;
        item.totalPrice = item.quantity * item.unitPrice;
      }
    },
    decreaseItemQuantity(state, action: PayloadAction<number>) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      if (item) {
        item.quantity--;
        item.totalPrice = item.quantity * item.unitPrice;

        if (item.quantity === 0) {
          cartSlice.caseReducers.removeItem(state, action);
        }
      }
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

// Action creator
export const {
  addItem,
  removeItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

// type CartState = ReturnType<typeof cartSlice.reducer>;

//State Getter
export const getCart = ({ cart }: { cart: IState }) => {
  return cart.cart;
};

export const getCartItemsCount = ({ cart }: { cart: IState }) => {
  return cart.cart.reduce((count, item) => count + item.quantity, 0);
};

export const getTotalCartPrice = ({ cart }: { cart: IState }) => {
  return cart.cart.reduce((total, item) => total + item.totalPrice, 0);
};

export const getCartItemQuantityById =
  (id: number) =>
  ({ cart }: { cart: IState }) => {
    const item = cart.cart.find((item) => item.pizzaId === id);
    return item?.quantity || 0;
  };
