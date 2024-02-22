import React, { useEffect, useState } from "react";
import { Button, Modal, Table } from 'react-bootstrap';
import { useCart } from "../../../ContextApi";

const PizzaPage = ({id , name, description, price, image, mrp }) => {
  const { priceR, priceM, priceL } = price;

  const { decrementCart , incrementCart , AddToCart , showButtons, setShowButtons} = useCart();

  const [show, setShow] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  const productShowButtons = showButtons[id] || false;

  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setSelectedSize('');
    setShow(false);
  };

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  // const handleAddToCart = () => {
  //   // Implement your logic to add the item to the cart with the selected size
  //   handleClose();
  // };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    } 
  };

  const handleAddToCart = () => {
    // if (selectedSize === '') {
    //   // Handle the case where no size is selected
    //   console.error('Please select a size.');
    //   return;
    // }
  
    // Determine the selected price based on the chosen size
    let selectedPrice = 0;
    switch (selectedSize) {
      case 'Regular':
        selectedPrice = priceR;
        break;
      case 'Medium':
        selectedPrice = priceM;
        break;
      case 'Large':
        selectedPrice = priceL;
        break;
      default:
        // Handle the case where an unknown size is selected
        console.error('Unknown size selected.');
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
    incrementCart();
    setSelectedSize('');
    setShow(false);
    setShowButtons(prevShowButtons => ({ ...prevShowButtons, [id]: true }));
  };
  useEffect(() => {
    // Retrieve quantity from local storage on component mount
    const storedQuantity = localStorage.getItem(`${id}_quantity`);
    if (storedQuantity) {
      setQuantity(parseInt(storedQuantity, 10));
      setShowButtons(prevShowButtons => ({ ...prevShowButtons, [id]: true }));
    }
  }, [id]);
  return (
    <>
      <hr />
      <div className="product-card">
        <div className="product-details">
          <h3>{name}</h3>
          <p style={{ fontWeight: '700' }}>₹{priceR || price}
            <span style={{ textDecoration: 'line-through', marginLeft: '.5rem', color: 'grey' }}>{mrp}</span>
          </p>
          <p>{description}</p>
        </div>
        <div className="add-to-cart">
          <div>
            <img src={image} alt="Product" />
          </div>
          <div className="add-btn">
          {productShowButtons && (
            <button variant="contained" style={{
              color: 'whitesmoke' ,
              border: 'none' ,
              background: 'red' ,
              borderRadius: '.5rem' ,
            }}>Added</button>
            )}
            {!productShowButtons && (
              <button variant="contained" className="btn" onClick={handleShow}>
                ADD
              </button>
            )}
            <Modal show={show} onHide={handleClose} style={{ position: 'fixed', bottom: '2px' }}>
              <Modal.Header closeButton>
                <Modal.Title>Select Size</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <h3 style={{textAlign: 'center'}}>{name}</h3>

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
                      <td>Regular</td>
                      <td>₹{priceR}</td>
                      <td>
                        <input
                          type="radio"
                          value="Regular"
                          checked={selectedSize === 'Regular'}
                          onChange={handleSizeChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Medium</td>
                      <td>₹{priceM}</td>
                      <td>
                        <input
                          type="radio"
                          value="Medium"
                          checked={selectedSize === 'Medium'}
                          onChange={handleSizeChange}
                        />
                      </td>
                    </tr>
                    <tr>
                    <td>Large</td>
                    <td>₹{priceL}</td>
                      <td>
                        <input
                          type="radio"
                          value="Large"
                          checked={selectedSize === 'Large'}
                          onChange={handleSizeChange}
                        />
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Modal.Body>
              <Modal.Footer>
              <Button variant="contained" className="btn" onClick={handleDecrement}>
                  -
                </Button>
                <span style={{ margin: '0 0.5rem' }}>{quantity}</span>
                <Button variant="contained" className="btn" onClick={handleIncrement}>
                  +
                </Button>
                <Button variant="primary" onClick={handleAddToCart}>
                  Add to Cart
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
};

export default PizzaPage;
