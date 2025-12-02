import { createContext, useState } from "react";

export const CartContext = createContext({
  items: [],
  add: () => {},
  remove: () => {},
  update: () => {},
});

export default function CartContextProvider({children}) {

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === productId ? { ...item, quantity } : item))
    );
  };

  const value = {
    items: cart,
    add: addToCart,
    remove: removeFromCart,
    update: updateQuantity,
  };

  return <CartContext value={value}>{children}</CartContext>;
}
