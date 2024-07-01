
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Contact";
import Nopage from "./Pages/Nopage";
import Companyservices from "./Pages/Companyservices";
import Productservices from "./Pages/Productservices";
import Sellservices from "./Pages/Sellservices";

const App=()=>{
   return(
     <>
       <BrowserRouter>
         <Routes>
            <Route  path="/"  element={<Layout/>}>
               <Route  index element={<Home/>}/>
               <Route  path="/home"  element={<Home/>}/>
               <Route  path="/about"  element={<About/>}/>
               <Route  path="/services" element={<Services/>}>
                   <Route path="companyservices" element={<Companyservices/>}/>
                   <Route path="productservies" element={<Productservices/>}/>
                   <Route path="sellsservices" element={<Sellservices/>}/>
               
               
               
               </Route>
                
                  
                   
               <Route  path="/contact"  element={<Contact/>}/>
               <Route path="*"  element={<Nopage/>}/>

               
               

               
               
              

                 
            </Route>





         </Routes>
       </BrowserRouter>
     
     
     </>

   )

}

export default App;
