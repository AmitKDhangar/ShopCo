import { createSlice } from "@reduxjs/toolkit";
import fetchingProducts from "./asyncthunks/productsasyncthunk";
export const ProductSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    loading: true,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchingProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchingProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchingProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default ProductSlice.reducer;
