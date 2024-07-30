import { configureStore } from "@reduxjs/toolkit";
import myreducer from "./Colorslice"

const store=configureStore({
    reducer:{
           mycolor:myreducer,
    }

})

export default store;