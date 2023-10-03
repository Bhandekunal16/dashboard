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
  octal,
} from "../../math";

const Assistant = () => {
  function terminal() {
    const input = document.getElementById("input");
    const ans = document.getElementById("output");
    const mathematical = document.getElementById("math");

    switch (input.value) {
      case "table":
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
        break;

      case "log":
        mathematical.style.display = "block";
        const log = output(input.value, mathematical.value);
        break;

      case "random number":
        mathematical.style.display = "block";
        const random = output(input.value, mathematical.value);
        console.log(test);
        ans.innerHTML = random;
        break;

      case "convert binary":
        mathematical.style.display = "block";
        const binary = convertToBinary(mathematical.value);
        ans.innerHTML = binary;
        break;

      case "convert binary to string":
        mathematical.style.display = "block";
        const string = convertToString(mathematical.value);
        ans.innerHTML = string;
        break;

      case "convert to hex":
        mathematical.style.display = "block";
        const Hex = hexadecimalConvert(mathematical.value);
        ans.innerHTML = Hex;
        break;

      case "convert hex to string":
        mathematical.style.display = "block";
        const hex = hexToString(mathematical.value);
        ans.innerHTML = hex;
        break;

      case "calculate":
        mathematical.style.display = "block";
        const calculate = calculation(mathematical.value);
        ans.innerHTML = calculate;
        break;

      case "convert to octal":
        mathematical.style.display = "block";
        const oct = octal(mathematical.value);
        ans.innerHTML = oct;
        break;

      default:
        const methodResult = output(input.value);
        ans.innerHTML = methodResult;
        break;
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
