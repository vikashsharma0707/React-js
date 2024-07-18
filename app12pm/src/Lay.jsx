import { Link, Outlet } from "react-router-dom"



const Lay=()=>{
    return(
      <>
      <Link to="home">Home</Link>
      <Link to="about">About</Link>
      <Link to="conatct">Contact</Link>

      <hr/>

      <Outlet/>
      
      
       </>

    )
}

export default Lay;