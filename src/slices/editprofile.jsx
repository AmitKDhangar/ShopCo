import { createSlice } from "@reduxjs/toolkit";
export const EditprofileSlice = createSlice({
  name: "editprofile",
  initialState: [],
  reducers: {
    addProfile: (state, action) => {
      state.push(action.payload);
    },
   updateProfile: (state, action) => {
  state[0] = { ...state[0], ...action.payload };
},
    deleteProfile:(state,action)=>{
     return [];
    }
  },
});

export default EditprofileSlice.reducer;
export const{addProfile,updateProfile,deleteProfile} = EditprofileSlice.actions;