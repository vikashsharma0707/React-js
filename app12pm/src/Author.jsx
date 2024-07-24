import { useContext } from "react";
import { myLoginContext } from "./LoginContext";



const Author=()=>{
    const {user,logout} =useContext(myLoginContext)
    return(
        <>
        <h1>welcome : {user.name}</h1>
        <button onClick={()=>{logout()}}>Logout</button>
        
        </>
    )
}

export default Author;