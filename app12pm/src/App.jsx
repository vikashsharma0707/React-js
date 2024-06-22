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


/*const App=()=>{
  return(
   <>

   <h1  style={{color:"red", fontFamily:"verdana",   }}>welcome to cybrom</h1>
   <h2 style={{color: "blue"}}>hello</h2>
   
   </>

  )
}*/



const App=()=>{
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
}


export default App;