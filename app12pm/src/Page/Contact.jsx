import { useNavigate } from "react-router-dom"




const Contact=()=>{
    const navigate=useNavigate();

    setTimeout(()=>{
        navigate("/home")
    },5000)
    return(
      <>
       <h1>this is contact page</h1>
      
      
      </>

    )
}
export default Contact;