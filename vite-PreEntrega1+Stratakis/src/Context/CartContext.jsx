import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item, quantity) => {
    // Verificamos si el producto ya está en el carrito
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      // Si el producto ya está en el carrito, actualizamos la cantidad
      setCartItems((prevItems) =>
        prevItems.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + quantity } : cartItem
        )
      );
    } else {
      // Si el producto no está en el carrito, lo agregamos con la cantidad
      setCartItems((prevItems) => [...prevItems, { ...item, quantity }]);
    }
  };

  const getTotalPrice = () => {
    // Calcula la suma total del precio de todos los productos en el carrito
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    return totalPrice.toFixed(2);
  };

  const decrementQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId
          ? { ...item, quantity: item.quantity - 1 } // Decrementa la cantidad en 1
          : item
      )
    );
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };


  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, decrementQuantity, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};
