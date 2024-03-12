import React, { useEffect , useState} from "react";
import { useCart } from "../../ContextApi";
import { useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import "./Cart.css";

const Cart = ({ id }) => {
  let {
    cartItems,
    setCartItems,
    updateCartItemQuantity,
    decrementCart,
    showButtons,
    setShowButtons,
    removeCartItem,
  } = useCart();
  const productShowButtons = showButtons[id] || false;
  const [showModal, setShowModal] = useState(false);

  const handleRemoveItem = (productId) => {
    removeCartItem(productId);
  };

  const calculateTotalForItem = (item) => {
    const basePrice = item.price * item.quantity;

    const addonsPrice = item.addons
      ? item.addons.reduce((sum, addon) => sum + addon.price, 0) * item.quantity
      : 0;

    const cheesesPrice = item.cheeses
      ? item.cheeses.reduce((sum, cheese) => sum + cheese.price, 0) *
        item.quantity
      : 0;

    return basePrice + addonsPrice + cheesesPrice;
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const basePrice = item.price * item.quantity;

      const addonsPrice = item.addons
        ? item.addons.reduce((sum, addon) => sum + addon.price, 0) *
          item.quantity
        : 0;

      const cheesesPrice = item.cheeses
        ? item.cheeses.reduce((sum, cheese) => sum + cheese.price, 0) *
          item.quantity
        : 0;

      return total + basePrice + addonsPrice + cheesesPrice;
    }, 20); // Assuming 20 is the initial total (Service Charge)
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    // Update showButtons state for each item in cartItems to true
    const updatedShowButtons = {};
    cartItems.forEach((item) => {
      updatedShowButtons[item.id] = true;
    });
    setShowButtons(updatedShowButtons);
  }, [cartItems, setShowButtons]);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleNext = () => {
    let total = calculateTotal()
    if(total < 170){
      alert('Minimum order amount is ₹150')
    } else {
    navigate("/address");
    }
  };
  const dec = (index) => {
    const updatedQuantity = cartItems[index].quantity - 1;
    if (updatedQuantity <= 0) {
      const updatedCartItems = [...cartItems];
      updatedCartItems.splice(index, 1);
      // updateCartItemQuantity(cartItems[index].id, 0);
      handleRemoveItem(cartItems[index].id);
      setCartItems(updatedCartItems);
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems)); // Update localStorage
      decrementCart();
      setShowButtons(productShowButtons);
    } else {
      // If the updated quantity is greater than 0, update the quantity
      updateCartItemQuantity(cartItems[index].id, updatedQuantity);
    }

    localStorage.getItem("cartItems", cartItems);
  };

  const inc = (index) => {
    // Assuming index is the index of the item in the cartItems array
    const updatedQuantity = cartItems[index].quantity + 1;
    updateCartItemQuantity(cartItems[index].id, updatedQuantity);
    localStorage.getItem("cartItems", cartItems);
  };

  useEffect(() => {
    // ... (Remaining code for useEffect)
    if (cartItems.length === 0) {
      setShowModal(true);
    }
  }, [cartItems]);
  
  return (
    <>
      <div className="cart-page">
        <h2 style={{ textAlign: "center" }}>Your Cart</h2>
        {cartItems.length > 0 ? (
          <>
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
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
                      <td>
                        <div style={{color: 'black' , fontWeight: '500'}}>
                        {item.name}
                        </div>
                        {item.addons && item.addons.length > 0 && (
                          <div style={{color: 'grey'}}>
                            Addons:
                            {item.addons.map((addon) => (
                              <div key={addon.name} style={{color: 'grey'}}>
                                {addon.name} - ₹{addon.price}
                              </div>
                            ))}
                          </div>
                        )}
                        {item.cheeses && (
                          <div>
                            {item.cheeses.map((cheese) => (
                              <div key={cheese.name} style={{color: 'grey'}}>
                                {cheese.name} - ₹{cheese.price}
                              </div>
                            ))}
                          </div>
                        )}
                      </td>
                      <td>
                        <button onClick={() => dec(index)}>-</button>
                        {item.quantity}
                        <button onClick={() => inc(index)}>+</button>
                      </td>
                      <td>₹{calculateTotalForItem(item)}</td>
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
                    <td colSpan="3" style={{ textAlign: "left" }}>
                      Service Charge:
                    </td>
                    <td>₹20</td>
                  </tr>
                )}
                {/* Row for the sum of net prices */}
                {cartItems.length > 0 && (
                  <tr>
                    <td colSpan="3" style={{ textAlign: "left" }}>
                      Total:
                    </td>
                    <td>₹{calculateTotal()}</td>
                  </tr>
                )}
              </tbody>
            </table>
            <div className="cart-navigation-buttons">
              <button className="back-btn" onClick={() => handleBack()}>
                Back
              </button>
              <button className="next-btn" onClick={() => handleNext()}>
                Next
              </button>
            </div>
          </>
        ) : (
          <ComingSoonModal onClose={() =>navigate("/menu")} />
        )}
      </div>
    </>
  );
};

const ComingSoonModal = ({ onClose }) => (
  <Modal show={true}  backdrop="static"  centered>
  
    <Modal.Body>
      <p>Your cart is empty please <br /> Add item in cart </p>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" style={{ background: '#d32e2e', border: 'none' }} onClick={onClose}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
);


export default Cart;
