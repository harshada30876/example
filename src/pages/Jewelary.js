import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const baseURL = "https://fakestoreapi.com/products/category/jewelery";

const Jewelery = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(baseURL)
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => console.error("Error fetching jewelry products:", error));
    }, []);

    if (!products.length) {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="text-center">
                    <div className="spinner-border text-primary" role="status"></div>
                    <p className="mt-2">Loading Jewelry Products...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Jewelry Collection</h1>
            <div className="row">
                {products.map((product) => (
                    <div key={product.id} className="col-md-4 mb-4">
                        <div className="card h-100 shadow-sm">
                            <img src={product.image} className="card-img-top p-3" alt={product.title} style={{ height: "250px", objectFit: "contain" }} />
                            <div className="card-body text-center">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text fw-bold text-success">${product.price.toFixed(2)}</p>
                                <button 
                                    className="btn btn-primary"
                                    onClick={() => navigate(`/productdetails/${product.id}`)} // 🔹 Fixed navigation
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

export default Jewelery;
