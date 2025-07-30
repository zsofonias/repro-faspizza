import type { ICartItem } from '../types/order';

export interface ICartContext {
  cart: ICartItem[];
  addItem: (item: ICartItem) => void;
  removeItem: (id: number) => void;
  increaseItemQuantity: (id: number) => void;
  decreaseItemQuantity: (id: number) => void;
  clearCart: () => void;
  getItemQuantity: (id: number) => number;
  getTotalPrice: () => number;
  getItemsCount: () => number;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export enum ActionType {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  REPLACE_ITEM = 'REPLACE_ITEM',
  INCREASE_ITEM_QUANTITY = 'INCREASE_ITEM_QUANTITY',
  DECREASE_ITEM_QUANTITY = 'DECREASE_ITEM_QUANTITY',
  CLEAR_CART = 'CLEAR_CART',
}

export type Action =
  | {
      type: ActionType.ADD_ITEM;
      payload: ICartItem;
    }
  | {
      type: ActionType.REMOVE_ITEM;
      payload: number;
    }
  | {
      type: ActionType.REPLACE_ITEM;
      payload: ICartItem;
    }
  | {
      type: ActionType.INCREASE_ITEM_QUANTITY;
      payload: number;
    }
  | {
      type: ActionType.DECREASE_ITEM_QUANTITY;
      payload: number;
    }
  | {
      type: ActionType.CLEAR_CART;
    };
