import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, updateAssignment, deleteAssignment } from "./reducer";

export default function Assignments() {
  const assignments = useSelector((state: any) => state.assignmentsReducer.assignments);
  const dispatch = useDispatch();

  const [editingAssignment, setEditingAssignment] = useState<any | null>(null);
  const [newAssignment, setNewAssignment] = useState({
    name: "",
    description: "",
    points: 0,
    dueDate: "",
    availableFrom: "",
    availableUntil: "",
  });
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [assignmentToDelete, setAssignmentToDelete] = useState<string | null>(null);
  const handleAddAssignment = () => {
    if (!editingAssignment) {
      dispatch(addAssignment(newAssignment)); 
    } else {
      dispatch(updateAssignment({ ...editingAssignment, ...newAssignment })); 
    }
    setEditingAssignment(null); 
    setNewAssignment({
      name: "",
      description: "",
      points: 0,
      dueDate: "",
      availableFrom: "",
      availableUntil: "",
    });
  };

  const handleEditAssignment = (assignment: any) => {
    setEditingAssignment(assignment); // Set the assignment to be edited
    setNewAssignment({
      name: assignment.name,
      description: assignment.description,
      points: assignment.points,
      dueDate: assignment.dueDate,
      availableFrom: assignment.availableFrom,
      availableUntil: assignment.availableUntil,
    });
  };

  const handleCancelEdit = () => {
    setEditingAssignment(null); // Reset to stop editing
    setNewAssignment({
      name: "",
      description: "",
      points: 0,
      dueDate: "",
      availableFrom: "",
      availableUntil: "",
    });
  };

  const handleDeleteAssignment = (assignmentId: string) => {
    setAssignmentToDelete(assignmentId); 
    setShowDeleteModal(true); 
  };

  const confirmDelete = () => {
    if (assignmentToDelete) {
      dispatch(deleteAssignment(assignmentToDelete));
    }
    setShowDeleteModal(false);
    setAssignmentToDelete(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewAssignment((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: "20px",marginLeft:"120px" }}>
      <div style={{ width: "60%" }}>
        <h3>Assignments</h3>
        <ul>
          {assignments.map((assignment: any) => (
            <div key={assignment._id} style={{ border: "1px solid #ccc", margin: "10px 0", padding: "10px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h4>{assignment.name}</h4>
                <div>
                  <button onClick={() => handleEditAssignment(assignment)} style={{ marginRight: "10px" }} className="btn btn-primary">Edit</button>
                  <button onClick={() => handleDeleteAssignment(assignment._id)} className="btn btn-danger">Delete</button>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "10px", marginTop: "10px" }}>
                <div><strong>Description:</strong></div>
                <div>{assignment.description}</div>
                <div><strong>Points:</strong></div>
                <div>{assignment.points}</div>
                <div><strong>Due Date:</strong></div>
                <div>{assignment.dueDate}</div>
                <div><strong>Available From:</strong></div>
                <div>{assignment.availableFrom}</div>
                <div><strong>Available Until:</strong></div>
                <div>{assignment.availableUntil}</div>
              </div>
            </div>
          ))}
        </ul>
      </div>

      <div style={{ width: "35%", padding: "20px", border: "1px solid #ccc" }}>
        <h4>{editingAssignment ? "Edit Assignment" : "Add New Assignment"}</h4>
        
        <div style={{ marginBottom: "10px" }}>
          <label>Assignment Name</label>
          <input
            type="text"
            name="name"
            value={newAssignment.name}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Description</label>
          <input
            type="text"
            name="description"
            value={newAssignment.description}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Points</label>
          <input
            type="number"
            name="points"
            value={newAssignment.points}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Due Date</label>
          <input
            type="date"
            name="dueDate"
            value={newAssignment.dueDate}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
          <div style={{ flex: 1 }}>
            <label>Available From</label>
            <input
              type="date"
              name="availableFrom"
              value={newAssignment.availableFrom}
              onChange={handleChange}
              style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            />
          </div>

          <div style={{ flex: 1 }}>
            <label>Available Until</label>
            <input
              type="date"
              name="availableUntil"
              value={newAssignment.availableUntil}
              onChange={handleChange}
              style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            />
          </div>
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <button onClick={handleAddAssignment} style={{ padding: "10px", flex: 1 }} className="btn btn-success" >
            {editingAssignment ? "Save Changes" : "Save"}
          </button>
          <button onClick={handleCancelEdit}className="btn btn-secondary" style={{ padding: "10px", flex: 1 }}>Cancel</button>
        </div>
      </div>
      <div className={`modal fade ${showDeleteModal ? "show d-block" : ""}`} tabIndex={-1} style={{ display: showDeleteModal ? "block" : "none", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Confirm Delete</h5>
              <button type="button" className="btn-close" onClick={() => setShowDeleteModal(false)}></button>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to delete this assignment?</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={() => setShowDeleteModal(false)}>
                No
              </button>
              <button type="button" className="btn btn-danger" onClick={confirmDelete}>
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
}
