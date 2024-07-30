import { createSlice } from "@reduxjs/toolkit";

const Colorslice= createSlice({
   name: "mycolor",
   initialState:{
    bgcolor:"red"
   },

   reducers:{
    changeColor:(state,actions)=>{
        state.bgcolor=actions.payload;
    }
   }

})

export default Colorslice.reducer
export const {changeColor} =Colorslice.actions