import type { ICartItem } from "./types";

const CART_KEY = "cart_items";

export const getCartFromStorage = () => {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(CART_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveCartToStorage = (cart: ICartItem[]) => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};
