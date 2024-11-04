import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(7); // Initialize count as a state variable with useState

  console.log(count);

  return (
    <div id="wd-counter-use-state">
      <h2>Counter: {count}</h2> {/* Render the count state */}
      <button
        onClick={() => setCount(count + 1)} // Update count state on "Up" click
        id="wd-counter-up-click"
      >
        Up
      </button>
      <button
        onClick={() => setCount(count - 1)} // Update count state on "Down" click
        id="wd-counter-down-click"
      >
        Down
      </button>
      <hr />
    </div>
  );
}
