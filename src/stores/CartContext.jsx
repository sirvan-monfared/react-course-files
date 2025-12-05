import { createContext, useState, useReducer } from "react";
import cartReducer from '../reducers/cart-reducer';

export const CartContext = createContext({
  items: [],
  add: () => {},
  remove: () => {},
  update: () => {},
});

export default function CartContextProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const addToCart = (product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        product,
      },
    });
  };

  const removeFromCart = (productId) => {
    dispatch({
      type: "REMOVE",
      payload: {
        productId,
      },
    });
  };

  const updateQuantity = (productId, quantity) => {
    dispatch({
      type: "UPDATE",
      payload: {
        productId,
        quantity,
      },
    });
  };

  const value = {
    items: cart,
    add: addToCart,
    remove: removeFromCart,
    update: updateQuantity,
  };

  return <CartContext value={value}>{children}</CartContext>;
}
