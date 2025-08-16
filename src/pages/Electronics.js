// Electronics.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const categoryMap = {
  electronics: 2,
  // add other mappings if needed
};

const Electronics = () => {
  const { category } = useParams(); // Expecting 'electronics'
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const categoryId = categoryMap[category.toLowerCase()];

  useEffect(() => {
    if (!categoryId) return;

    axios
      .get(`https://api.escuelajs.co/api/v1/products/?categoryId=${categoryId}`)
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, [categoryId]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Electronics Products</h2>
      <div className="row">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card shadow-sm h-100">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="card-img-top"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-price">
                    <strong>${product.price}</strong>
                  </p>
                  <Link to={`/productdetails/${product.id}`} className="btn btn-primary">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default Electronics;
