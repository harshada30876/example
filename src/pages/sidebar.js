import React from "react";

const FilterSidebar = ({ selectedCategory, handleCategoryChange, selectedSubcategory, handleSubcategoryChange }) => {
  return (
    <div className="sidebar" style={{ width: "250px", padding: "20px", background: "#f4f4f4" }}>
      <h3>Filters</h3>
      <h4>Category</h4>
      <ul>
        <li><button onClick={() => handleCategoryChange("All")}>All</button></li>
        <li><button onClick={() => handleCategoryChange("Men")}>Men</button></li>
        <li><button onClick={() => handleCategoryChange("Women")}>Women</button></li>
        <li><button onClick={() => handleCategoryChange("Kids")}>Kids</button></li>
      </ul>
      {selectedCategory !== "All" && (
        <>
          <h4>Subcategories</h4>
          <ul>
            {selectedCategory === "Men" && (
              <>
                <li><button onClick={() => handleSubcategoryChange("All")}>All</button></li>
                <li><button onClick={() => handleSubcategoryChange("T-Shirts")}>T-Shirts</button></li>
                <li><button onClick={() => handleSubcategoryChange("Shirts")}>Shirts</button></li>
                <li><button onClick={() => handleSubcategoryChange("Jeans")}>Jeans</button></li>
                <li><button onClick={() => handleSubcategoryChange("Bracelets")}>Bracelets</button></li>
                <li><button onClick={() => handleSubcategoryChange("Shoes")}>Shoes</button></li>
              </>
            )}
            {selectedCategory === "Women" && (
              <>
                <li><button onClick={() => handleSubcategoryChange("All")}>All</button></li>
                <li><button onClick={() => handleSubcategoryChange("Tops")}>Tops</button></li>
                <li><button onClick={() => handleSubcategoryChange("Jeans")}>Jeans</button></li>
                <li><button onClick={() => handleSubcategoryChange("One-piece")}>One-piece</button></li>
                <li><button onClick={() => handleSubcategoryChange("Earrings")}>Earrings</button></li>
                <li><button onClick={() => handleSubcategoryChange("Necklaces")}>Necklaces</button></li>
              </>
            )}
            {selectedCategory === "Kids" && (
              <>
                <li><button onClick={() => handleSubcategoryChange("All")}>All</button></li>
                <li><button onClick={() => handleSubcategoryChange("Shirts")}>Shirts</button></li>
                <li><button onClick={() => handleSubcategoryChange("Little Skirts")}>Little Skirts</button></li>
                <li><button onClick={() => handleSubcategoryChange("Hairbands")}>Hairbands</button></li>
                <li><button onClick={() => handleSubcategoryChange("Shoes")}>Shoes</button></li>
                <li><button onClick={() => handleSubcategoryChange("Watches")}>Watches</button></li>
              </>
            )}
          </ul>
        </>
      )}
    </div>
  );
};
export default FilterSidebar;
