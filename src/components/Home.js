import React from "react";
import { Link } from "react-router-dom";

const Home = () => {


  function time (){
    const timing = new Date().getHours();

    switch (true) {
      case timing < 12:
        return "good morning"
      case timing < 17:
        return "good afternoon"
  
      case timing < 20:
        return  "good evening"
  
      case timing < 24:
        return "good night"
    };
  
  }
  

  return (
    <div className="primary" onLoad={time()}>
      <div className="ui">
      <main className="ui-home">
        <h2>code-book</h2>
        <p>
          This is the main content of the home page. You can showcase your
          featured content, products, or services here.
        </p>
        <div style={{padding:"2%"}}>
        <Link to="https://github.com/Bhandekunal16/Logic/tree/main/c" style={{textDecoration:"none", color:"black"}}>Introduction to C Programming Basics</Link>
        </div>
        <div style={{padding:"2%"}}>
        <Link to="https://github.com/Bhandekunal16/Logic/tree/main/python" style={{textDecoration:"none", color:"black"}}>Introduction to python Programming Basics</Link>
        </div>
        <div style={{padding:"2%"}}>
        <Link to="https://github.com/Bhandekunal16/Logic/tree/main/javascript" style={{textDecoration:"none", color:"black"}}>Introduction to javascript Programming Basics</Link>
        </div>
      </main>
      </div>
      <div className="ui">
        <div className="ui-home">
          <h2>game</h2>
          <Link style={{color: "black", padding:"2%", textDecoration:"none"}} to="https://bhandekunal16.github.io/game/">Robotic</Link>
        </div>
      </div>

      <h1></h1>
    </div>
  );
};

export default Home;
