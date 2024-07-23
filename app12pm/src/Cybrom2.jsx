import { useContext } from "react";
import { mycolorContext } from "./Colorcontext";



const Cybrom2=()=>{
    const {color} =useContext(mycolorContext)
    return(
        <>
           <h1>welcome to cybrom : {color}</h1>
        </>
    )
}

export default Cybrom2;