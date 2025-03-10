import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-red-500 text-white p-4 fixed w-full top-0">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">Foodie</h1>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:text-gray-200">Home</Link></li>
          <li><Link to="/menu" className="hover:text-gray-200">Menu</Link></li>
          <li><Link to="/about" className="hover:text-gray-200">About</Link></li>
          <li><Link to="/contact" className="hover:text-gray-200">Contact</Link></li>
          <li><Link to="/order" className="hover:text-gray-200">Order</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
