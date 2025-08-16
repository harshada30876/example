import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./header/Navbar";
import Footer from "./footer/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "100vh" }}>
        <Outlet />  {/* This will load HomePage, Products, etc. */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
