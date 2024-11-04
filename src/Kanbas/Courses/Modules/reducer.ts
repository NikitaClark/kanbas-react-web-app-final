// src/Kanbas/Courses/Modules/reducer.ts
import { createSlice } from "@reduxjs/toolkit";
import { modules } from "../../Database";

export interface Module {
  _id: string;
  name: string;
  description?: string;
  course: string;
  lessons: Array<{ _id: string; name: string; description: string; module: string }>;
  editing?: boolean;
}

const initialState = {
  modules: modules as Module[],
};

const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    addModule: (state, { payload: module }) => {
      const newModule: Module = {
        _id: new Date().getTime().toString(),
        lessons: [],
        name: module.name,
        course: module.course,
      };
      state.modules.push(newModule);
    },
    deleteModule: (state, { payload: moduleId }) => {
      state.modules = state.modules.filter((m: Module) => m._id !== moduleId);
    },
    updateModule: (state, { payload: module }) => {
      state.modules = state.modules.map((m: Module) =>
        m._id === module._id ? module : m
      );
    },
    editModule: (state, { payload: moduleId }) => {
      state.modules = state.modules.map((m: Module) =>
        m._id === moduleId ? { ...m, editing: true } : m
      );
    },
  },
});

export const { addModule, deleteModule, updateModule, editModule } = modulesSlice.actions;
export default modulesSlice.reducer;
