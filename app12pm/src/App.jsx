import { BrowserRouter ,Routes,Route } from "react-router-dom"
import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Nopage from "./Nopage";




const App=()=>{
  return(
  
   <>
    <BrowserRouter>
        <Routes>
           <Route path="/"  element={<Layout/>} >
              <Route path="/home" element={<Home/>}/>
               <Route path="/home"  element={<Home/>}/>
               <Route path="/about"  element= {<About/>}/>
               <Route path="/contact"  element={<Contact/>}/>
               <Route path="/Nopage"   element={<Nopage/>} />
               
           
           
           
           </Route>


        </Routes>
    
    
    
    </BrowserRouter>
   
   </>
  )
}

export default App;