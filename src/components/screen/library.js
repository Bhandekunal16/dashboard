import React from "react";
import { color } from "../../constant/color";

const Library = () => {
  return (
    <div  style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "2%",
    }}>
      <h1
        style={{color: color().header}}
      >
        Robotic library for basic javascript & typescript use
      </h1>

      <div  
      style={{
            height: "auto",
            width: "80vw",
            backgroundColor: color().primary,
            borderRadius: "10px",
            boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
            marginTop: "2%",
            padding:'1%'
          }}>
        <p style={{color: color().text}}>name : robotic-random-number</p>
        <p style={{color: color().text}}>Install: npm i robotic-random-number</p>
        <p style={{color: color().text}}>dependency : none</p>
        <p style={{color: color().text}}>Import : first import  number from "robotic-random-number";</p>
        <p style={{color: color().text}}>use : number()</p>
      </div>

      <div  
      style={{
            height: "auto",
            width: "80vw",
            backgroundColor: color().primary,
            borderRadius: "10px",
            boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
            marginTop: "2%",
            padding:'1%'
          }}>
        <p style={{color: color().text}}>name : robotic-math</p>
        <p style={{color: color().text}}>Install: npm i robotic-math</p>
        <p style={{color: color().text}}>dependency : none</p>
        <p style={{color: color().text}}>Import : first import  calculation from "robotic-math";</p>
        <p style={{color: color().text}}>use : calculation()</p>
        <p style={{color: color().text}}>use : calculation(value)</p>
      </div>

      <div  
      style={{
            height: "auto",
            width: "80vw",
            backgroundColor: color().primary,
            borderRadius: "10px",
            boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
            marginTop: "2%",
            padding:'1%'
          }}>
        <p style={{color: color().text}}>name : robotic-scientific-notation-number</p>
        <p style={{color: color().text}}>Install: npm i robotic-scientific-notation-number</p>
        <p style={{color: color().text}}>dependency : none</p>
        <p style={{color: color().text}}>Import : first import  convertToScientificNotation from "robotic-scientific-notation-number";</p>
        <p style={{color: color().text}}>use : convertToScientificNotation()</p>
        <p style={{color: color().text}}>use : convertToScientificNotation(value)</p>
      </div>

      <div  
      style={{
            height: "auto",
            width: "80vw",
            backgroundColor: color().primary,
            borderRadius: "10px",
            boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
            marginTop: "2%",
            padding:'1%'
          }}>
        <p style={{color: color().text}}>name : robotic-binary-converter</p>
        <p style={{color: color().text}}>Install: npm i robotic-binary-converter</p>
        <p style={{color: color().text}}>dependency : none</p>
        <p style={{color: color().text}}>Import : first import  convertToBinary, convertToString from "robotic-binary-converter";
          as according to your choice.
        </p>
        <p style={{color: color().text}}>use : convertToBinary(value), convertToString(value)</p>
      </div>

      <div  
      style={{
            height: "auto",
            width: "80vw",
            backgroundColor: color().primary,
            borderRadius: "10px",
            boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
            marginTop: "2%",
            padding:'1%'
          }}>
        <p style={{color: color().text}}>name : robotic-hexadecimal-converter</p>
        <p style={{color: color().text}}>Install: npm i robotic-hexadecimal-converter</p>
        <p style={{color: color().text}}>dependency : none</p>
        <p style={{color: color().text}}>Import : first import  hexadecimalConvert, hexToString from "robotic-hexadecimal-converter";
          as according to your choice.
        </p>
        <p style={{color: color().text}}>use : hexadecimalConvert(value), hexToString(value)</p>
      </div>

      <div  
      style={{
            height: "auto",
            width: "80vw",
            backgroundColor: color().primary,
            borderRadius: "10px",
            boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
            marginTop: "2%",
            padding:'1%'
          }}>
        <p style={{color: color().text}}>name : robotic-octal-converter</p>
        <p style={{color: color().text}}>Install: npm i robotic-octal-converter</p>
        <p style={{color: color().text}}>dependency : none</p>
        <p style={{color: color().text}}>Import : first import  octal, octalToString from "robotic-octal-converter";
          as according to your choice.
        </p>
        <p style={{color: color().text}}>use : octal(value), octalToString(value)</p>
      </div>

      <div  
      style={{
            height: "auto",
            width: "80vw",
            backgroundColor: color().primary,
            borderRadius: "10px",
            boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
            marginTop: "2%",
            padding:'1%'
          }}>
        <p style={{color: color().text}}>name : robotic-time</p>
        <p style={{color: color().text}}>Install: npm i robotic-time</p>
        <p style={{color: color().text}}>dependency : none</p>
        <p style={{color: color().text}}>Import : first import  time from "robotic-time";
          as according to your choice.
        </p>
        <p style={{color: color().text}}>use : time().localDate</p>
      </div>
    </div>
  );
};

export default Library;
