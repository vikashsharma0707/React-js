import College from "./College";
import Students from "./Students";

const ans= Students.map((key)=> <College rno={key.rollno} nm={key.name} ct={key.city}  fs={key.fees} />);

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
}


export default App;