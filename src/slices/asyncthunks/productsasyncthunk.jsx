import { createAsyncThunk } from "@reduxjs/toolkit";
import { Products } from "../../services/storedata";
export const fetchingProducts = createAsyncThunk("fetch/products", async(_,thunkAPI)=>{
         try{
          const items = await Products();
          return items;
         }
         catch(error){
          return thunkAPI.rejectWithValue(error.message);
         }
})

export default fetchingProducts;