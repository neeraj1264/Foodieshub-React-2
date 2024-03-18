import React, { useEffect, useState } from "react";
import { useCart } from "../../ContextApi";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { FaMinus , FaPlus , FaMinusCircle , FaPlusCircle} from "react-icons/fa";
import "./Cart.css";
import { HashLoader } from "react-spinners";

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
  const [Loading, SetLoading] = useState(true);

  useEffect(()=>{
      setTimeout(() => {
      SetLoading(false)
    }, 500);
  })
  const handleRemoveItem = (productId) => {
    removeCartItem(productId);
  };
//   const calculateSavingForItem = (item) => {
//     let priceToUse;

//     // Check if the item is a pizza with customizable prices
//     if (typeof item.price === 'object' && 'priceR' in item.price) {
//         priceToUse = item.priceR;
//     } else if (typeof item.price === 'object' && 'priceH' in item.price) {
//         priceToUse = item.priceH;
//     } else {
//         priceToUse = item.price;
//     }

//     console.log('item.mrp:', item.mrp);
//     console.log('priceToUse:', priceToUse);
//     console.log('item.quantity:', item.quantity);

//     const saving = (item.mrp - priceToUse) * item.quantity;

//     console.log('saving:', saving);

//     return saving;
// };

// const calculateTotalSaving = () => {
//     return cartItems.reduce((totalSaving, item) => {
//         return totalSaving + calculateSavingForItem(item);
//     }, 0);
// };

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
    let total = calculateTotal();
    if (total < 170) {
      alert("Minimum order amount is ₹150");
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
      <h2 style={{ textAlign: "center" }}>Shopping Cart</h2>
        {Loading ? <HashLoader color="#d32e2e" style={{position: 'absolute', top: '50%', left: '50%'}}/> : (
          <>
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
                        <div style={{ color: "black", fontWeight: "500" , textAlign: 'center' }}>
                          {item.name}
                        </div>
                        {item.addons && item.addons.length > 0 && (
                          <div style={{ color: "grey" }}>
                            Addons:
                            {item.addons.map((addon) => (
                              <div key={addon.name} style={{ color: "grey" }}>
                                {addon.name} - ₹{addon.price}
                              </div>
                            ))}
                          </div>
                        )}
                        {item.cheeses && (
                          <div>
                            {item.cheeses.map((cheese) => (
                              <div key={cheese.name} style={{ color: "grey" }}>
                                {cheese.name} - ₹{cheese.price}
                              </div>
                            ))}
                          </div>
                        )}
                      </td>
                      <td >
                        <div
                         style={{
                           width: "6rem",
                           padding: '0 1rem',
                           display: 'flex',
                           border: 'none',
                           margin: 'auto'
                           }}>
                        <button 
                        onClick={() => dec(index)}
                        style={{
                          background:'whitesmoke',
                          color: 'var(--bg)',
                          borderRadius: '0.8rem 0 0 0.8rem',
                          border: 'none',
                          paddingBottom: '0.3rem',
                          fontSize: '1.2rem'
                        }}
                        ><FaMinusCircle/></button>
                        <span
                         style={{
                          background:'whitesmoke',
                          color: 'var(--bg)',
                          fontSize: '1.2rem',
                          fontWeight: 700,
                           }}>
                            {item.quantity}
                            </span>
                        <button 
                        onClick={() => inc(index)}
                        style={{
                          background:'whitesmoke',
                          color: 'var(--bg)',
                          borderRadius: '0 0.8rem 0.8rem 0',
                          border: 'none',
                          paddingBottom: '0.3rem',
                          fontSize: '1.2rem'
                        }}
                        >
                          <FaPlusCircle/></button>
                        </div>
                      </td>
                      <td style={{textAlign: 'center' ,fontWeight: 500}}>₹{calculateTotalForItem(item)}</td>
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
                                        <td colSpan="4"></td>
                  </tr>
                )}
                {cartItems.length > 0 && (
                  <tr>
                    <td colSpan="3" style={{ textAlign: "left" , fontWeight: 500 }}>
                      Service Charge:
                    </td>
                    <td style={{fontWeight: 500 , textAlign: "center"}}>₹20</td>
                  </tr>
                )}
                {/* Row for the sum of net prices */}
                {cartItems.length > 0 && (
                  <tr>
                    <td colSpan="3" style={{ textAlign: "left" , fontWeight: 500 }}>
                     Net Total:
                    </td>
                    <td style={{fontWeight: 500 ,textAlign: "center" }}>₹{calculateTotal()}</td>
                  </tr>
                )}
                {/* Row for the total saving */}
                {/* {cartItems.length > 0 && (
                  <tr>
                    <td colSpan='1'></td>
                    <td
                      colSpan="2"
                      style={{ textAlign: "center", color: "green" , fontWeight: 800}}
                    >
                      Total Saving: ₹{calculateTotalSaving()}
                    </td>
                    <td  colSpan='1'>
                    </td>
                  </tr>
                )} */}
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
          <ComingSoonModal onClose={() => navigate("/menu")} />
        )}
          </>
        )}
      </div>
    </>
  );
};

const ComingSoonModal = ({ onClose }) => (
  <Modal show={true} backdrop="static" centered>
    <Modal.Body>
      <p>
        Your cart is empty please <br /> Add item in cart{" "}
      </p>
    </Modal.Body>
    <Modal.Footer>
      <Button
        variant="secondary"
        style={{ background: "#d32e2e", border: "none" }}
        onClick={onClose}
      >
        Close
      </Button>
    </Modal.Footer>
  </Modal>
);

export default Cart;
