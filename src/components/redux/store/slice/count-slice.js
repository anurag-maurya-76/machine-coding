import { createSlice } from "@reduxjs/toolkit";

export const countSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },
    increaseBy: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { decrement, increaseBy, increment } = countSlice.actions;
export default countSlice.reducer;
