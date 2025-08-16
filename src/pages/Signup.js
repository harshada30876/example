import React, { useState } from "react";
import "./Signup.css"; // Import the CSS file

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Data:", formData);
    alert("Signup Successful! 🎉");
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">Sign Up</h2>
      <p className="signup-description">Create a free account with your email.</p>
      
      <form className="signup-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          className="signup-input"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="signup-input"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="signup-input"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit" className="signup-button">Sign Up</button>
      </form>

      <p className="login-text">
        Have an account? <a href="#" className="login-link">Log in</a>
      </p>
    </div>
  );
};

export default Signup;
