import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import jsPDF from "jspdf";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [cart, setCart] = useState([]);
  const [addresses, setAddresses] = useState([]);
  const [selectedAddressIndex, setSelectedAddressIndex] = useState(0);
 const navigate = useNavigate()
  useEffect(() => {
    try {
      let storedCart = JSON.parse(localStorage.getItem("cart")) || [];
      storedCart = storedCart.map(item => ({
        ...item,
        price: item.price ?? 100,
        quantity: item.quantity ?? 1
      }));
      localStorage.setItem("cart", JSON.stringify(storedCart));
      setCart(storedCart);

      const storedAddresses = JSON.parse(localStorage.getItem("addresses")) || [];
      setAddresses(storedAddresses);
      if (storedAddresses.length > 0) setSelectedAddressIndex(0);
    } catch (error) {
      console.error("Error loading data:", error);
    }
  }, []);

  const calculateTotal = () => {
    let totalMRP = cart.reduce((sum, item) => sum + ((item.price ?? 0) * (item.quantity ?? 1)), 0);
    let discount = totalMRP * 0.1;
    let shippingFee = totalMRP > 500 ? 0 : 50;
    let finalTotal = totalMRP - discount + shippingFee;
    return { totalMRP, discount, shippingFee, finalTotal };
  };

  const { totalMRP, discount, shippingFee, finalTotal } = calculateTotal();

  const handlePayment = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    if (!window.Razorpay) {
      alert("Razorpay SDK failed to load. Please check your internet connection.");
      return;
    }

    const options = {
      key: "rzp_test_q46tX5GZGrU1G1",
      amount: Math.round(finalTotal * 100),
      currency: "INR",
      name: "Cara Store",
      description: "Order Payment",
      image: "https://yourwebsite.com/logo.png",
      handler: function (response) {
        // alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
       navigate('/')
        generateInvoice(response.razorpay_payment_id);

      },
      prefill: {
        name: addresses[selectedAddressIndex]?.name || "Guest",
        email: "customer@example.com",
        contact: addresses[selectedAddressIndex]?.mobile || "9999999999",
      },
      theme: {
        color: "#ff0000",
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  const generateInvoice = (paymentId) => {
    const doc = new jsPDF();
    let yPos = 20;
  
    // Store Name
    doc.setFont("times");
    doc.setFontSize(16);
    doc.text("Cara Store", 10, yPos);
    doc.setFontSize(12);
    doc.setFont("times");
  
    // Invoice Details
    yPos += 10;
    doc.text(`GST No: 27AACFD7691C1Z`, 10, yPos);
    yPos += 8;
    doc.text(`Invoice No: ${paymentId}`, 10, yPos);
    yPos += 8;
    doc.text(`Order Date: ${new Date().toLocaleString()}`, 10, yPos);
    yPos += 8;
    doc.text(`Order ID: ${paymentId}`, 10, yPos);
    yPos += 8;
    doc.text(`Amount Paid: ₹${parseFloat(finalTotal).toFixed(2)}`, 10, yPos);

  
    // Shipping Details
    yPos += 15;
    doc.setFont("times");
    doc.text("Deliver To:", 10, yPos);
    doc.setFont("times");
    yPos += 8;
    doc.text(`${addresses[selectedAddressIndex]?.name || "Guest"}`, 10, yPos);
    yPos += 8;
    doc.text(`${addresses[selectedAddressIndex]?.address || "N/A"}`, 10, yPos);
    yPos += 8;
    doc.text(`${addresses[selectedAddressIndex]?.city || ""}, ${addresses[selectedAddressIndex]?.state || ""}`, 10, yPos);
    yPos += 8;
    doc.text(`${addresses[selectedAddressIndex]?.pincode || ""}, India`, 10, yPos);
    yPos += 8;
    doc.text(`Mobile: ${addresses[selectedAddressIndex]?.mobile || "9999999999"}`, 10, yPos);
  
    // Order Summary
    yPos += 15;
    doc.setFont("times");
    doc.text("Order Summary:", 10, yPos);
    doc.setFont("times");
    yPos += 10;
  
    cart.forEach((item, index) => {
      doc.text(`Product: ${item.title}, Quantity: ${item.quantity}`, 10, yPos);
      yPos += 8;
    });
  
    // Save PDF
    doc.save("Invoice.pdf");
  };
  

  return (
    <div className="container mt-4">
      <h4>Order Summary</h4>
      <div className="row">
        <div className="col-md-8">
          {cart.length === 0 ? (
            <p className="text-danger">Your cart is empty!</p>
          ) : (
            cart.map((item, index) => (
              <div key={index} className="card mb-3 p-3">
                <div className="row align-items-center">
                  <div className="col-md-2">
                    <img src={item.image} alt={item.title} className="img-fluid rounded" style={{ maxWidth: "80px" }} />
                  </div>
                  <div className="col-md-6">
                    <h5>{item.title}</h5>
                    <p>Size: {item.size || "Onesize"}</p>
                    <p><strong>₹{((item.price ?? 0) * (item.quantity ?? 1)).toFixed(2)}</strong></p>
                  </div>
                  <div className="col-md-4 text-end">
                    <p>Qty: {item.quantity}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="col-md-4">
          <div className="card p-3">
            <h5>Price Details ({cart.length} Items)</h5>
            <p>Total MRP: <span className="float-end">₹{totalMRP.toFixed(2)}</span></p>
            <p>Discount on MRP: <span className="float-end text-success">-₹{discount.toFixed(2)}</span></p>
            <p>Shipping Fee: <span className={shippingFee === 0 ? "text-success" : ""}>{shippingFee === 0 ? "FREE" : `₹${shippingFee}`}</span></p>
            <h5>Total Amount: <span className="float-end">₹{finalTotal.toFixed(2)}</span></h5>
            <button className="btn btn-danger w-100 mt-3" onClick={handlePayment} disabled={cart.length === 0}>
              Pay with Razorpay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
