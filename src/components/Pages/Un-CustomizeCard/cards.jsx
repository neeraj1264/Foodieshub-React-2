import React, { useEffect, useState } from "react";
import { useCart } from "../../../ContextApi";
import { FaPlus , FaMinus } from "react-icons/fa6";

const Cards = ({ name, description, price, image, mrp }) => {
  const {
    decrementCart,
    incrementCart,
    AddToCart,
    // quantity,
    // updateQuantity,
    cartItems,
    setCartItems,
    updateCartItemQuantity
    } = useCart();

  const [showButtons, setShowButtons] = useState(false);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Retrieve quantity from local storage on component mount
    const storedQuantity = localStorage.getItem(`${name}_quantity`);
    if (storedQuantity) {
      setQuantity(parseInt(storedQuantity, 10));
      setShowButtons(true);
    }
  }, [name]);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    // Update local storage on quantity change
    localStorage.setItem(`${name}_quantity`, quantity + 1);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    updateCartItemQuantity(name, quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      // Update local storage on quantity change
      localStorage.setItem(`${name}_quantity`, quantity - 1);
      updateCartItemQuantity(name, quantity - 1);
    } else {
      // If quantity is 1, block add button and hide increment/decrement buttons
      setShowButtons(false);
      decrementCart();
      setCartItems((prevItems) => prevItems.filter(item => item.name !== name));
      localStorage.removeItem(`${name}_quantity`);
      updateCartItemQuantity(name, 0);
    }
  };

  const handleAddToCart = () => {
    const product = {
      name,
      price,
      quantity,
      image,
    };
    AddToCart(product);
    setShowButtons(true);
    incrementCart();
    setQuantity(quantity);
    localStorage.setItem(`${name}_quantity`, quantity); // Update local storage after adding to cart
  };

  return (
    <>
      <hr className="hr"/>
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
          </p>
          <p className="description">{description}</p>
        </div>
        <div className="add-to-cart">
          <div>
            <img src={image} alt="Product" />
          </div>
          <div>
            {showButtons && (
              <>
              <div className="quantity-update">
                <button
                  variant="contained"
                  className="btn"
                  onClick={handleDecrement}
                  style={{color: 'white'}}
                >
                  <FaMinus />
                </button>
                <span style={{ margin: "0 0.5rem" }}>{quantity}</span>
                <button
                  variant="contained"
                  className="btn"
                  onClick={handleIncrement}
                  style={{color: 'white'}}
                >
                  <FaPlus />
                </button>
                </div>
              </>
            )}
            {!showButtons && (
              <button
                variant="contained"
                className="add-btn"
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
