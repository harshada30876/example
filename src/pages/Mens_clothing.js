import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const baseURL = "https://fakestoreapi.com/products/category/men's clothing";

const MensClothing = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(baseURL)
            .then((response) => {
                console.log("Men's Clothing Response:", response.data); 
                setProducts(response.data);
            })
            .catch((error) => console.error("Error fetching products:", error));
    }, []);

    return (
      <div className="container mt-5">
          <h1 className="text-center mb-4">Men's Clothing Collection</h1>
          <div className="row">
              {products.map((product) => (
                  <div key={product.id} className="col-md-4 mb-4">
                      <div className="card h-100 shadow-sm">
                          <img src={product.image} className="card-img-top p-3" alt={product.title} style={{ height: "250px", objectFit: "contain" }} />
                          <div className="card-body text-center">
                              <h5 className="card-title">{product.title}</h5>
                              <p className="card-text fw-bold text-success">${product.price}</p>
                              <button 
                                  className="btn btn-primary"
                                  onClick={() => navigate(`/productdetails/${product.id}`)} // ✅ Fixed navigation path
                              >
                                  View Details
                              </button>
                          </div>
                      </div>
                  </div>
              ))}
          </div>
      </div>
  );
}

export default MensClothing;
