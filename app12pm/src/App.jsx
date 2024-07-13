import { BrowserRouter,Routes,Route } from "react-router-dom";
import Linkpage from "./Linkpage";
import Home from "./Pageslink/Home";
import About from "./Pageslink/About";
import Contact from "./Pageslink/Contact";
import Experience from "./Pageslink/Experience";



const App=()=>{
  return(
     <>
     <BrowserRouter>
       <Routes>
          <Route  path="/"   element={<Linkpage/>}>
             <Route index element={<Home/>}/>
             <Route path="home" element={<Home/>}/>
             <Route path="about" element={<About/>}/>
             <Route path="contact" element={<Contact/>}/>
             <Route path="experience" element={<Experience/>}/>




          </Route>




       </Routes>
     
     
     
     
     </BrowserRouter>
     
     
     </>

  )
}




export default App;







/*import Link1 from "./Link1";
import Link2 from "./Link2";

const App=()=>{
  return(
    <>
    <h1>this is App page</h1>
    <hr/>
     <Link1/>
     <Link2/>
    </>


  )
}*/























/*import Llayout from "./Llayout";


const App=()=>{
  return(
   <>
   
   <Llayout/>
   </>

  )
}*/



// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';


// const App=()=>{
//    const display=()=>{
//     console.log(Form);
//    }


//   return(
//    <>
//    <div  style={{width:"400px",margin:"auto"}}>
//    <Form>
    
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control type="email" placeholder="Enter email" />
//         <Form.Text className="text-muted">
//           We'll never share your email with anyone else.
//         </Form.Text>
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control type="password" placeholder="Password" />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicCheckbox">
//         <Form.Check type="checkbox" label="Check me out" />
//       </Form.Group>
//       <Button onClick={display()} variant="primary" type="submit">
//         Submit
//       </Button>
//     </Form>
//     </div>
    
   
//    </>


//   )
// }



// import { useState, useEffect } from "react";
// import axios from "axios";


// import Table from 'react-bootstrap/Table';


// const App=()=>{
//     const [mydata, setMydata] = useState([]);
//     const loadData=()=>{
//          let api="http://localhost:3000/student";
//          axios.get(api).then((res)=>{
//              setMydata(res.data)
//              console.log(res.data);
//          });

//         }


//         useEffect(()=>{
//           loadData();
 
//         },[]);




      
//          const ans= mydata.map((key)=>{

//                return(
//                 <>
//                 <tr> 
//                    <td>{key.rollno}</td>
//                    <td>{key.name}</td>
//                    <td>{key.city}</td>
//                    <td>{key.fees}</td>

//                 </tr>

                
                
//                 </>

//                )

//               });

              
    
  



//   return(
//    <>
//    <h1>welcome to cybrom class</h1>



//    <Table striped bordered hover>
//       <thead>
//         <tr>
//           <th>Roll no</th>
//           <th>name</th>
//           <th>city</th>
//           <th>fes</th>
//         </tr>
//       </thead>
//       {ans}
//     </Table>

//    {/* <table>
    
//           <tr>
//           <th>User Id</th>
//           <th>ID</th>
//           <th>Title</th>
//           <th>Completed</th>



//           </tr>
//           {ans}

//    </table> */}
   
//    </>


//   )
// }

// export default App;
















// import { useState, useEffect } from "react";
// import axios from "axios";


// import Table from 'react-bootstrap/Table';


// const App=()=>{
//     const [mydata, setMydata] = useState([]);
//     const loadData=()=>{
//          let api="http://localhost:3000/student";
//          axios.get(url).then((res)=>{
//              setMydata(res.data)
//              console.log(res.data);
//          });

//         }

//          useEffect(()=>{
//           loadData();

//          },[])


//          let status ="";
//          const ans= mydata.map((key)=>{

//           if(key.completed==true){
//             status= "TRUE";
//           }

//           else{
//             status ="false"
//           }



         

//                return(
//                 <>
//                 <tr> 
//                    <td>{key.userId}</td>
//                    <td>{key.id}</td>
//                    <td>{key.title}</td>
//                    <td>{status}</td>

//                 </tr>

                
                
//                 </>

//                )

//               });
    
  



//   return(
//    <>
//    <h1>welcome to cybrom class</h1>



//    <Table striped bordered hover>
//       <thead>
//         <tr>
//           <th>User ID</th>
//           <th>ID</th>
//           <th>Title</th>
//           <th>Completed</th>
//         </tr>
//       </thead>
//       {ans}
//     </Table>

//    {/* <table>
    
//           <tr>
//           <th>User Id</th>
//           <th>ID</th>
//           <th>Title</th>
//           <th>Completed</th>



//           </tr>
//           {ans}

//    </table> */}
   
//    </>


//   )
// }

// export default App;














// import { BrowserRouter ,Routes,Route } from "react-router-dom"
// import Layout from "./Layout";
// import Home from "./Home";
// import About from "./About";
// import Contact from "./Contact";
// import Nopage from "./Nopage";
// import Service from "./Service";




// const App=()=>{
//   return(
  
//    <>
//     <BrowserRouter>
//         <Routes>
//            <Route path="/"  element={<Layout/>} >
//               <Route path="/home" element={<Home/>}/>
//                <Route path="/home"  element={<Home/>}/>
//                <Route path="/about"  element= {<About/>}/>
//                <Route path="/contact"  element={<Contact/>}/>
//                <Route path="/Service"  element={<Service/>}/>
//                <Route path="/Nopage"   element={<Nopage/>} />
               
           
           
           
//            </Route>

//         </Routes>
    
    
    
//     </BrowserRouter>
   
//    </>
//   )
// }



//  export default App;
