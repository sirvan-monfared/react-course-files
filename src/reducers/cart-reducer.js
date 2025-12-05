export default function cartReducer(prevCart, action) {
  if (action.type === "ADD_TO_CART") {
    const existingItem = prevCart.find((item) => item.id === action.payload.product.id);
    if (existingItem) {
      return prevCart.map((item) =>
        item.id === action.payload.product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    }
    return [...prevCart, { ...action.payload.product, quantity: 1 }];
  }

  if (action.type === "REMOVE") {
    return prevCart.filter((item) => item.id !== action.payload.productId);
  }

  if (action.type === "UPDATE") {
    if (action.payload.quantity <= 0) {
      return prevCart.filter((item) => item.id !== action.payload.productId);
    }

    return prevCart.map((item) =>
      item.id === action.payload.productId ? { ...item, quantity: action.payload.quantity } : item
    );
  }

  return prevCart;
}