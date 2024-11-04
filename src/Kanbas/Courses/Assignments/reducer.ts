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
      const newAssignment: Assignment = {
        _id: new Date().getTime().toString(),
        name: assignment.name,
        description: assignment.description,
        dueDate: assignment.dueDate,
        moduleId: assignment.moduleId,
        course: assignment.course,
      };
      state.assignments = [...state.assignments, newAssignment];
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (a) => a._id !== assignmentId
      );
    },
    updateAssignment: (state, { payload: updatedAssignment }) => {
      state.assignments = state.assignments.map((a) =>
        a._id === updatedAssignment._id ? updatedAssignment : a
      );
    },
  },
});

export const { addAssignment, deleteAssignment, updateAssignment } =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;
