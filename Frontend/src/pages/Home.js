import React from "react";
import Banner from "../components/Banner";
// import divider from "../assets/images/wave-divider.svg"
// import ParallaxBanner from '../components/ParallaxBanner';
import "../styles/Home.css";

const Home = () => {
  return (
    <div>
      <Banner />

      <div className="category-carousel-container">
        <h2>What you are in mood for?</h2>
        <div className="category-carousel-list">
          <div className="each-catergory-in-carousel">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
