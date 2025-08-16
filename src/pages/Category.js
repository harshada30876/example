import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const categoryImages = {
    "electronics": "https://th.bing.com/th/id/OIP.0LBb51WQ8yn1U2R7i3nwWwHaFy?w=808&h=632&rs=1&pid=ImgDetMain",
    "jewelery": "https://marketplace.canva.com/EAE3WlzsOqk/1/0/800w/canva-beige-and-brown-elegant-jewelry-promotion-instagram-post-4aYgeQfsBRg.jpg",
    "men's clothing": "https://dacdn.damensch.com/damensch/products/johnny_polo_wind_blue_(5).jpg?fm=webp",
    "women's clothing": "https://i.pinimg.com/originals/6d/d9/12/6dd912d46f72887a82ad5943172ee54c.jpg",
  };

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        setCategories(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-5">Loading...</p>;

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Product Categories</h2>
      <div className="row">
        {categories.length > 0 ? (
          categories.map((category, index) => (
            <div key={index} className="col-md-3 mb-4">
              <div className="card shadow-sm text-center">
                <img 
                  src={categoryImages[category] || "https://via.placeholder.com/300?text=No+Image"} 
                  alt={category} 
                  className="card-img-top img-fluid"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title text-capitalize">{category}</h5>
                  <Link to={`/subcategory/${category}`} className="btn btn-primary">
                    View Products
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center w-100">No categories found.</p>
        )}
      </div>
    </div>
  );
};
export default Category;
