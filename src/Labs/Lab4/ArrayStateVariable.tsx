import React, { useState } from "react";

export default function ArrayStateVariable() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]); // Initialize array with integers

  // Function to add a random element
  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };

  // Function to delete an element by index
  const deleteElement = (index: number) => {
    setArray(array.filter((_, i) => i !== index));
  };

  return (
    <div id="wd-array-state-variables" className="p-3">
      <h2>Array State Variable</h2>
      <button onClick={addElement} className="btn btn-primary mb-3">
        Add Element
      </button>
      <ul className="list-group">
        {array.map((item, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {item}
            <button
              onClick={() => deleteElement(index)}
              className="btn btn-danger btn-sm"
              id="wd-delete-element-click"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}
