import { createAsyncThunk } from "@reduxjs/toolkit";
import { CategoriesByID } from "../../services/storedata";
export const FetchCategories = createAsyncThunk(
  "fetch/categories",
  async (id, ThunkAPI) => {
    try {
      const items = await CategoriesByID(id);
      return items;
    } catch (err) {
      return ThunkAPI.rejectWithValue(err);
    }
  }
);

export default FetchCategories;