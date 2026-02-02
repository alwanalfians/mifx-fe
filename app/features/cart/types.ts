export interface ICartItem {
  id: string;
  qty: number;
}

export interface ICartContext {
  cartItems: ICartItem[];
  cartCount: number;
  addToCart: (id: string) => void;
  removeFromCart: (id: string) => void;
}
