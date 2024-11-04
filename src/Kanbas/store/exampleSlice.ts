import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ExampleState {
  message: string;
  count: number;
  sum: number;
}

const initialState: ExampleState = {
  message: "Hello, Redux!",
  count: 0,
  sum: 0,
};

const exampleSlice = createSlice({
  name: "example",
  initialState,
  reducers: {
    setMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
    incrementCount: (state) => {
      state.count += 1;
    },
    addToSum: (state, action: PayloadAction<number>) => {
      state.sum += action.payload;
    },
  },
});

export const { setMessage, incrementCount, addToSum } = exampleSlice.actions;
export default exampleSlice.reducer;
