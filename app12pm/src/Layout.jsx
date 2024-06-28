import { Link,Outlet } from "react-router-dom";


const Layout=()=>{
    return(
     <>
     <Link  to="home">Home</Link>
     <Link  to="about">About</Link>
     <Link  to="contact">Contact</Link>

     <hr  size="3"  className="border border-danger"/>
       <Outlet/>
     <hr/>
         www.mycompnay.com 2024
     </>

    )
}

export default Layout;