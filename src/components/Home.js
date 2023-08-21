import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="primary">
      <div className="ui">
      <main className="ui-home">
        <h2>Robotic's</h2>
        <p>
          This is the main content of the home page. You can showcase your
          featured content, products, or services here.
        </p>
        <div style={{padding:"2%"}}>
        <Link to="https://github.com/Bhandekunal16/Logic/tree/main/c" style={{textDecoration:"none", color:"orange"}}>Introduction to C Programming Basics</Link>
        </div>
        <div style={{padding:"2%"}}>
        <Link to="https://github.com/Bhandekunal16/Logic/tree/main/python" style={{textDecoration:"none", color:"orange"}}>Introduction to python Programming Basics</Link>
        </div>
        <div style={{padding:"2%"}}>
        <Link to="https://github.com/Bhandekunal16/Logic/tree/main/javascript" style={{textDecoration:"none", color:"orange"}}>Introduction to javascript Programming Basics</Link>
        </div>
        
      </main>
      </div>
      
    </div>
  );
};

export default Home;
