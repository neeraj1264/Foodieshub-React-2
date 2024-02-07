
import React from 'react';

function QuantityButton({ handleIncrement, handleDecrement, quantity, productId }) {
  return (
    <div>
      <button variant="contained" className="btn" onClick={handleDecrement}>
        -
      </button>
      <span style={{ margin: '0 0.5rem' }}>{quantity}</span>
      <button variant="contained" className="btn" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
}

export default QuantityButton;
