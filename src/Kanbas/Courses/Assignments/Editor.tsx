import React, { useState, useEffect } from "react";

export default function AssignmentEditor({ assignment }: { assignment: any }) {
  const [editedAssignment, setEditedAssignment] = useState({
    name: "",
    description: "",
    points: 0,
    dueDate: "",
    availableFrom: "",
    availableUntil: "",
  });

  // Load the initial assignment data into the form when it is passed in as a prop
  useEffect(() => {
    if (assignment) {
      setEditedAssignment({
        name: assignment.name,
        description: assignment.description,
        points: assignment.points,
        dueDate: assignment.dueDate,
        availableFrom: assignment.availableFrom,
        availableUntil: assignment.availableUntil,
      });
    }
  }, [assignment]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedAssignment((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <h4>{assignment ? "Edit Assignment" : "Create New Assignment"}</h4>

      <div>
        <label>Assignment Name</label>
        <input
          type="text"
          name="name"
          value={editedAssignment.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Description</label>
        <input
          type="text"
          name="description"
          value={editedAssignment.description}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Points</label>
        <input
          type="number"
          name="points"
          value={editedAssignment.points}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Due Date</label>
        <input
          type="date"
          name="dueDate"
          value={editedAssignment.dueDate}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Available From</label>
        <input
          type="date"
          name="availableFrom"
          value={editedAssignment.availableFrom}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Available Until</label>
        <input
          type="date"
          name="availableUntil"
          value={editedAssignment.availableUntil}
          onChange={handleChange}
        />
      </div>

      <div>
        <button onClick={() => console.log("Save changes", editedAssignment)}>
          Save Changes
        </button>
        <button onClick={() => console.log("Cancel edit")}>Cancel</button>
      </div>
    </div>
  );
}
