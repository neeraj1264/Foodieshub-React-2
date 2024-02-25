import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../ContextApi";
import  './Confirm.css'
const ConfirmOrder = () => {

  const { cartItems, selectedAddress } = useCart();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/address");
  };

  const handlePlaceOrder = () => {
    const whatsappNumber = "+917015823645";

    // Construct the WhatsApp message
    function getRandom4DigitNumber() {
      return Math.floor(1000 + Math.random() * 9000);
    }
    const orderId = getRandom4DigitNumber();
    const productDetails = cartItems
      .map((item) => `${item.quantity}.0 x  ${item.name} = ₹${item.price}`)
      .join("\n");
    const total = calculateTotal();
    const message = `
Order      : *ORD-${orderId}*
Phone     : *${selectedAddress.city}*
Name      : *${selectedAddress.customerName}*
Amount   : *₹${total}*
Address  : *${selectedAddress.streetAddress}*\n
    ----------Items----------\n
${productDetails}
Service Charge: ₹20.00`;

    const whatsappLink =
      "https://api.whatsapp.com/send?phone=" +
      whatsappNumber +
      "&text=" +
      encodeURIComponent(message);

    window.open(whatsappLink, "_blank");
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      20
    );
  };

  return (
    <div className="container">
      <h2 className="text-center mt-4 mb-4">Confirm Order</h2>
      {cartItems.length > 0 ? (
        <>
          <table className="table  mt-2">
            {/* <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Net Price</th>
              </tr>
            </thead> */}
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="img-thumbnail"
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>₹{item.price}</td>
                  <td>x</td>
                  <td>{item.quantity}</td>
                  <td>₹{item.price * item.quantity}</td>
                </tr>
              ))}
              {/* Row for the Service Charge */}
              {cartItems.length > 0 && (
                <tr>
                  <td colSpan="5" style={{ textAlign: "left" }}>
                    Service Charge:
                  </td>
                  <td>₹20</td>
                </tr>
              )}
              {/* Row for the sum of net prices */}
              {cartItems.length > 0 && (
                <tr>
                  <td colSpan="5" style={{ textAlign: "left" }}>
                    Total:
                  </td>
                  <td>₹{calculateTotal()}</td>
                </tr>
              )}
            </tbody>
          </table>
          <div>
            <h4>Selected Address:</h4>
            <p>
              {selectedAddress
                ? `${selectedAddress.customerName}, ${selectedAddress.streetAddress}, ${selectedAddress.city}`
                : "No address selected"}
            </p>
          </div>
          <div className="d-flex justify-content-between mt-4">
            <button className="back-btn" onClick={() => handleBack()}>
              Back
            </button>
            <button
              className="btn btn-success"
              onClick={() => handlePlaceOrder()}
            >
              Place Order
            </button>
          </div>
        </>
      ) : (
        <p className="mt-4">Your cart is empty. Please add items to proceed.</p>
      )}
    </div>
  );
};

export default ConfirmOrder;
