import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="primary">
      <div className="ui">
        <main className="ui-home">
          <h2 style={{ color: "skyblue" }}>code-book</h2>
          <div style={{ padding: "1%", color: "coralBlue" }}>
            <Link
              to="https://github.com/Bhandekunal16/Logic/tree/main/c"
              style={{ textDecoration: "none", color: "black" }}
            >
              Introduction to C Programming Basics
            </Link>
          </div>
          <div style={{ padding: "1%", color: "coralBlue" }}>
            <Link
              to="https://github.com/Bhandekunal16/Logic/tree/main/python"
              style={{ textDecoration: "none", color: "black" }}
            >
              Introduction to python Programming Basics
            </Link>
          </div>
          <div style={{ padding: "1%", color: "coralBlue" }}>
            <Link
              to="https://github.com/Bhandekunal16/Logic/tree/main/javascript"
              style={{ textDecoration: "none", color: "black" }}
            >
              Introduction to javascript Programming Basics
            </Link>
          </div>
        </main>
      </div>
      <div className="ui">
        <div className="ui-home">
          <h2 style={{ color: "skyblue" }}>game</h2>
          <Link
            style={{
              color: "coralBlue",
              padding: "1%",
              textDecoration: "none",
            }}
            to="https://bhandekunal16.github.io/game/"
          >
            Robotic
          </Link>
        </div>
      </div>

      <div style={{ textAlign: "center" }}>
        <p style={{ color: "skyblue" }}>
          if you want to practice it's some tool's for you.
        </p>
        <p>
          <Link
            style={{
              color: "coralBlue",
              padding: "1%",
              textDecoration: "none",
            }}
            to="https://www.programiz.com/c-programming/online-compiler/"
          >
            online c compiler from programiz.com
          </Link>
        </p>
        <p>
          <Link
            style={{
              color: "coralBlue",
              padding: "1%",
              textDecoration: "none",
            }}
            to="https://www.programiz.com/python-programming/online-compiler/"
          >
            online python compiler from programiz.com
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Home;
