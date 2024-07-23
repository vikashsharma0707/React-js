import { createContext, useState } from "react";

const mycolorContext=createContext();
const Colorcontext=({children})=>{
    const [color,setcolor]= useState("red");
    return(
        <>
         <mycolorContext.Provider  value={{color}}>
            {children}
         </mycolorContext.Provider>
        </>
    )
}

export default Colorcontext;
export {mycolorContext};