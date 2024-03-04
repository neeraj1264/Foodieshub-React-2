import React, { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { useCart } from "../../ContextApi";

const CustomCard = ({ id, name, description, price, image, mrp }) => {
  const { priceH, priceF } = price;

  const {
    decrementCart,
    incrementCart,
    AddToCart,
    showButtons,
    setShowButtons,
    setCartItems,
    updateCartItemQuantity,
  } = useCart();

  const [show, setShow] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const productShowButtons = showButtons[id] || false;

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setSelectedSize("");
    setShow(false);
  };

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    } else {
      setShowButtons(false);
      decrementCart();
    }
  };

  const handleAddToCart = () => {
    if (selectedSize === "") {
      // Handle the case where no size is selected
      console.error("Please select a size.");
      return;
    }

    // Determine the selected price based on the chosen size
    let selectedPrice = 0;
    switch (selectedSize) {
      case "Half":
        selectedPrice = priceH;
        break;
      case "Full":
        selectedPrice = priceF;
        break;
      default:
        // Handle the case where an unknown size is selected
        console.error("Unknown size selected.");
        return;
    }
    const product = {
      id,
      name: `${name} [${selectedSize}]`,
      price: selectedPrice,
      quantity,
      image,
    };
    AddToCart(product);
    setShowButtons((prevShowButtons) => ({ ...prevShowButtons, [id]: true }));
    incrementCart();
    setSelectedSize("");
    setShow(false);
  };

  const handleAddBtnToCart = () => {
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

  const handleAddBtnClick = () => {
    // If hasPriceOptions is false, trigger handleAddToCart functionality
    if (!hasPriceOptions) {
      handleAddBtnToCart();
    } else {
      // Otherwise, show the modal
      handleShow();
    }
  };

  const handleRemoveToCart =()=>{
    decrementCart();
     setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
     updateCartItemQuantity(id, 0);
     setShowButtons((prevShowButtons) => ({ ...prevShowButtons, [id]: false }));
     localStorage.removeItem(`${id}_quantity`);
 }

  useEffect(() => {
    // Retrieve quantity from local storage on component mount
    const storedQuantity = localStorage.getItem(`${id}_quantity`);
    if (storedQuantity) {
      setQuantity(parseInt(storedQuantity, 10));
      setShowButtons((prevShowButtons) => ({ ...prevShowButtons, [id]: true }));
    }
  }, [id]);

  const hasPriceOptions =
    typeof price === "object" && "priceH" in price && "priceF" in price;

  return (
    <>
      <hr />
      <div className="product-card">
        <div className="product-details">
          <h3>{name}</h3>
          <p style={{ fontWeight: "700" }}>
            ₹{priceH || price}
            <span
              style={{
                textDecoration: "line-through",
                marginLeft: ".5rem",
                color: "grey",
              }}
            >
              {mrp}
            </span>
            {!hasPriceOptions && (
    <span
      style={{
        marginLeft: ".5rem",
        color: "var(--bg)",
      }}
    >
      {(((mrp - price) / mrp) * 100).toFixed(0)}% off
    </span>
  )}
  {hasPriceOptions && (
    <span
      style={{
        marginLeft: ".5rem",
        color: "var(--bg)",
      }}
    >
      {(((mrp - priceH || price) / mrp) * 100).toFixed(0)}% off
    </span>
  )}
          </p>
          <p
          style={{fontSize: '.8rem'}}
          >{description}</p>
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
                onClick={handleAddBtnClick}
              >
                ADD
              </button>
            )}
            {hasPriceOptions && (
              <Modal
                show={show}
                onHide={handleClose}
                style={{ position: "fixed", bottom: "2px" }}
              >
                <Modal.Header closeButton>
                <img
                  src={image}
                  alt={name}
                  style={{
                    maxWidth: "5rem",
                    height: "4rem",
                    margin: "0 10px 10px 0",
                    borderRadius: '1rem'
                  }}
                />
                  <Modal.Title>{name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <h3 style={{ textAlign: "center" }}>Select Size</h3>

                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Size</th>
                        <th>Price</th>
                        <th>Choose</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Half</td>
                        <td>₹{priceH}</td>
                        <td>
                          <input
                            type="radio"
                            value="Half"
                            checked={selectedSize === "Half"}
                            onChange={handleSizeChange}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Full</td>
                        <td>₹{priceF}</td>
                        <td>
                          <input
                            type="radio"
                            value="Full"
                            checked={selectedSize === "Full"}
                            onChange={handleSizeChange}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    variant="contained"
                    className="btn"
                    onClick={handleDecrement}
                  >
                    -
                  </Button>
                  <span style={{ margin: "0 0.5rem" }}>{quantity}</span>
                  <Button
                    variant="contained"
                    className="btn"
                    onClick={handleIncrement}
                  >
                    +
                  </Button>
                  <Button variant="primary" onClick={handleAddToCart}>
                    Add to Cart
                  </Button>
                </Modal.Footer>
              </Modal>
            )}
          </div>
          {hasPriceOptions && <div className="cust">customisable</div>}
        </div>
      </div>
    </>
  );
};

export default CustomCard;
