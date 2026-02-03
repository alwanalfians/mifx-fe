export const getAppName = () => {
  return import.meta.env.VITE_APP_NAME || "iSneakers";
};

export const getCartKey = () => {
  return import.meta.env.VITE_CART_KEY || "cart_items";
};
