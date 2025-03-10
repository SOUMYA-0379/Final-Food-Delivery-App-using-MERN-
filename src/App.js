import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header"; // Import Header component
import "./index.css";

const App = () => {
  const [search, setSearch] = useState(""); // Define search in App.js

  return (
    <Router>
      {/* Pass setSearch to Header */}
      <Header setSearch={setSearch} />

      {/* Pass search to Home */}
      <Routes>
        <Route path="/" element={<Home search={search} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Food Delivery App. All Rights Reserved.</p>
      </footer>
    </Router>
  );
};

export default App;
