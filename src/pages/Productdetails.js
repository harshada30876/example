import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Productdetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setLoading(false);
      });
  }, [id]);

  const handleAddToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    alert(`"${product.title}" has been added to the cart.`);
    navigate("/cart");
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="text-center">
          <div className="spinner-border text-primary" role="status"></div>
          <p className="mt-2">Loading product details...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return <p className="text-center mt-5">Product not found.</p>;
  }

  return (
    <div className="container mt-5">
      <div className="row d-flex align-items-center">
        {/* Left Side - Image */}
        <div className="col-md-6 text-center">
          <img 
            src={product.images?.[0]} 
            alt={product.title} 
            className="img-fluid rounded mb-4" 
            style={{ maxWidth: "60%", height: "auto" }} 
          />
        </div>

        {/* Right Side - Product Details */}
        <div className="col-md-6">
          <h1 className="mb-3">{product.title}</h1>
          <p><strong>Price:</strong> <span className="text-success">${product.price?.toFixed(2)}</span></p>
          
          {/* ✅ Fix category issue */}
          <p><strong>Category:</strong> 
            <span className="badge bg-primary ms-2">
              {product.category?.name} {/* ✅ Safe rendering */}
            </span>
          </p>

          <p>{product.description}</p>

          {/* Add to Cart Button */}
          <button className="btn btn-success mt-3" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Productdetails;
