import Bhopal from "./Bhopal";
import Cccybrom from "./Cccybrom";





const Ccollege=(props)=>{
    if(props.myval){
        return(
            <>
             <Bhopal/>
            </>
        )
    }

    else{
    return(
     <>
      <Cccybrom/>

     
     </>

    )
}
}

export default Ccollege;