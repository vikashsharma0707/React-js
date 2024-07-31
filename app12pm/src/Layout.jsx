
import { Link, Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Layout=()=>{
    return(
        <>
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">CYBROM</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="registration">Registration</Nav.Link>
            <Nav.Link as={Link} to="login">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        <Outlet/>
        </>
    )
}
export default Layout;



























// import { Link, Outlet } from "react-router-dom"

// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';


// const Layout=()=>{
//   return(
//     <>


    
// <Navbar expand="lg" className=""    style={{backgroundColor:"teal" ,height:"80px"}}>
//       <Container fluid>
//         <Navbar.Brand href="#" style={{fontFamily:"poppins"  ,color:"whitesmoke"}} >Navbar scroll</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="me-auto my-2 my-lg-0"
//             style={{ maxHeight: '100px', marginLeft: "200px"  ,alignItems: "center", textAlign:"center" ,listStyle:"none", color:"red"}}
//             navbarScroll
//           >
//           <Link className="o m-4 " to="home  " style={{fontFamily:"poppins"  ,color:"whitesmoke",fontSize:"24px" ,textDecoration:"none"}} >Home</Link>
//           <Link className="m-4" to="about" style={{fontFamily:"poppins"  ,color:"whitesmoke" ,fontSize:"24px",textDecoration:"none"}}>About</Link>
//           <Link  className="m-4" to="Service" style={{fontFamily:"poppins"  ,color:"whitesmoke",fontSize:"24px",textDecoration:"none"}}>Service</Link>
//           <Link className="m-4" to="Contact" style={{fontFamily:"poppins"  ,color:"whitesmoke",fontSize:"24px",textDecoration:"none"}}>Contact</Link>
            
//             <NavDropdown title="Link" id="navbarScrollingDropdown">
//               <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action4">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action5">
//                 Something else here
//               </NavDropdown.Item>
//             </NavDropdown>
//             <Nav.Link href="#" disabled>
//               Link
//             </Nav.Link>
//           </Nav>
//           <Form className="d-flex"   >
//             <Form.Control  style={{border:"2px solid black"}}
//               type="search"
//               placeholder="Search"
//               className="me-2"
//               aria-label="Search"
//             />
//             <Button variant="outline-success"     style={{border:"2px solid black" ,color:"white"}}>Search</Button>
//           </Form>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//       {/* <Link  to="home"  >Home</Link>
//       <Link  to="about">About</Link>
//       <Link to="Services">Service</Link>
//       <Link to="Contact">Contact</Link> */}

//     {/* <hr size="4" color="blue"/> */}

//       <Outlet/>
      
    
//     </>

//   )
// }

// export default Layout;