import React from "react";

// ES6 arrow function
const subtract = (a: number, b: number) => {
  return a - b;
};

export default function ArrowFunctions() {
  const threeMinusOne = subtract(3, 1); // Using the subtract function
  console.log(threeMinusOne); // Logging to console

  return (
    <div id="wd-arrow-functions">
      <h4>New ES6 arrow functions</h4>
      threeMinusOne = {threeMinusOne} <br />
      subtract(3, 1) = {subtract(3, 1)} <hr />
    </div>
  );
}
