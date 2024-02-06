import React, { useState } from "react";
import { useCart } from "../../../ContextApi";

const PastaPage = ({ name, description, price, image, mrp }) => {
  const { decrementCart , addToCart } = useCart();

  const [showButtons, setShowButtons] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    } else {
      // If quantity is 1, block add button and hide increment/decrement buttons
      setShowButtons(false);
      decrementCart();
    }
  };

  const handleAddToCart = () => {
    setShowButtons(true);
    addToCart(quantity);
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

export default PastaPage;
