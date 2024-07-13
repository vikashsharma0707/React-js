import { Link, Outlet } from "react-router-dom"




const Linkpage=()=>{
    return(
        <>
          <h1>this is linkpage</h1>
          <br/>

           <Link to="home">Home</Link>
          <Link to="about">About</Link>
          <Link to="contact">Contact</Link>
          <Link to="experience">Experience</Link>

          
     <hr  size="3"  className="border border-danger"/>
       <Outlet/>
     <hr/>

        
        
        </>
    )
}

export default Linkpage;