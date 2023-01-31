import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const asyncIncrement = createAsyncThunk(
  "counter/incrementAsync",
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return 1;
  }
);

export const asyncDecrement = createAsyncThunk(
  "counter/decrementAsync",
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return -1;
  }
);

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(asyncDecrement.fulfilled, (state, action) => {
        state.value += action.payload;
      })
      .addCase(asyncIncrement.fulfilled, (state, action) => {
        state.value += action.payload;
      });
  },
});

export const selectCount = (state) => state.counter.value;

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
