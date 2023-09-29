import React from "react";
import { Link } from "react-router-dom";
import { color } from "../../constant/color";


const Footer = () => {
  return (
    <div className="footerContent">
      <Link
        to="https://theme-pr6a747xx-bhandekunal16.vercel.app/"
        style={{ color: "orange", padding: "5px 5px", textDecoration: "none" }}
      >
        Robotic<span style={{ color: "silver" }}>'s</span>
      </Link>

      <Link to="/assistant" style={{color: "orange", padding: "5px 5px", textDecoration: "none", float: "right"}}>Persnal Assistant</Link>
    </div>
  );
};

export default Footer;
