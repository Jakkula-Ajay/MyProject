import React, { createContext, useState } from "react";
export const CartContext = createContext();
const CartProvider = ({ children }) => {
    const [cart,setCart] = useState([]);
    const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };
  const increaseQty = (id) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };
  const decreaseQty = (id) => {
    setCart(prevCart =>
      prevCart
        .map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };
  const clearCart = () => {
    setCart([]);
  };
    return(
        <CartContext.Provider value={{ cart, addToCart, increaseQty, decreaseQty, clearCart }}>
            {children}
            </CartContext.Provider>
    );
};
export default CartProvider;