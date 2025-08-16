import React from "react";
import Features from "./Featurecard";
import Category from "./Category";

const HomePage = () => {
  return (
    <div>
      {/* Hero Section with Bootstrap Carousel */}
      <section className="hero">
        <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
          {/* Carousel Indicators */}
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
          </div>

          {/* Carousel Inner */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img 
                src="https://static.vecteezy.com/system/resources/previews/008/174/590/original/fashion-advertising-web-banner-illustration-vector.jpg" 
                className="d-block w-100" 
                alt="Fashion Sale 1" 
                loading="eager"
              />
            </div>

            <div className="carousel-item">
              <img 
                src="https://www.dillards.com/images/espots/031519_women_dillards_womens_dresses_hero.jpg" 
                className="d-block w-150" 
                alt="Fashion Sale 2" 
                loading="eager"
              />
            </div>

            <div className="carousel-item">
              <img 
                 src="https://img.freepik.com/free-vector/fashion-sale-banners-with-photo_52683-9828.jpg"              
                className="d-block w-100" 
                alt="Fashion Sale 3" 
                loading="eager"
              />
            </div>

            <div className="carousel-item">
              <img 
                src="https://cdn.theluxurycloset.com/uploads/home/19Aug_MainBanner_EN.png" 
                className="d-block w-100" 
                alt="Fashion Sale 4" 
                loading="eager"
              />
            </div>
          </div>

          {/* Carousel Controls */}
          <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container my-5">
        <Category />
      </section>

      {/* Featured Products Section */}
      <section className="container my-5">
        <Features />
      </section>
    </div>
  );
};

export default HomePage;
