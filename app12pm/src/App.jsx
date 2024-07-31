import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "./todoSlice";


const App=()=>{
  const [val,setVal] =useState("");
  const mytask = useSelector((state)=>state.todolist.task);
  const mydis =useDispatch();
  const taskAdd=()=>{
    mydis(addTask({id: Date.now() ,task:val}))
  }

  let sno=0;
  const ans =mytask.map((key)=>{
    sno++;
    return(
      <>
        <tr>
          <td>{sno}</td>
          <td>{key.task}</td>



        </tr>
      
      </>
    )
  })

  return(
    <>
    <h1>to do app</h1>
    Enter Task;
    <input type="text" value={val} onChange={(e)=>{setVal(e.target.value)}} />
    <button  onClick={taskAdd}>Add</button>
    <hr   size="4"  color="blue"/>
    <table>
      <tr>

        <th>sno</th>
        <th>Task</th>
      </tr>
         {ans}
    </table>
    </>
  )
}

export default App;









/*import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home";
import Registration from "./components/Registration";
import Login from "./components/Login";
import DashBoard from "./components/DashBoard";
const App=()=>{
  return(
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>} >
             <Route index element={<Home/>} />
             <Route path="home" element={<Home/>}/>
             <Route path="registration" element={<Registration/>}/>
             <Route path="login" element={<Login/>}/>
             <Route path="loginyes" element={<DashBoard/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}
export default App;*/
































/*import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeColor } from "./Colorslice";



const App=()=>{

  const myclr= useSelector((state)=>state.mycolor.bgcolor);
  const mydis =useDispatch();
  const [clr,setClr] =useState("");

  return(
    <>
      <h1> React toolkiy</h1>
      Enter your color :<input type="text" value={clr} onChange={(e)=>{setClr(e.target.value)}}/>
      <button  onClick={()=>{mydis(changeColor(clr))}}>change color</button>
      <div style={{width:"500px",height:"300px",backgroundColor:myclr}}>

      </div>
    
    </>
  )
}
export default App;*/






















/*import { useDispatch, useSelector } from "react-redux";
import { mydec, myinc } from "./Counterslice";


const App=()=>{
  const Counter =useSelector((state)=>state.mycounter.cnt);
  const mydis=useDispatch();
  return(
    <>
    <h1>my counter </h1>
    <button  onClick={()=>{mydis(myinc())}}>increment</button>
    <h1>{Counter}</h1>
    <button  onClick={()=>{mydis(mydec())}}>decreemtent</button>
    </>
  )
}

export default App;*/



























/*import  { useContext, useState } from 'react';
import { mybgCcontext } from './Ccolor';


const App = () => {
  const [txtval, setTxtVal] = useState("");
  const { color, setColor } = useContext(mybgCcontext);

  return (
    <>
      <h1>My BG Color App</h1>
      Enter color: <input type="text" value={txtval} onChange={(e) => setTxtVal(e.target.value)} />
      <button onClick={() => setColor(txtval)}>Change color</button>
      <div style={{ width: "400px", height: "300px", border: "1px solid grey", backgroundColor: color }}></div>
    </>
  );
};

export default App;*/















/*import { useContext } from "react";
import { myLoginContext } from "./LoginContext";

import Author from "./Author";
import Unauthor from "./Unauthor";



const App=()=>{
  const {user} =useContext(myLoginContext);
  return(
    <>
      <h1>my login App</h1>
      {user.auth ? <Author/> : <Unauthor/>}
    </>
  )
}

export default App;*/


























/*import { useContext, useState } from "react"
import { mybgContext } from "./Changecolor";



const App=()=>{
  const [txtval,setTxtval] =useState("")
  const [color,setColor] =useContext(mybgContext);
  return(
    <>
       <h1>my bgColor App</h1>
       Enter Color :<input type="text" value={txtval} onChange={(e)=>{setTxtval(e.target.value)}}/>
       <button onClick={()=>{setColor(txtval)}}>Change color</button>

       <div style={{width:"400px",height:"300px",border:"1px solid grey" ,backgroundColor:color}}>

       </div>
    </>
  )
}

export default App*/























/*import Cybrom2 from "./Cybrom2";

const App=()=>{

  return(
    <>
      <h1>my bgcolor App  </h1>
         <Cybrom2/>
     
    </>
  )
}

export default App;*/




























// global state management
//context api
//create context and usecontext


/*import { useState } from "react";
import Bhopal1 from "./Bhopal1";

import { createContext } from "react";

const courseContext= createContext()

const App=()=>{

  const [course,setCourse] = useState("java");

  return(
    <>
  
    <h1> this is app page</h1>
    <courseContext.Provider value={{course}}>
      <Bhopal1/>
    </courseContext.Provider>
    </>
  )
}
export default App;
export {courseContext};*/


















/*import { useState } from "react"


import Componet1 from "./Prop/Compnent1";

const App=()=>{

  const [user,setuser] =useState("jay");
  return(
    <>
    <h1>this is app page {user}</h1>
    <Componet1 user={user}/>
    
    </>
  )

}

export default App*/





























//react hook context hook




















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









/*const App=()=>{
  return(
    <>
   <div style={{width:"200px" , height:"100px" , backgroundColor:"yellow" ,margin:"auto",marginTop:"50px"}}>
   <div style={{width:"100px" , height:"40px" , backgroundColor:"red" ,margin:"auto",marginTop:"100px"}}>
       <div style={{width:"80px" , height:"20px" , backgroundColor:"blue" ,margin:"auto",marginTop:"60px"}}>

       </div>
    </div>
   </div>
   </>

  )
}

export default App;*/




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