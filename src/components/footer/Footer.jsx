import React, { useState } from 'react'
import './Footer.css'
import { Link, NavLink } from 'react-router-dom';
import { FaShoppingBasket } from 'react-icons/fa';
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
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
        <NavLink to="/" className="nav-link text-white i">
          <div>
          <IoHomeOutline  className="icon"/>
          </div>
          <span className="icon-name">Home</span>
        </NavLink>

        <NavLink to="/menu" className="nav-link text-white i">
          <div>
        <MdRestaurantMenu  className="icon"/>
        </div>
          <span className="icon-name">Menu</span>
        </NavLink>

        <NavLink to="/cart" className="nav-link text-white i">
        <div className="cart">
          <FaShoppingBasket  className="icon"/>
          {cartItemsCount > 0 && (
            <Badge bg="success" className="ms-1 ">
              {cartItemsCount}
            </Badge>
          )}
          </div>
          <span className="icon-name">Cart</span>
        </NavLink>
        
        <NavLink to="/" className="grocery" onClick={handleGroceryClick}>
            <span className="icon-name">Grocery </span>
            <MdOutlineLocalGroceryStore className="icon" />
            <span className='i'> Soon</span>
          </NavLink>
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
  )
}

export default Footer