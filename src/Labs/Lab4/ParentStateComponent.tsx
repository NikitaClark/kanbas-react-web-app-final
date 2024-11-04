import React, { useState } from "react";
import ChildStateComponent from "./ChildStateComponent";

export default function ParentStateComponent() {
  const [counter, setCounter] = useState(123); // Initialize counter state

  return (
    <div>
      <h2>Counter {counter}</h2> {/* Display the counter in the parent */}
      <ChildStateComponent counter={counter} setCounter={setCounter} />
      <hr />
    </div>
  );
}
