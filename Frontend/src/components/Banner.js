

// HeroBanner.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import '../styles/Banner.css'; // Create a CSS file for styling
import bannerbackground from "../assets/images/herobackground.png"

function Banner() {
  return (
    <div className="hero-banner">
      <img
        className="background-image"
        src={bannerbackground} // Replace with your image path
        alt="Background"
      />
      <div className="overlay">
        <h1>Welcome to Your Restaurant</h1>
        <p>Discover the finest dishes in town.</p>
        <Link to="/menu">
          <button className="menu-button">See Menu</button>
        </Link>
        <Link to="/login">
          <button className="signup-button">Sign up now</button>
        </Link>
      </div>
    </div>
  );
}

export default Banner;
