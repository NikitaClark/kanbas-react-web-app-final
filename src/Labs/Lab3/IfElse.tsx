// src/Labs/Lab3/IfElse.tsx
import React from "react";

const IfElse = () => {
  // Declaring the variables
  let true1 = true;
  let false1 = false;

  // Returning the rendered conditionally based content
  return (
    <div id="wd-if-else">
      <h4>If Else</h4>
      {/* Render true1 paragraph only if true1 is true */}
      {true1 && <p>true1</p>}
      {/* Use ternary operator to render based on the value of !false1 */}
      {!false1 ? <p>!false1</p> : <p>false1</p>}
      <hr />
    </div>
  );
};

export default IfElse;
