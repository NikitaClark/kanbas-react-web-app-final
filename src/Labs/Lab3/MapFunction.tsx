import React from "react";

export default function MapFunction() {
  let numberArray1 = [1, 2, 3, 4, 5, 6];
  
  // Function to calculate the square of a number
  const square = (a: number) => a * a;
  
  // Array of todos
  const todos = ["Buy milk", "Feed the pets"];
  
  // Using map to apply the square function
  const squares = numberArray1.map(square);
  
  // Using map to calculate the cubes
  const cubes = numberArray1.map((a) => a * a * a);

  return (
    <div id="wd-map-function">
      <h4>Map Function</h4>
      squares = {squares.join(" ")} <br />
      cubes = {cubes.join(" ")} <br />
      Todos:
      <ol>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ol>
      <hr />
    </div>
  );
}
