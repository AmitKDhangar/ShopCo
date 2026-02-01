import { createSlice } from "@reduxjs/toolkit";
const orderSlice = createSlice({
  name: "order",
  initialState: [],
  reducers: {
    addOrder: (state, action) => {
      state.push(action.payload);
    },
    removeOrder: (state, action) => {
      return state.filter((items) => items.id !== action.payload);
    },
    clearOrder: (state, action) => {
      return [];
    },
  },
});
export default orderSlice.reducer;
export const { addOrder, removeOrder, clearOrder } = orderSlice.actions;
