import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo & Contact */}
        <div className="footer-section">
          <h2 className="logo">Cara</h2>
          <p><strong>Address:</strong> 562 Wellington Road, Street 32, San Francisco</p>
          <p><strong>Phone:</strong> +01 2222 365 / (+91) 01 2345 6789</p>
          <p><strong>Hours:</strong> 10:00 - 18:00, Mon - Sat</p>
         
        </div>

        {/* About */}
        <div className="footer-section">
          <h3>About</h3>
          <p>About Us</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>Contact Us</p>
        </div>

        {/* My Account */}
        <div className="footer-section">
          <h3>My Account</h3>
          <p>Sign In</p>
          <p>View Cart</p>
          <p>Track My Order</p>
          <p>Help</p>
        </div>

        {/* Install App */}
        <div className="footer-section">
          <h3>Install App</h3>
         
          <p>Secured Payment Gateways</p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
