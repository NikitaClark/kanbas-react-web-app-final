import { createSlice } from "@reduxjs/toolkit";
import * as db from "./Database";

interface Enrollment {
  user: string;
  course: string;
}

const loadEnrollmentsFromStorage = (): Enrollment[] => {
  const savedEnrollments = localStorage.getItem("enrollments");
  return savedEnrollments ? JSON.parse(savedEnrollments) : db.enrollments;
};

const initialState = {
  enrollments: loadEnrollmentsFromStorage(),
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    enrollInCourse: (state, { payload: enrollment }) => {
      const exists = state.enrollments.some(
        (e) => e.user === enrollment.user && e.course === enrollment.course
      );
      if (!exists) {
        state.enrollments.push(enrollment);
        localStorage.setItem("enrollments", JSON.stringify(state.enrollments)); 
      }
    },
    unenrollFromCourse: (state, { payload: { user, course } }) => {
      state.enrollments = state.enrollments.filter(
        (e) => !(e.user === user && e.course === course)
      );
      localStorage.setItem("enrollments", JSON.stringify(state.enrollments)); 
    },
  },
});

export const { enrollInCourse, unenrollFromCourse } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
