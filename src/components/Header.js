import React from "react";
import { Link } from "react-router-dom";

const Header = ({ setSearch }) => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <input
        type="text"
        placeholder="Search food..."
        onChange={(e) => setSearch(e.target.value)} // Update search state in App.js
        style={{
          padding: "8px",
          borderRadius: "5px",
          border: "none",
          marginLeft: "20px",
        }}
      />
    </nav>
  );
};

export default Header;
