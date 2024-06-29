import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Contact";
import Services from "./Pages/Services";
import Nopage from "./Pages/Nopage";


const App=()=>{
   return(
     <>
       <BrowserRouter>
         <Routes>
            <Route  path="/"  element={<Layout/>}>
               <Route  index element={<Home/>}/>
               <Route  path="/home"  element={<Home/>}/>
               <Route  path="/about"  element={<About/>}/>
               <Route  path="/services" element={<Services/>}/>
               <Route  path="/contact"  element={<Contact/>}/>
               <Route path="*"  element={<Nopage/>}/>

               
               

               
               
              

                 
            </Route>






         </Routes>
       </BrowserRouter>
     
     
     </>


   )

}

export default App;