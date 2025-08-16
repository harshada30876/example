import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";  // To get category from URL
import FilterSidebar from "./sidebar.js";
import "../pages/Shop.css";
import Product from "./Products.js";  // Assuming Products component filters the products

const Shop = () => {
  const { categoryName } = useParams();  // Get category from URL
  const [selectedCategory, setSelectedCategory] = useState(categoryName || "All");
  const [selectedSubcategory, setSelectedSubcategory] = useState("All");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedSubcategory("All"); // Reset subcategory when category changes
  };

  const handleSubcategoryChange = (subcategory) => {
    setSelectedSubcategory(subcategory);
  };

  useEffect(() => {
    setSelectedCategory(categoryName || "All");
  }, [categoryName]);  // Update category when URL changes

  return (
    <div style={{ display: "flex" }}>
      <FilterSidebar
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
        selectedSubcategory={selectedSubcategory}
        handleSubcategoryChange={handleSubcategoryChange}
      />
      <Product selectedCategory={selectedCategory} selectedSubcategory={selectedSubcategory} />
    </div>
  );
};

export default Shop;
