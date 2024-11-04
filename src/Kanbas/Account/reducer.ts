import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null, // Initial state with no user signed in
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload; // Sets the current user in the state
    },
  },
});

export const { setCurrentUser } = accountSlice.actions; // Export the action to set current user
export default accountSlice.reducer; // Export the reducer as default
