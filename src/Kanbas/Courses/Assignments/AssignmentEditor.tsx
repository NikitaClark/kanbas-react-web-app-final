import React, { useState, useEffect } from "react";

export default function AssignmentEditor({ assignment }: { assignment: any }) {
  // Initialize state with assignment values (if any)
  const [editedAssignment, setEditedAssignment] = useState({
    name: "",
    description: "",
    points: 0,
    dueDate: "",
    availableFrom: "",
    availableUntil: "",
  });

  // Use effect to populate the form with the existing assignment data when the component mounts
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

  // Handle input changes
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
        <label htmlFor="name" className="col-sm-3 col-form-label">Assignment Name</label>
        <div className="col-sm-9">
          <input
            id="name"
            className="form-control"
            name="name"
            value={editedAssignment.name}
            onChange={handleChange}
          />
        </div>
      </div>

      <div>
        <label htmlFor="description" className="col-sm-3 col-form-label">Description</label>
        <div className="col-sm-9">
          <input
            id="description"
            className="form-control"
            name="description"
            value={editedAssignment.description}
            onChange={handleChange}
          />
        </div>
      </div>

      <div>
        <label htmlFor="points" className="col-sm-3 col-form-label">Points</label>
        <div className="col-sm-9">
          <input
            id="points"
            className="form-control"
            name="points"
            type="number"
            value={editedAssignment.points}
            onChange={handleChange}
          />
        </div>
      </div>

      <div>
        <label htmlFor="dueDate" className="col-sm-3 col-form-label">Due Date</label>
        <div className="col-sm-9">
          <input
            id="dueDate"
            className="form-control"
            name="dueDate"
            type="date"
            value={editedAssignment.dueDate}
            onChange={handleChange}
          />
        </div>
      </div>

      <div>
        <label htmlFor="availableFrom" className="col-sm-3 col-form-label">Available From</label>
        <div className="col-sm-9">
          <input
            id="availableFrom"
            className="form-control"
            name="availableFrom"
            type="date"
            value={editedAssignment.availableFrom}
            onChange={handleChange}
          />
        </div>
      </div>

      <div>
        <label htmlFor="availableUntil" className="col-sm-3 col-form-label">Available Until</label>
        <div className="col-sm-9">
          <input
            id="availableUntil"
            className="form-control"
            name="availableUntil"
            type="date"
            value={editedAssignment.availableUntil}
            onChange={handleChange}
          />
        </div>
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
