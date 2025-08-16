import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <h2 className="mb-4">About Cara</h2>
          <p className="lead">
            Welcome to <strong>Cara</strong>, your ultimate fashion destination for men, women, and kids.
            We specialize in offering high-quality clothing, accessories, shoes, and jackets that blend style with comfort.
            Whether you're looking for trendy outfits, stylish footwear, or statement accessories, we have something for everyone.
          </p>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-6">
          <img src="https://source.unsplash.com/600x400/?fashion" alt="Fashion" className="img-fluid rounded shadow" />
        </div>
        <div className="col-md-6 d-flex align-items-center">
          <p>
            At <strong>Cara</strong>, we believe fashion should be accessible, and we strive to provide top-notch products at competitive prices.
            Our collections are carefully curated to ensure that every piece meets the latest trends while maintaining high-quality standards.
          </p>
        </div>
      </div>

      <div className="row mt-5 text-center">
        <h3>Why Choose Cara?</h3>
        <div className="col-md-6 mx-auto text-start">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">✅ <strong>Wide Range of Fashion</strong> – From casual to formal wear, we cater to all styles.</li>
            <li className="list-group-item">✅ <strong>Quality First</strong> – We prioritize premium materials and craftsmanship.</li>
            <li className="list-group-item">✅ <strong>Affordable Prices</strong> – Fashion that fits your budget.</li>
            <li className="list-group-item">✅ <strong>Fast & Secure Shopping</strong> – Enjoy seamless online shopping with easy returns.</li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-5">
        <h4>Join us and redefine your fashion statement with Cara!</h4>
      </div>
    </div>
  );
};

export default About;