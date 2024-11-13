import { createSlice } from "@reduxjs/toolkit";
import * as db from "../../Database";

interface Assignment {
  _id: string;
  name: string;
  description: string;
  dueDate: string;
  moduleId: string;
  course: string;
}

const initialState = {
  assignments: db.assignments as Assignment[],
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment = {
        _id: new Date().getTime().toString(), // Generates a new ID
        ...assignment,
      };
      state.assignments.push(newAssignment);
    },
    updateAssignment: (state, { payload: updatedAssignment }) => {
      const index = state.assignments.findIndex((a) => a._id === updatedAssignment._id);
      if (index !== -1) {
        state.assignments[index] = updatedAssignment;
      }
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter((a) => a._id !== assignmentId);
    },
  },
});

export const { addAssignment, updateAssignment, deleteAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;

