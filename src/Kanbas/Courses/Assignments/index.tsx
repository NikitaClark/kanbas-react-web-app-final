import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, updateAssignment, deleteAssignment } from "./reducer";

export default function Assignments() {
  const assignments = useSelector((state: any) => state.assignmentsReducer.assignments);
  const dispatch = useDispatch();
  const [newAssignment, setNewAssignment] = useState({ name: "", description: "" });

  const handleAddAssignment = () => {
    dispatch(addAssignment(newAssignment));
    setNewAssignment({ name: "", description: "" });
  };

  const handleUpdateAssignment = (updatedAssignment: any) => {
    dispatch(updateAssignment(updatedAssignment));
  };

  const handleDeleteAssignment = (assignmentId: string) => {
    dispatch(deleteAssignment(assignmentId));
  };

  return (
    <div>
      <h3>Assignments</h3>
      <ul>
        {assignments.map((assignment: any) => (
          <li key={assignment._id}>
            <span>{assignment.name}</span>
            <button onClick={() => handleUpdateAssignment(assignment)}>Edit</button>
            <button onClick={() => handleDeleteAssignment(assignment._id)}>Delete</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Assignment Name"
        value={newAssignment.name}
        onChange={(e) => setNewAssignment({ ...newAssignment, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Assignment Description"
        value={newAssignment.description}
        onChange={(e) => setNewAssignment({ ...newAssignment, description: e.target.value })}
      />
      <button onClick={handleAddAssignment}>Add Assignment</button>
    </div>
  );
}
