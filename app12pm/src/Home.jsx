

import Carousel from 'react-bootstrap/Carousel';



const Home=()=>{
    return(
     <>

     
    <Carousel>
      <Carousel.Item>
        <img src="./public/i1.jpg"   style={{width:"80%" ,height:"500px" , marginLeft:"100px"}}/>
        <Carousel.Caption>
        <img src="./public/b1.jpg"   style={{width:"20%" ,height:"50px" , marginLeft:"100px"}}/>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="./public/b1.jpg" style={{width:"100%" ,height:"400px"}}/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="./public/b1.jpg"  style={{width:"100%" ,height:"400px"}}/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      <h1>welcome to my home page</h1>

     
     </>

    )
}

export default Home;