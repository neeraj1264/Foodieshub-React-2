import React, { useEffect, useState } from "react";
import { useCart } from "../../../ContextApi";

const Cards = ({ name, description, price, image, mrp }) => {
  const { decrementCart, incrementCart } = useCart();

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
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      // Update local storage on quantity change
      localStorage.setItem(`${name}_quantity`, quantity - 1);
    } else {
      // If quantity is 1, block add button and hide increment/decrement buttons
      setShowButtons(false);
      decrementCart();
      // Remove quantity from local storage
      localStorage.removeItem(`${name}_quantity`);
    }
  };

  const handleAddToCart = () => {
    setShowButtons(true);
    incrementCart(quantity);
    // Update local storage on adding to cart
    localStorage.setItem(`${name}_quantity`, quantity);
  };


  return (
    <>
      <hr />
      <div className="product-card">
        <div className="product-details">
          <h3>{name}</h3>
          <p style={{ fontWeight: '700' }}>₹{price}
            <span style={{ textDecoration: 'line-through', marginLeft: '.5rem', color: 'grey' }}>{mrp}</span>
          </p>
          <p>{description}</p>
        </div>
        <div className="add-to-cart">
          <div>
            <img src={image} alt="Product" />
          </div>
          <div className="add-btn">
            {showButtons && (
              <>
                <button variant="contained" className="btn" onClick={handleDecrement}>
                  -
                </button>
                <span style={{ margin: '0 0.5rem' }}>{quantity}</span>
                <button variant="contained" className="btn" onClick={handleIncrement}>
                  +
                </button>
              </>
            )}
            {!showButtons && (
              <button variant="contained" className="btn" onClick={handleAddToCart}>
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
