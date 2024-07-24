import { useContext, useState } from "react";
import { myLoginContext } from "./LoginContext";



const Unauthor=()=>{
    const [nm,setNm]  =useState("");
    const {login} =useContext(myLoginContext)
    return(
        <>
        <h3>User login System</h3>
        Enter name :
        <input type="text" value={nm}  onChange={(e)=>{setNm(e.target.value)}}/>
        <button onClick={()=>{login(nm)}}>Login</button>
        
        </>
    )
}
export default Unauthor;