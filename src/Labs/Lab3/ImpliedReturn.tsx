import React from "react";

// ES6 arrow function with implied return
const multiply = (a: number, b: number) => a * b;

export default function ImpliedReturn() {
  const fourTimesFive = multiply(4, 5); // Using the multiply function
  console.log(fourTimesFive); // Logging to console

  return (
    <div id="wd-implied-return">
      <h4>Implied return</h4>
      fourTimesFive = {fourTimesFive} <br />
      multiply(4, 5) = {multiply(4, 5)} <hr />
    </div>
  );
}
