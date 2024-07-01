import { Link, Outlet } from "react-router-dom"




const Layout=()=>{
  return(
    <>
      <Link  to="home"  >Home</Link>
      <Link  to="about">About</Link>
      <Link to="Services">Service</Link>
      <Link to="Contact">Contact</Link>

      <hr size="4" color="blue"/>

      <Outlet/>

      www.mycompany.com all right reserves. 2024
    
    </>

  )
}

export default Layout;