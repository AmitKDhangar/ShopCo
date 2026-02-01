import { createSlice } from "@reduxjs/toolkit";
export const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addCart: (state, action) => {
      state.push(action.payload);
    },
    removeCart: (state, action) => {
      return state.filter((items) => items.id !== action.payload);
    },
    clearAll: () => {
      return [];
    },
  },
});

export const {addCart,removeCart,clearAll} = CartSlice.actions;
export default  CartSlice.reducer;