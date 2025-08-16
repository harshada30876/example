import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../pages/Shop.css"; // Ensure proper styling

import img1 from "../assets 2/men/f1.jpg";
import img2 from "../assets 2/men/f6.jpg";
import img3 from "../assets 2/men/f7.jpg";
import img4 from "../assets 2/men/n1.jpg";
import img5 from "../assets 2/men/n2.jpg";
import img6 from "../assets 2/men/n4.jpg";
import img7 from "../assets 2/men/n5.jpg";
import img8 from "../assets 2/womens/f8.jpg";
import img9 from "../assets 2/womens/shopping (1).webp";
import img10 from "../assets 2/womens/shopping (2).webp";
import img11 from "../assets 2/womens/shopping.webp";

const Product = ({ selectedCategory, selectedSubcategory }) => {
  const products = [
    { id: 1, name: "T-Shirt", category: "Men", subcategory: "T-Shirts", price: "$20", size: ["S", "M", "L", "XL"], image: img1 },
    { id: 2, name: "Casual Shirt", category: "Men", subcategory: "Shirts", price: "$25", size: ["S", "M", "L", "XL"], image: img2 },
    { id: 3, name: "Jeans", category: "Men", subcategory: "Jeans", price: "$40", size: ["S", "M", "L"], image: img3 },
    { id: 4, name: "Jacket", category: "Men", subcategory: "Jackets", price: "$60", size: ["S", "M", "L", "XL"], image: img4 },
    { id: 5, name: "Sneakers", category: "Men", subcategory: "Shoes", price: "$70", size: ["S", "M", "L", "XL"], image: img5 },
    { id: 6, name: "Hoodie", category: "Men", subcategory: "Sweatshirts", price: "$50", size: ["S", "M", "L", "XL"], image: img6 },
    { id: 7, name: "Sweatshirt", category: "Men", subcategory: "Sweatshirts", price: "$45", size: ["S", "M", "L", "XL"], image: img7 },
    { id: 8, name: "Shorts", category: "Men", subcategory: "Shorts", price: "$30", size: ["S", "M", "L", "XL"], image: img8 },
    { id: 9, name: "Dress", category: "Women", subcategory: "One-piece", price: "$80", size: ["S", "M", "L", "XL"], image: img9 },
    { id: 10, name: "Top", category: "Women", subcategory: "Tops", price: "$35", size: ["S", "M", "L", "XL"], image: img10 },
    { id: 11, name: "Skirt", category: "Women", subcategory: "Little Skirts", price: "$50", size: ["S", "M", "L", "XL"], image: img11 },
  ];

  const filteredProducts = products.filter((product) => {
    if (selectedCategory !== "All" && product.category !== selectedCategory) return false;
    if (selectedSubcategory !== "All" && product.subcategory !== selectedSubcategory) return false;
    return true;
  });

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Products</h1>
      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-3">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="col">
              <div className="card product-card h-100 bg-info-subtle border border-warning-subtle">
                {/* Added Bootstrap background & border */}
                <img src={product.image} className="card-img-top" alt={product.name} />
                <div className="card-body text-center">
                  <h6 className="card-title">{product.name}</h6>
                  <p className="text-muted">{product.subcategory}</p>
                  <p className="fw-bold">{product.price}</p>
                  <button className="btn btn-outline-primary btn-sm">Add to Cart</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-muted">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Product;
