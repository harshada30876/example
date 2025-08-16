import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Signup from "./pages/Signup";
import Contact from"./pages/Contact";
import Shop from "./pages/Shop";
import Sidebar from "./pages/sidebar";
import AxiosFetch from "./pages/AxiosFetch";
import Productdetails from "./pages/Productdetails";
import Electronics from "./pages/Electronics";
import Jewelary from "./pages/Jewelary";
import MensClothing from "./pages/Mens_clothing";
import WomensClothing from "./pages/Womens_clothing";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import About from "./pages/About";


function App() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="cart" element={<Cart />} />
        <Route path="contact" element={<Contact />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sidebar" element={<Sidebar />} />
        <Route path="axiosfetch" element={<AxiosFetch />} />
        <Route path="productdetails/:id" element={<Productdetails />} /> 
        <Route path="shop/jeans" element={<Shop category="jeans" />} />
        <Route path="subcategory/:category" element={<Electronics />} />
        <Route path="products/categories/jewelery" element={<Jewelary />} />
        <Route path="products/category/men's clothing" element={<MensClothing />} />
        <Route path="products/category/women's clothing" element={<WomensClothing />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="payment" element={<Payment />} />
        <Route path="about" element={<About />}></Route>
      </Route>
    </Routes>
  );
}
export default App;
