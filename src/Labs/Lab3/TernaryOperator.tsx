// src/Labs/Lab3/TernaryOperator.tsx
import React from "react";

const TernaryOperator = () => {
  // Declaring the loggedIn variable
  let loggedIn = true;

  // Returning the rendered ternary conditional content
  return (
    <div id="wd-ternary-operator">
      <h4>Logged In</h4>
      {/* Use ternary operator to render based on loggedIn status */}
      {loggedIn ? <p>Welcome</p> : <p>Please login</p>}
      <hr />
    </div>
  );
};

export default TernaryOperator;
