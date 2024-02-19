import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [selectedAddress, setSelectedAddress] = useState(null);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
    setCartItems(storedCartItems);
    setCartItemsCount(storedCartItems.length); // Update cart items count
  }, []);

useEffect(()=>{
  const storedCartItemsCount = localStorage.getItem("cartItemsCount");
  if (storedCartItemsCount) {
    setCartItemsCount(parseInt(storedCartItemsCount, 10));
  }
},[])

  const incrementCart = () => {
    if (cartItemsCount >= 0) {
      setCartItemsCount((prevCount) => prevCount + 1);
      localStorage.setItem("cartItemsCount", cartItemsCount + 1);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  };

  const decrementCart = () => {
    if (cartItemsCount > 0) {
      setCartItemsCount((prevCount) => prevCount - 1);
      localStorage.setItem("cartItemsCount", cartItemsCount - 1);

    }
  };

  const AddToCart = (product) => {
    // const updatedProduct = { ...product, quantity: quantity };
    setCartItems((prevItems) => [...prevItems, product]);
    localStorage.setItem("cartItems" , cartItems);
  };
  const updateQuantity = (newQuantity) => {
    setQuantity(newQuantity);
  };
  const updateCartItemQuantity = (productId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
    localStorage.getItem("cartItems" , cartItems);
  };
  
  const value = {
    updateCartItemQuantity,
    cartItemsCount,
    incrementCart,
    decrementCart,
    cartItems,
    setCartItems,
    AddToCart,
    quantity,
    updateQuantity,
    selectedAddress,
    setSelectedAddress,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
