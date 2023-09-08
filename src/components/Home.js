import React from "react";
import { Link } from "react-router-dom";
import { environment, game, programiz } from "../env/environment";

const Home = () => {
  return (
    <div className="primary">
      <div className="ui">
        <main className="ui-home">
          <h2 style={{ color: "skyblue" }}>code-book</h2>
          <div style={{ padding: "1%" }}>
            <Link
              to={`https://${environment.c}`}
              style={{ textDecoration: "none", color: "orange" }}
            >
              Introduction to C Programming Basics
            </Link>
          </div>
          <div style={{ padding: "1%" }}>
            <Link
              to={`https://${environment.python}`}
              style={{ textDecoration: "none", color: "orange" }}
            >
              Introduction to python Programming Basics
            </Link>
          </div>
          <div style={{ padding: "1%" }}>
            <Link
              to={`https://${environment.javascript}`}
              style={{ textDecoration: "none", color: "orange" }}
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
              color: "orange",
              padding: "1%",
              textDecoration: "none",
            }}
            to={`https://${game.tic_tac_tio}`}
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
              color: "orange",
              padding: "1%",
              textDecoration: "none",
            }}
            to={`https://${programiz.c_compiler}`}
          >
            online c compiler from programiz.com
          </Link>
        </p>
        <p>
          <Link
            style={{
              color: "orange",
              padding: "1%",
              textDecoration: "none",
            }}
            to={`https://${programiz.python_compiler}`}
          >
            online python compiler from programiz.com
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Home;
