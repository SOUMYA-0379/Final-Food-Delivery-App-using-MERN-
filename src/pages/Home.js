import React from "react";
import "./Home.css"; // Import the CSS file

const Home = ({ search = "" }) => {
  const foodItems = [
    { id: 1, name: "Pizza", img: "https://source.unsplash.com/400x300/?pizza" },
    { id: 2, name: "Burger", img: "https://source.unsplash.com/400x300/?burger" },
    { id: 3, name: "Pasta", img: "https://source.unsplash.com/400x300/?pasta" },
    { id: 4, name: "Sushi", img: "https://source.unsplash.com/400x300/?sushi" },
    { id: 5, name: "Salad", img: "https://source.unsplash.com/400x300/?salad" },
  ];

  // Check if `search` is undefined before filtering
  const filteredItems = foodItems.filter((item) =>
    search ? item.name.toLowerCase().includes(search.toLowerCase()) : true
  );

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Delicious Food Delivered to You 🍕🍔</h1>
        <p>Order your favorite meals in just a few clicks!</p>
      </div>

      <div className="food-grid">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div key={item.id} className="food-card">
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
              <button className="order-btn">Order Now</button>
            </div>
          ))
        ) : (
          <p className="no-results">No results found.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
