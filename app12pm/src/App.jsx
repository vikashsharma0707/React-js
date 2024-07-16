
//ternary operator




// react spinnner in google

// conditional and logical statment
/*const App=()=>{

  const subject=["php","orracle","java","html","phython"]
  return(

     <>
     <h1>welcome to cybrom</h1>
     {subject.length>0 && <h1>my subject list</h1>}
     </>
  )
}

export default App;*/









import Ccollege from "./Ccollege"
const App=()=>{
  return(
    <>
    <h1>this is college page</h1>
    
    <Ccollege myVal={true}/>
    
    </>


  )
}

export default App;







/*const App=()=>{

  const display=(nm,ct)=>{
     alert("this is cbrom" +nm+"class" +ct.type)
  }



  return(
     <>
     <h1>this is cybrom class</h1>
     <button onClick={(e)=>{display("student",e)}}>click here</button>
     
     </>


  )
}

export default App;*/


/*const App=()=>{

  const display=(e)=>{
     let nm= e.target.name;
     let typ =e.target.type;
     let val=e.target.value;

     alert("name :" +nm +"tpye :" +typ +"value :" + val+e.type) 
  }


  return(
    <>
    <h1> this is cybrom class</h1>
    <button  type="button"  name="btn1"  value="mybtn"  onClick={display}>click here</button>
    
    </>

  )
}

export default App;*/




/*const App=()=>{


     const display=()=>{
        alert("this is react program");
     }


    return(
      <>
       <h1> this is cybrom class</h1>
       <button  onClick={display}>click here</button>
      
      
      
      </>

    )
}

export default App;*/




/*const App=()=>{

const display=(nm)=>{
 
alert("this is react class "+nm)
}
    return(

   <>
   <h1> this is cybrm class</h1>
   <button onClick={()=>{display("cybrom")}}>click here</button>
   
   
   </>


    )
}

export default App;*/


/*const App=()=>{

    const display=(nm,ct)=>{
       alert("thid id " +nm+"claas" +ct)
    }
    return(
     <>
     <h1>this is cybrom class</h1>
     <button onClick={()=>{display("react","cybrom")}}>click here</button>
     </>

    )
}

export default App;*/


/*const App=()=>{

    const Display=(a,b)=>{
          alert(a+b)
    }


    return(
      <>
      <button onClick={()=>{Display("2","3")}}>click here</button>
      
      </>

    )
}

export default App*/