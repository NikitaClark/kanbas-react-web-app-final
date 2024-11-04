import React, { useState } from "react";

export default function BooleanStateVariables() {
  const [done, setDone] = useState(true); // Initialize done as a boolean state variable

  return (
    <div id="wd-boolean-state-variables">
      <h2>Boolean State Variables</h2>
      <p>{done ? "Done" : "Not done"}</p> {/* Display status based on done state */}
      <label className="form-control">
        <input
          type="checkbox"
          checked={done}
          onChange={() => setDone(!done)} // Toggle done state on checkbox change
        />{" "}
        Done
      </label>
      {done && (
        <div className="alert alert-success">
          Yay! You are done
        </div>
      )} {/* Display message if done is true */}
      <hr />
    </div>
  );
}
