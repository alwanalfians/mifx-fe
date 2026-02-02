import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { ICartContext, ICartItem } from "../types";
import { getCartFromStorage, saveCartToStorage } from "../utils";

const CartContext = createContext<ICartContext | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<ICartItem[]>(getCartFromStorage);

  const addToCart = (id: string) => {
    setCartItems((prev) => {
      const exist = prev.find((item) => item.id === id);

      if (exist) {
        return prev.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item,
        );
      }

      return [...prev, { id, qty: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const cartCount = useMemo(() => cartItems.length, [cartItems]);

  useEffect(() => {
    saveCartToStorage(cartItems);
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return ctx;
};
