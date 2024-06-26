/*import Studentss from "./Studentss";
import Newcybrom from "./Newcybrom";

const ans= Studentss.map((key)=> <Newcybrom rno={key.rollno} nm={key.name} ct={key.city}  fs={key.fees} />);

const App=()=>{
  return(
    <>
    <h1 align="center">Our student list</h1>
    <table border="2" bgcolor="blue"  align="center"  width="500">
     <tr bgcolor="red">
      <th>Roll no</th>
      <th>Name</th>
      <th>City</th>
      <th>Fees</th>
     </tr>
     {ans}
    </table>

    </>
  )
}*/

//import { Container } from "react-bootstrap";


/*const App=()=>{
  return(
   <>

   <h1  style={{color:"red", fontFamily:"verdana",   }}>welcome to cybrom</h1>
   <h2 style={{color: "blue"}}>hello</h2>
   
   </>

  )
}*/



/*const App=()=>{
  return(
    // <h1 style={{width:"40px", color:"orange"}}>helo</h1>

    <>
    <div style={{color:"red", border:"10px",width:"200px", height:"200px", backgroundColor:"red", borderRadius:"30%",borderColor:"teal"}}>
      <div style={{ marginTop:"50%", marginLeft:"50%",color:"blue", border:"10px",width:"80px", height:"80px", backgroundColor:"yellow", borderRadius:"30%",borderColor:"black"}}>
        <div style={{color:"pink", border:"10px",width:"40px", height:"40px", backgroundColor:"pink", borderRadius:"30%",borderColor:"teal"}}>

        </div>
      </div>
    </div>
    </>

  )
}*/

// button bootstrap
// import Button from 'react-bootstrap/Button';

// const App=()=>{
//   return(
//     <>
    
//     <h1>welcome to bootstrap</h1>
//     <Button variant="primary">Primary</Button>
//     <br/>
//     <Button variant="danger">Primary</Button>
//     <br/>
//     <Button variant="info">Primary</Button>
//     <br/>
//     <Button variant="warning">Primary</Button>
//     <br/>
//     </>
//   )
// }


// alert
// import Alert from 'react-bootstrap/Alert';
//  import {Container} from "react-bootstrap";

//    const App=()=>{
//     return(
//       <>
//       <Container>
//       <Alert  variant="danger"  dismissible>
//       This is alert box
//     </Alert>
//     <br/>
//     <Alert  variant="info"  dismissible>
//       This is alert box
//     </Alert>


//       </Container>
      
//       </>
//     )
//    }

// badges in bootstrap

/*import Badge from 'react-bootstrap/Badge';

   const App=()=>{
     return(
      <>
       <h1>
        Example heading <Badge bg="secondary">New</Badge>
      </h1>

      <h1>
        Example heading <Badge bg="primary">New</Badge>
      </h1>

      <h1>
        Example heading <Badge bg="danger">New</Badge>
      </h1>

      <h1>
        Example heading <Badge bg="info">New</Badge>
      </h1>
      
      
      </>

     )
   }*/


      // button 
     /*import Button from 'react-bootstrap/Button';
     import ButtonGroup from 'react-bootstrap/ButtonGroup';

     const App=()=>{
      return(
       <>
        <ButtonGroup aria-label="Basic example">
      <Button variant="secondary">Left</Button>
      <Button variant="secondary">Middle</Button>
      <Button variant="secondary">Right</Button>
    </ButtonGroup>
       
       </>


      )
     }*/


      // dropdown
      /*import Dropdown from 'react-bootstrap/Dropdown';


      const App=()=>{
        return(
          <>

<Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
          </>
        )

      }*/


// navbar 
/*import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const App=()=>{
  return(
   <>
   <Navbar bg="danger" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <br/>

      <Navbar bg="info" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
   </>

  )
}*/

/*import Spinner from 'react-bootstrap/Spinner';

 const App=()=>{
  return(
    <>
     <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    
    </Spinner>
    
    </>
  )
 }*/


  /*import Table from 'react-bootstrap/Table';

  const App=()=>{
    return(

      <>

<Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
      
      </>
    )

  }*/

    import { Container, Row,Col } from "react-bootstrap";
    /*const App=()=>{
      return(
        <>
          <Container className="text-center  border bg-info pt-1">   

            <h1>welcome to cybrom Bhoapl</h1>
          </Container>
        
        </>

      )
    }*/

      //import { Container, Row,Col } from "react-bootstrap";

      /*const App=()=>{
        return(

          <>
          <Container   className="border text-center my-5 p-5">
            <Row>
            <Col  className="border bg-danger p-5 text-white fs-1">
               hello we are web developer
            
            </Col>

            <Col  className="border bg-success p-5 text-white fs-1">
            
               welcome to cybrom
            
            </Col>


            </Row>
           

          </Container>
          
          </>
        )
      }*/

        // maximum md  12     
    //import { Container, Row,Col } from "react-bootstrap";
      // const App=()=>{
      //   return(
      //    <>
      //    <Container fluid  className="border p-5 bg-info">
      //     <Row>

      //       <Col md={2} className="bg-danger  text-center  text-white fs-4 p-5">
      //           hello react
      //       </Col>
      //       <Col md={4} className="bg-success  text-center  text-white fs-4 p-5">
      //       hello react
            
      //       </Col>

      //       <Col md={2} className="bg-dark  text-center  text-white fs-4 p-5">
      //       hello react
            
      //       </Col>

      //       <Col md={4} className="bg-primary  text-center  text-white fs-4 p-5">
      //       hello react
            
      //       </Col>
      //     </Row>



      //    </Container>
         
         
      //    </>

      //   )
      // }
 
    //import { Container, Row,Col } from "react-bootstrap";
         // double row and coloumn
      const App=()=>{
        return(
         <>
         <Container fluid  className="border p-5 bg-info">
          <Row>

            <Col  className="bg-danger  text-center  text-white fs-4 p-5">
                hello react
            </Col>
            <Col  className="bg-success  text-center  text-white fs-4 p-5">
            hello react
            
            </Col>

            <Col  className="bg-dark  text-center  text-white fs-4 p-5">
            hello react
            
            </Col>

           
          </Row>

        <br/>

          <Row>

            <Col md={6} className="bg-danger  text-center  text-white fs-4 p-5">
                hello react
            </Col>
            <Col md={3} className="bg-success  text-center  text-white fs-4 p-5">
            hello react
            
            </Col>

            <Col md={3} className="bg-dark  text-center  text-white fs-4 p-5">
            hello react
            
            </Col>

           
          </Row>



         </Container>
         
         
         </>

        )
      }




 export default App;