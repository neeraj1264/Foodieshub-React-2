import React, { useEffect } from "react";
import { useCart } from "../../ContextApi";
import "./Cart.css";

const Cart = () => {
  let { cartItems , updateCartItemQuantity } = useCart();

  // Function to calculate the sum of net prices
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 20);
  };

  const dec = (index) => {
    // Assuming index is the index of the item in the cartItems array
    const updatedQuantity = cartItems[index].quantity - 1;
    updateCartItemQuantity(cartItems[index].name, updatedQuantity);
    localStorage.getItem("cartItems" , cartItems);
  };

  const inc = (index) => {
    // Assuming index is the index of the item in the cartItems array
    const updatedQuantity = cartItems[index].quantity + 1;
    updateCartItemQuantity(cartItems[index].name, updatedQuantity);
    localStorage.getItem("cartItems" , cartItems);
  };
  return (
    <>
      <hr style={{ marginTop: "5rem" }} />
      <div className="cart-page">
        <h2 style={{ textAlign: "center" }}>Your Cart</h2>
        {cartItems ? (
          <>
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Net Price</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.length > 0 ? (
                  cartItems.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <img src={item.image} alt={item.name} />
                      </td>
                      <td>{item.name}</td>
                      <td>₹{item.price}</td>
                      <td>
                        <button onClick={() => dec(index)}>-</button>
                        {item.quantity}
                        <button onClick={() => inc(index)}>+</button>
                      </td>
                      <td>{item.price * item.quantity}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5">Your cart is empty</td>
                  </tr>
                )}

                {/* Row for the Service Charge */}
                {cartItems.length > 0 && (
                  <tr>
                    <td colSpan="4" style={{ textAlign: "left" }}>
                      Service Charge:
                    </td>
                    <td>₹20</td>
                  </tr>
                )}
                {/* Row for the sum of net prices */}
                {cartItems.length > 0 && (
                  <tr>
                    <td colSpan="4" style={{ textAlign: "left" }}>
                      Total:
                    </td>
                    <td>₹{calculateTotal()}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default Cart;
