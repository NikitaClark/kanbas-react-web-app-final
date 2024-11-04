import React, { useState } from "react";

export default function StringStateVariables() {
  const [firstName, setFirstName] = useState("John"); // Initialize firstName as a string state variable

  return (
    <div>
      <h2>String State Variables</h2>
      <p>{firstName}</p> {/* Render the current value of firstName */}
      <input
        className="form-control"
        value={firstName} // Set input value to firstName state
        onChange={(e) => setFirstName(e.target.value)} // Update state on each keystroke
      />
      <hr />
    </div>
  );
}
