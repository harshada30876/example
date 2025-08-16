import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart.map(item => ({ ...item, quantity: item.quantity || 1 }))); // Initialize quantity if missing
  }, []);

  const removeItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleQuantityChange = (index, quantity) => {
    const updatedCart = cart.map((item, i) => 
      i === index ? { ...item, quantity: parseInt(quantity) } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const calculateTotal = () => {
    if (cart.length === 0) {
      return {
        totalMRP: 0,
        discount: 0,
        platformFee: 0,
        shippingFee: 0,
        finalTotal: 0,
      };
    }
  
    let totalMRP = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    let discount = totalMRP * 0.1; // 10% discount
    let platformFee = 20; // Fixed platform fee
    let shippingFee = totalMRP > 500 ? 0 : 50; // Free shipping if total > 500
  
    return {
      totalMRP,
      discount,
      platformFee,
      shippingFee,
      finalTotal: totalMRP - discount + platformFee + shippingFee,
    };
  };
  

  const { totalMRP, discount, platformFee, shippingFee, finalTotal } = calculateTotal();

  return (
    <div className="container mt-5">
      <h3 className="mb-4">Shopping Cart</h3>
      <div className="row">
        <div className="col-md-8">
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map((item, index) => (
              <div key={index} className="card mb-3 p-3">
                <div className="row g-0 align-items-center">
                  <div className="col-md-3 text-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="img-fluid rounded"
                      style={{ maxWidth: "80px" }}
                    />
                  </div>
                  <div className="col-md-6">
                    <h5>{item.title}</h5>
                    <p className="text-muted">Size: Onesize</p>
                    <p>
                      <strong>₹{(item.price * item.quantity).toFixed(2)}</strong>
                    </p>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => removeItem(index)}
                    >
                      Remove
                    </button>
                  </div>
                  <div className="col-md-3 text-end">
                    <select
                      className="form-select form-select-sm"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(index, e.target.value)}
                    >
                      {[1, 2, 3, 4, 5].map((qty) => (
                        <option key={qty} value={qty}>
                          {qty}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="col-md-4">
          <div className="card p-3">
            <h5>Price Details</h5>
            <hr />
            <p>
              Total MRP: <span className="float-end">₹{totalMRP.toFixed(2)}</span>
            </p>
            <p>
              Discount on MRP: <span className="float-end text-success">-₹{discount.toFixed(2)}</span>
            </p>
            <p>
              Platform Fee: <span className="float-end">₹{platformFee}</span>
            </p>
            <p>
              Shipping Fee:{" "}
              <span className={`float-end ${shippingFee === 0 ? "text-success" : ""}`}>
                {shippingFee === 0 ? "FREE" : `₹${shippingFee}`}
              </span>
            </p>
            <hr />
            <h5>
              Total Amount: <span className="float-end">₹{finalTotal.toFixed(2)}</span>
            </h5>
            <Link to="/checkout" className="btn btn-danger w-100 mt-3">
              Place Order
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
