import { Link } from "react-router-dom";
import { environment, game, programiz } from "../env/environment";
import { toast } from "react-toastify";
import React, { useEffect } from "react";
import { color } from "../constant/color";
import { PieChart } from "react-minimal-pie-chart";

const Home = () => {
  useEffect(() => {
    notify();
  }, []);

  const notify = () => {
    toast.success("Welcome to home page", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <div className="primary">
      <div className="ui">
        <main className="ui-home">
          <h2 style={{ color: color().sec }}>code-book</h2>
          <div style={{ padding: "1%" }}>
            <Link
              to={`https://${environment.c}`}
              style={{ textDecoration: "none", color: color().text }}
            >
              Introduction to C Programming Basics
            </Link>
          </div>
          <div style={{ padding: "1%" }}>
            <Link
              to={`https://${environment.python}`}
              style={{ textDecoration: "none", color: color().text }}
            >
              Introduction to python Programming Basics
            </Link>
          </div>
          <div style={{ padding: "1%" }}>
            <Link
              to={`https://${environment.javascript}`}
              style={{ textDecoration: "none", color: color().text }}
            >
              Introduction to javascript Programming Basics
            </Link>
          </div>
        </main>
      </div>
      <div className="ui">
        <div className="ui-home">
          <h2 style={{ color: color().sec }}>game</h2>
          <Link
            style={{
              color: color().text,
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
        <p style={{ color: color().sec }}>
          if you want to practice it's some tool's for you.
        </p>
        <p>
          <Link
            style={{
              color: color().header,
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
              color: color().header,
              padding: "1%",
              textDecoration: "none",
            }}
            to={`https://${programiz.python_compiler}`}
          >
            online python compiler from programiz.com
          </Link>
        </p>
      </div>
      <div style={{display: "flex", justifyContent: "center", padding: "3%"}}>
        <PieChart
          style={{ height: 180, background: color().primary, padding: "1%", width: "40vw" }}
          data={[
            { title: "One", value: 10, color: "#E38627" },
            { title: "Two", value: 15, color: "#C13C37" },
            { title: "Three", value: 20, color: "#6A2135" },
          ]}
        />
      </div>
    </div>
  );
};

export default Home;
