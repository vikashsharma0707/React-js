import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Service=()=>{
    return(
       <>
         <center>
         <h2 style={{color:"blue"}}> We are Hiring</h2>
         <h1>Let's Meet Our Team</h1>
         <Button  style={{backgroundColor:"white" ,color:"black",borderRadius:"10%"}}>About us</Button>   <Button style={{backgroundColor:"teal",color:"white",borderRadius:"10%"}}>About us</Button>
         </center>

           <Container>
      <Row  style={{margin:"24px" ,padding:"10px",gap:"10px"}}>
        <Col md={4}>
        <Card style={{ width: '14rem', height:"300px", borderBottom:"10px",borderRadius:"20px",border:"2px solid red"}}>
      <img src="./public/b1.jpg "  style={{width:"100%" ,height:"120px" ,borderRadius:"20px"}}/>
      <Card.Body>
        <Card.Title >Card Title</Card.Title>
        <Card.Text>
          Some quick example text to 
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>

        <Col >
        <Card style={{ width: '14rem', height:"300px", borderBottom:"10px",borderRadius:"20px",border:"2px solid red"}}>
      <img src="./public/b1.jpg "  style={{width:"100%" ,height:"120px" ,borderRadius:"20px"}}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to 
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>

        <Col>
        <Card style={{ width: '14rem', height:"300px",borderRadius:"20px",border:"2px solid red"}}>
      <img src="./public/b1.jpg "  style={{width:"100%" ,height:"120px" ,borderRadius:"20px"}}/>
      <Card.Body style={{backgroundColor:"black"}}>
        <Card.Title>Card Title</Card.Title>
        <Card.Text> 
          Some quick example text to 
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>

      </Row>


      <Row  style={{margin:"24px" ,padding:"10px",gap:"10px"}}>
        <Col>
        <Card style={{ width: '14rem', height:"300px", borderBottom:"10px",borderRadius:"20px",border:"2px solid red"}}>
      <img src="./public/b1.jpg "  style={{width:"100%" ,height:"120px" ,borderRadius:"20px"}}/>
      <Card.Body>
        <Card.Title >Card Title</Card.Title>
        <Card.Text>
          Some quick example text to 
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>

        <Col >
        <Card style={{ width: '14rem', height:"300px", borderBottom:"10px",borderRadius:"20px",border:"2px solid red"}}>
      <img src="./public/b1.jpg "  style={{width:"100%" ,height:"120px" ,borderRadius:"20px"}}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to 
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>

        <Col md={4}>
        <Card style={{ width: '14rem', height:"300px",borderRadius:"20px",border:"2px solid red"}}>
      <img src="./public/b1.jpg "  style={{width:"100%" ,height:"120px" ,}}/>
      <Card.Body style={{backgroundColor:"black"}}>
        <Card.Title>Card Title</Card.Title>
        <Card.Text> 
          Some quick example text to 
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>

      </Row>
    </Container>
       
       
       </>

    )
}

export default Service;