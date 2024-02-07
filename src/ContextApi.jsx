import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Retrieve cartItemsCount from local storage on component mount
    const storedCartItemsCount = localStorage.getItem('cartItemsCount');
    if (storedCartItemsCount) {
      setCartItemsCount(parseInt(storedCartItemsCount, 10));
    }
  }, []);

  const incrementCart = () => {
    if (cartItemsCount >= 0) {
      setCartItemsCount((prevCount) => prevCount + 1);
      localStorage.setItem('cartItemsCount', cartItemsCount + 1);
    }
  };

  const decrementCart = () => {
    if (cartItemsCount > 0) {
      setCartItemsCount((prevCount) => prevCount - 1);
      localStorage.setItem('cartItemsCount', cartItemsCount - 1);
    }
  };

  const AddToCart = (product) => {
    const updatedProduct = { ...product, quantity: quantity };
    setCartItems((prevItems) => [...prevItems, updatedProduct]);
    setShowButtons(true);
    incrementCart(quantity);
  };

  
  const updateCartItemQuantity = (productId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.productId === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const value = {
    cartItemsCount,
    incrementCart,
    decrementCart,
    cartItems,
    AddToCart,
    updateCartItemQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
