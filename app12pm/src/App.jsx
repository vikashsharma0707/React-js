
// use navigate hook

// import { BrowserRouter, Route, Routes } from "react-router-dom"
// import Lay from "./Lay"
// import Home from "./Page/Home"
// import About from "./Page/About"
// import Contact from "./Page/Contact"



// const App=()=>{
//   return(
//   <>
//   <BrowserRouter>
//       <Routes>
//         <Route  path="/"   element={<Lay/>}>
//           <Route path="home"  element={<Home/>}/>
//           <Route path="about"  element={<About/>}/>
//           <Route path="contact"  element={<Contact/>}/>



//         </Route>


//       </Routes>
  
  
  
//   </BrowserRouter>
  
//   </>

//   )
// }


// export default App;









const App=()=>{
  return(
    <>
   <div style={{width:"200px" , height:"100px" , backgroundColor:"yellow" ,margin:"auto",marginTop:"50px"}}>
   <div style={{width:"100px" , height:"40px" , backgroundColor:"red" ,margin:"auto",marginTop:"40px"}}>
       <div style={{width:"80px" , height:"20px" , backgroundColor:"blue" ,margin:"auto",marginTop:"60px"}}>

       </div>
    </div>
   </div>
   </>

  )
}

export default App;




/*import Loader from "./Loader";


const App=()=>{
  return(
    <>
    <Loader/>
    
    </>
  )
}

export default App;*/



















//use hook

/*import { useEffect, useRef } from "react";
import { useState } from "react";



const App=()=>{
   const [mydata ,setMydata] =useState("");
   const myref =useRef(0);
   const txtRef =useRef(0);

   useEffect(()=>{
    myref.current=myref.current+1;
   })

   const display=()=>{
    txtRef.current.style.backgroundColor ="pink";
   }

   

  return(
    <>
   <h1>this is cybrom class</h1>
   <textarea value={mydata}  ref={txtRef}  onChange={()=>{setMydata(e.target.value)}}/>
    <h1>Total count :{myref.current}</h1>
    <button  onClick={display}>Click here</button>
   </>
  
  )
}


export default App;*/

// import { useEffect } from "react";
// import { useRef } from "react";
// import { useState } from "react";

// const App=()=>{
//   const [mydata, setMydata] = useState("")

//   const myref= useRef(0);
//   const txtRef =useRef(0);

//   useEffect(()=>{
//     myref.current=myref.current+1
//   })

//   const display=()=>{
//     txtRef.current.style.backgrounColor ="pink";
//   }
//   return(
//    <>
//      <h1>this is cybrom page</h1>
//      <textarea value={mydata} ref={txtRef} onChange={(e)=>{setMydata(e.target.value)}}/>
//       <h1>Toatal count : {myref.current}</h1>
//       <button  onClick={display}>click here</button>  
//    </>


//   )

// }

// export default App;






/*import { useRef } from "react";






const App=()=>{

  const myref= useRef(0);
  const display=()=>{
    myref.current.style.backgroundColor ="yellow"
  }
   return(
    <>
     <h1>this is app page</h1>
     <input type="text" ref={myref}/>
     <button   onClick={display}>click here</button>
     </>
  )
}*/

//export default App;














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









/*import Ccollege from "./Ccollege"
const App=()=>{
  return(
    <>
    <h1>this is college page</h1>
    
    <Ccollege myVal={true}/>
    
    </>


  )
}*/

/*export default App;*/



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