import React from "react";
import "../Home/assitant.css";
import { output } from "../../ouput";
import { math } from "../../math";

const Assistant = () => {
  function terminal() {
    const input = document.getElementById("input");
    const ans = document.getElementById("output");
    const mathematical = document.getElementById("math");

    if (input.value === "table") {
      const tableResult = math(input.value, mathematical.value);
      console.log(tableResult)
      ans.innerHTML = tableResult;
    } else {
      const methodResult = output(input.value);
      ans.innerHTML = methodResult;
    }
  }

  return (
    <>
      <div id="container">
        <h1>Personal assistant</h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            id="output"
            style={{
              backgroundColor: "#333",
              color: "white",
              height: "50vh",
              width: "50vw",
              textAlign: "center",
            }}
          ></div>
        </div>
        <textarea
          id="input"
          onInput={terminal}
          style={{
            backgroundColor: "#333",
            color: "white",
            height: "auto",
            width: "50vw",
          }}
        ></textarea>
      </div>
    </>
  );
};

export default Assistant;
