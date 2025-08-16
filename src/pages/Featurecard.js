import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Featurecard.css";

const baseURL = "https://fakestoreapi.com/products"; // Corrected API URL

const Featurecard = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(baseURL)
      .then((response) => {
        console.log("API Response:", response.data);
        setProducts(response.data); // API returns product objects
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  if (!products.length) return <p>Loading...</p>;

  return (
    <div className="feature-section">
      <h2 className="feature-title">Trending Products</h2> 
      <div className="features-container row">
        {products.map((product) => (
          <div key={product.id} className="feature-card col-md-4 card" style={{ width: "18rem", height: "28rem", margin: "10px" }}>
            <img 
              src={product.image} // Corrected image key
              alt={product.title} 
              className="card-img-top"
              style={{ height: "200px", objectFit: "contain" }} // Fixed image size
            />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.description.substring(0, 50)}...</p> {/* Limit description */}
              <p className="card-price"><strong>Price: ${product.price}</strong></p>
              <button 
                className="btn btn-primary"
                onClick={() => navigate(`/productdetails/${product.id}`)}
              >
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featurecard;
