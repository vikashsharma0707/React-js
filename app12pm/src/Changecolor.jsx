import { createContext, useState } from "react";


const mybgContext =createContext()

const Changecolor=({children})=>{
    const [color,setColor] =useState("pink");
    return(
        <>
        
        <mybgContext.Provider  value={{color,setColor}}>
            {children}
        </mybgContext.Provider>
        </>
    )
}

export default Changecolor;
export {mybgContext};