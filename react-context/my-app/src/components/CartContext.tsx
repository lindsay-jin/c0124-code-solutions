import { createContext } from 'react';
import { Product } from '../lib';

export type CartProduct = {
  item: Product;
  quantity: number;
};

export type CartValues = {
  cart: CartProduct[];
  addToCart: (item: Product) => void;
};

export const CartContext = createContext<CartValues>({
  cart: [],
  addToCart: () => undefined,
});
