import React from "react";
import "../styles/Card.css";

const Card = ({ foodItem }) => {
  return (
    <div className="food-card">
      <div className="food-image-container">
        <div className="food-image">
          <img src={foodItem.img} alt={foodItem.name} />
        </div>
      </div>
      <div className="food-details">
        <h2 className="food-name">{foodItem.name}</h2>
        {/* <p className="food-description">{foodItem.desc}</p> */}
        <div className="food-footer">
          <div className="food-price">Rs {foodItem.price.toFixed(2)}</div>
          <button className="add-to-cart-button">Add</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
