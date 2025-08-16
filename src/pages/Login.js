import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../pages/Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value.trim() });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); // Reset error state

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      setError("No account found. Please sign up first.");
      return;
    }

    if (storedUser.email.toLowerCase() !== user.email.toLowerCase()) {
      setError("Email not registered.");
      return;
    }

    if (storedUser.password !== user.password) {
      setError("Incorrect password.");
      return;
    }

    // Successful login
    localStorage.setItem("auth", "true");
    navigate("/");
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      {error && <p className="error-text">{error}</p>}
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="login-input"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="login-input"
          onChange={handleChange}
          required
        />
        <button type="submit" className="login-button">Login</button>
      </form>
      <p className="signup-text">
        Don't have an account?{" "}
        <span onClick={() => navigate("/signup")} className="signup-link">Sign Up</span>
      </p>
    </div>
  );
};

export default Login;
