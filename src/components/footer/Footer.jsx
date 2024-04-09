import React, { useState } from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';
// import { FaShoppingBasket } from 'react-icons/fa';
import { FaCartPlus } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
// import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { GiSlicedBread } from "react-icons/gi";
import { MdRestaurantMenu } from "react-icons/md";
import Badge from 'react-bootstrap/Badge';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useCart } from '../../ContextApi';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function Footer() {
  const { cartItemsCount } = useCart();
  const [showModal, setShowModal] = useState(false);

  const handleGroceryClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <footer>
        <div className="footer-content">
          <NavLink to="/" className="nav-link i" activeclassname="active">
            <IoHomeOutline className="icon" />
            <span className="icon-name">Home</span>
          </NavLink>

          <NavLink to="/menu" className="nav-link i" activeclassname="active">
            <MdRestaurantMenu className="icon" />
            <span className="icon-name">Menu</span>
          </NavLink>

          <NavLink to="/cart" className="nav-link pad i" activeclassname="active">
            <div className="cart">
              <FaCartPlus className="icon" />
              {cartItemsCount > 0 && (
                <Badge bg="success" style={{fontSize:".7rem"}} className="ms-1">
                  {cartItemsCount}
                </Badge>
              )}
            </div>
            <span className="icon-name">Cart</span>
          </NavLink>

          <div className="" onClick={handleGroceryClick}>
            <GiSlicedBread className="G-icon" />
            <div className="G-name">Grocery </div>
            {/* <span className='i'> Soon</span> */}
          </div>
        </div>
      </footer>

      {/* Modal for Grocery */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Coming Soon</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Grocery Item Coming Soon. Stay tuned!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" style={{background: '#d32e2e', border: 'none'}} onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Footer;
