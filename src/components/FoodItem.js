import React, { useState } from "react";

const FoodItem = ({ name, image, price }) => {
  const [rating, setRating] = useState(0);

  return (
    <div className="food-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>Price: ₹{price}</p>
      
      <div>
        <p>Rating: {rating} ⭐</p>
        <button onClick={() => setRating(rating + 1)}>👍</button>
        <button onClick={() => setRating(rating - 1)}>👎</button>
      </div>
      
      <button className="btn">Order Now</button>
    </div>
  );
};

export default FoodItem;
