import { Link, Outlet } from "react-router-dom"


const Layp=()=>{
    return(
        <>
        
        <Link to="home">Home</Link>
        <Link to="about">About</Link>
        <hr/>
        <Outlet/>
         
        </>
    )
}

export default Layp