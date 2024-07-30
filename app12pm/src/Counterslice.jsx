import { createSlice } from "@reduxjs/toolkit";



const Counterslice=createSlice({

  name:"mycounter",
  initialState:{
    cnt:0
  },

  reducers:{
    myinc:(state)=>{
        state.cnt=state.cnt+1;
    },

    mydec:(state)=>{
      state.cnt=state.cnt-1;
    }
  }


})

export default Counterslice.reducer;
export const{myinc,mydec}=Counterslice.actions;