import { useNavigate } from "react-router-dom";


const About=()=>{
    const navigate =useNavigate();

    const goToHome=()=>{
        navigate("/home")
    }


    return(
     <>
     <h1>this is about page</h1>
     <button onClick={goToHome} >click here</button>
     
     </>

    )
}

export default About;