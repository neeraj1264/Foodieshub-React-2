import React from 'react'
import './Footer.css'
import { Link, NavLink } from 'react-router-dom';
import { FaShoppingBasket } from 'react-icons/fa';
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { MdRestaurantMenu } from "react-icons/md";
import Badge from 'react-bootstrap/Badge';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useCart } from '../../ContextApi';
function Footer() {
  const { cartItemsCount, addToCart } = useCart();

  return (
    <>
      <footer>
      <div className="footer-content">
        <NavLink to="/" className="nav-link text-white i">
          <IoHomeOutline />
          <span className="icon-name">Home</span>
        </NavLink>

        <NavLink to="/layout2" className="nav-link text-white i">
        <MdRestaurantMenu />
          <span className="icon-name">Menu</span>
        </NavLink>

        <NavLink to="/cart" className="nav-link text-white i">
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
        
        <NavLink to="/burger" className=" grocery">
        <span className="icon-name ">Grocery </span>
        <MdOutlineLocalGroceryStore />
        <span className='i'> Soon</span>
        </NavLink>
      </div>
    </footer>
    </>
  )
}

export default Footer