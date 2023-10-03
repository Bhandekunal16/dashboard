import React from "react";
import "../Home/assitant.css";
import { output } from "../../ouput";
import {
  convertToString,
  math,
  convertToBinary,
  hexadecimalConvert,
  hexToString,
  calculation,
} from "../../math";

const Assistant = () => {
  function terminal() {
    const input = document.getElementById("input");
    const ans = document.getElementById("output");
    const mathematical = document.getElementById("math");

    if (input.value === "table") {
      mathematical.style.display = "block";
      const tableResult = math(input.value, mathematical.value);
      console.log(tableResult);
      ans.innerHTML =
        tableResult.one +
        "," +
        tableResult.two +
        "," +
        tableResult.three +
        "," +
        tableResult.four +
        "," +
        tableResult.five +
        "," +
        tableResult.six +
        "," +
        tableResult.seven +
        "," +
        tableResult.eight +
        "," +
        tableResult.nine +
        "," +
        tableResult.ten;
    } else if (input.value == "log") {
      mathematical.style.display = "block";
      const log = output(input.value, mathematical.value);
    } else if (input.value == "random number") {
      mathematical.style.display = "block";
      const random = output(input.value, mathematical.value);
     
      console.log(test);
      ans.innerHTML = random;
    } else if (input.value == "convert binary") {
      mathematical.style.display = "block";
      const binary = convertToBinary(mathematical.value);
      ans.innerHTML = binary;
    } else if (input.value == "convert binary to string") {
      mathematical.style.display = "block";
      const binary = convertToString(mathematical.value);
      ans.innerHTML = binary;
    } else if (input.value == "convert to hex") {
      mathematical.style.display = "block";
      const hex = hexadecimalConvert(mathematical.value);
      ans.innerHTML = hex;
    } else if (input.value == "convert hex to string") {
      mathematical.style.display = "block";
      const hex = hexToString(mathematical.value);
      ans.innerHTML = hex;
    }
    else if (input.value == 'calculate'){
      mathematical.style.display = "block";
      const calculate = calculation(mathematical.value);
      ans.innerHTML = calculate
    }
    else {
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
              height: "55vh",
              width: "100vw",
              textAlign: "center",
            }}
          ></div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <textarea
            id="math"
            onInput={terminal}
            style={{
              display: "none",
              backgroundColor: "#333",
              color: "white",
              height: "auto",
              width: "100vw",
              alignItems: "center",
            }}
          ></textarea>
        </div>

        <textarea
          id="input"
          onInput={terminal}
          style={{
            backgroundColor: "#333",
            color: "white",
            height: "auto",
            width: "100vw",
          }}
        ></textarea>
      </div>
    </>
  );
};

export default Assistant;
