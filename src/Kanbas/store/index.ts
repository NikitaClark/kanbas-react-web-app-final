import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/reducer";
import accountReducer from "../Account/reducer";
import assignmentsReducer from "../Courses/Assignments/reducer";
import { enrollInCourse } from "../enrollmentsSlice";

const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
    assignmentsReducer,
    enrollInCourse
  },
});

export default store;
