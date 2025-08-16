import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";  // If you have CSS for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Cara</h1>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      
      </ul>
    </nav>
  );
};

export default Navbar;
