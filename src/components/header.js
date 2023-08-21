import React from "react";
import { Link } from "react-router-dom"; // Import Routes and Route from react-router-dom

function Header() {

  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/service">Service</Link>
      <Link to="/contact">contact</Link>
    </div>
  );
}

export default Header;
