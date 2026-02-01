import { createSlice } from "@reduxjs/toolkit";
import FetchCategories from '../slices/asyncthunks/categoryasyncthunk';

export const CategoriesSlice = createSlice({
  name: "category",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(FetchCategories.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(FetchCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    });
    builder.addCase(FetchCategories.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  }
});

export default CategoriesSlice.reducer;
