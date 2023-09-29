import React from "react";
import "../Home/assitant.css";

const Assistant = () => {
    function terminal (){
        const input = document.getElementById('input')
        console.log(input.value) 
    }
  return (
    <div id="container">
      <h1>Persnal assitant</h1>
      <textarea id="input" onInput={terminal()}></textarea>
    </div>
  );
};

export default Assistant;
