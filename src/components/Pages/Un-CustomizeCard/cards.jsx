import React, { useEffect, useState } from "react";
import { useCart } from "../../../ContextApi";

const Cards = ({ id, name, description, price, image, mrp }) => {
  const {
    decrementCart,
    incrementCart,
    AddToCart,
    showButtons,
    setShowButtons,
    cartItems,
    setCartItems,
    updateCartItemQuantity,
  } = useCart();

  const productInCart = cartItems.find((item) => item.id === id);
  const productShowButtons = showButtons[id] || false;
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Retrieve quantity from local storage on component mount
    const storedQuantity = localStorage.getItem(`${id}_quantity`);
    if (storedQuantity) {
      setQuantity(parseInt(storedQuantity, 10));
      setShowButtons((prevShowButtons) => ({ ...prevShowButtons, [id]: true }));
    }
  }, [id]);

  // const handleIncrement = () => {
  //   setQuantity((prevQuantity) => {
  //     const newQuantity = prevQuantity + 1;
  //     console.log(`Incrementing quantity for ${id} to ${newQuantity}`);
  //     localStorage.setItem(`${id}_quantity`, newQuantity);
  //     updateCartItemQuantity(id, newQuantity);
  //     return newQuantity;
  //   });
  // };

  // const handleDecrement = () => {
  //   if (quantity > 1) {
  //     setQuantity((prevQuantity) => {
  //       const newQuantity = prevQuantity - 1;
  //       console.log(`Decrementing quantity for ${id} to ${newQuantity}`);
  //       localStorage.setItem(`${id}_quantity`, newQuantity);
  //       updateCartItemQuantity(id, newQuantity);
  //       return newQuantity;
  //     });
  //   } else {
  //     setShowButtons((prevShowButtons) => ({ ...prevShowButtons, [id]: false }));
  //     decrementCart();
  //     setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));

  //     updateCartItemQuantity(id, 0);
  //     localStorage.removeItem(`${id}_quantity`); // Remove the quantity from local storage
  //     console.log(`Removing quantity for ${id}`);
  //   }
  // };

  const handleAddToCart = () => {
    const product = {
      id,
      name,
      price,
      quantity,
      image,
    };
    AddToCart(product);
    setShowButtons((prevShowButtons) => ({ ...prevShowButtons, [id]: true }));
    incrementCart();
    setQuantity(quantity);
  };

  const handleRemoveToCart =()=>{
     decrementCart();
      setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
      updateCartItemQuantity(id, 0);
      setShowButtons((prevShowButtons) => ({ ...prevShowButtons, [id]: false }));
      localStorage.removeItem(`${id}_quantity`);
  }
  return (
    <>
      <hr className="hr" />
      <div className="product-card">
        <div className="product-details">
          <h5>{name}</h5>
          <p style={{ fontWeight: "700", marginBottom: ".5rem" }}>
            ₹{price}
            <span
              style={{
                textDecoration: "line-through",
                marginLeft: ".5rem",
                color: "grey",
              }}
            >
              {mrp}
            </span>
            <span
              style={{
                marginLeft: ".5rem",
                color: "var(--bg)",
              }}
            >
              {(((mrp - price) / mrp) * 100).toFixed(0)}% off
            </span>
          </p>
          <p className="description">{description}</p>
        </div>
        <div className="add-to-cart">
          <div>
            <img src={image} alt="Product" />
          </div>
          <div className="add-btn">
            {productShowButtons && (
              <button
                variant="contained"
                style={{
                  color: "whitesmoke",
                  border: "none",
                  background: "#d32e2e",
                  borderRadius: ".5rem",
                }}
                onClick={handleRemoveToCart}
              >
                Added
              </button>
            )}
            {!productShowButtons && (
              <button
                variant="contained"
                className="btn"
                onClick={handleAddToCart}
              >
                ADD
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
