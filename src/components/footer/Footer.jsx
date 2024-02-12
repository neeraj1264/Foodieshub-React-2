import React from 'react'
import './Footer.css'
import { Link, NavLink } from 'react-router-dom';
import { FaShoppingBasket } from 'react-icons/fa';
import { IoHomeOutline } from "react-icons/io5";
import { TbCategory2 } from "react-icons/tb";
import Badge from 'react-bootstrap/Badge';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useCart } from '../../ContextApi';
function Footer() {
  const { cartItemsCount, addToCart } = useCart();

  return (
    <>
      <footer>
      <div className="footer-content">
        <NavLink to="/" className="nav-link text-white">
          <IoHomeOutline />
          <span className="icon-name">Home</span>
        </NavLink>

        <NavLink to="/cart" className="nav-link text-white">
        <div className="cart">
          <FaShoppingBasket />
          {cartItemsCount > 0 && (
            <Badge bg="danger" className="ms-1 ">
              {cartItemsCount}
            </Badge>
          )}
          </div>
          <span className="icon-name">Cart</span>
        </NavLink>

        <NavLink to="/" className="nav-link text-white">
          <TbCategory2 />
          <span className="icon-name">Category</span>
        </NavLink>
      </div>
    </footer>
    </>
  )
}

export default Footer