import { createSlice } from "@reduxjs/toolkit";
export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: [],
  reducers: {
    addwishList: (state, action) => {
      state.push(action.payload);
    },
    removewishList: (state, action) => {
      return state.filter((items) => items.id !== action.payload);
    },
    clearwishList: (state, action) => {
      return [];
    }
  }
});

export default wishlistSlice.reducer;
export const {addwishList,removewishList,clearwishList} = wishlistSlice.actions;