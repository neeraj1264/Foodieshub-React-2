import React, { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { useCart } from "../../../ContextApi";

const PizzaPage = ({ id, name, description, price, image, mrp, size }) => {
  const { size1, size2, size3 } = size;
  const { priceR, priceM, priceL } = price;

  const {
    decrementCart,
    incrementCart,
    AddToCart,
    showButtons,
    setShowButtons,
  } = useCart();

  const [show, setShow] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(size1);
  const [selectedSizePrice, setSelectedSizePrice] = useState(priceR);
  const productShowButtons = showButtons[id] || false;

  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setSelectedSize("");
    setSelectedSizePrice(priceR);
    setShow(false);
  };

  const handleSizeChange = (event) => {
    const newSize = event.target.value;
    setSelectedSize(newSize);

    // Update the selected size's price based on the chosen size
    switch (newSize) {
      case size1:
        setSelectedSizePrice(priceR);
        break;
      case size2:
        setSelectedSizePrice(priceM);
        break;
      case size3:
        setSelectedSizePrice(priceL);
        break;
      default:
        setSelectedSizePrice(priceR); // Default to priceR if an unknown size is selected
    }
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    if (selectedSize === "") {
      // Handle the case where no size is selected
      console.error("Please select a size.");
      return;
    }
    const product = {
      id,
      name: `${name} [${selectedSize}]`,
      price: selectedSizePrice,
      quantity,
      image,
    };
    AddToCart(product);
    incrementCart();
    setSelectedSize("");
    setSelectedSizePrice(priceR); // Reset the selected size's price to default
    setShow(false);
    setShowButtons((prevShowButtons) => ({ ...prevShowButtons, [id]: true }));
  };
  useEffect(() => {
    // Retrieve quantity from local storage on component mount
    const storedQuantity = localStorage.getItem(`${id}_quantity`);
    if (storedQuantity) {
      setQuantity(parseInt(storedQuantity, 10));
      setShowButtons((prevShowButtons) => ({ ...prevShowButtons, [id]: true }));
    }
  }, [id]);
  return (
    <>
      <hr />
      <div className="product-card">
        <div className="product-details">
          <h3>{name}</h3>
          <p style={{ fontWeight: "700" }}>
            ₹{priceR || price}
            <span
              style={{
                textDecoration: "line-through",
                marginLeft: ".5rem",
                color: "grey",
              }}
            >
              {mrp}
            </span>
            <span
              style={{
                marginLeft: ".5rem",
                color: "var(--bg)",
              }}
            >
              {(((mrp - priceR || price) / mrp) * 100).toFixed(0)}% off
            </span>
          </p>
          <p>{description}</p>
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
              >
                Added
              </button>
            )}
            {!productShowButtons && (
              <button variant="contained" className="btn" onClick={handleShow}>
                ADD
              </button>
            )}
            <Modal
              show={show}
              onHide={handleClose}
              style={{ position: "fixed", bottom: "2px" }}
            >
              <Modal.Header closeButton>
                <Modal.Title>Select Size</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h3 style={{ textAlign: "center" }}>{name}</h3>

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
                      <td>{size1}</td>
                      <td>₹{priceR}</td>
                      <td>
                        <input
                          type="radio"
                          value={size1}
                          checked={selectedSize === size1}
                          onChange={handleSizeChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>{size2}</td>
                      <td>₹{priceM}</td>
                      <td>
                        <input
                          type="radio"
                          value={size2}
                          checked={selectedSize === size2}
                          onChange={handleSizeChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>{size3}</td>
                      <td>₹{priceL}</td>
                      <td>
                        <input
                          type="radio"
                          value={size3}
                          checked={selectedSize === size3}
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
                  <span style={{ paddingLeft: ".3rem" }}>
                    ₹{selectedSizePrice}
                  </span>
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
          <div className="cust">customisable</div>
        </div>
      </div>
    </>
  );
};

export default PizzaPage;
