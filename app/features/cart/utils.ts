import { getCartKey } from "~/utils";
import type { ICartItem } from "./types";

const CART_KEY = getCartKey();

export const getCartFromStorage = () => {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(CART_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveCartToStorage = (cart: ICartItem[]) => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};
