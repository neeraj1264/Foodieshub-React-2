import React, { useEffect } from "react";
import { useCart } from "../../ContextApi";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  let { cartItems , setCartItems , updateCartItemQuantity , decrementCart } = useCart();

  // Function to calculate the sum of net prices
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 20);
  };
  
useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);


  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/layout2");
  };

  const handleNext = () => {
    navigate("/address");
  };
  const dec = (index) => {
    // Assuming index is the index of the item in the cartItems array
    const updatedQuantity = cartItems[index].quantity - 1;
    if (updatedQuantity <= 0) {
      // If the updated quantity is less than or equal to 0, remove the item
      const updatedCartItems = [...cartItems];
      updatedCartItems.splice(index, 1);
      updateCartItemQuantity(cartItems[index].id, 0); // Update quantity in context
      setCartItems(updatedCartItems); // Update cartItems in context
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems)); // Update localStorage
      decrementCart();
    } else {
      // If the updated quantity is greater than 0, update the quantity
      updateCartItemQuantity(cartItems[index].id, updatedQuantity);
    }
    localStorage.getItem("cartItems" , cartItems);
  };

  const inc = (index) => {
    // Assuming index is the index of the item in the cartItems array
    const updatedQuantity = cartItems[index].quantity + 1;
    updateCartItemQuantity(cartItems[index].id, updatedQuantity);
    localStorage.getItem("cartItems" , cartItems);
  };
  return (
    <>
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
            <div className="cart-navigation-buttons">
              <button className="back-btn" onClick={() => handleBack()}>Back</button>
              <button className="next-btn" onClick={() => handleNext()}>Next</button>
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default Cart;
