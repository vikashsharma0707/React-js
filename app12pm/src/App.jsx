import Employee from "./Employee";

const nm= "rahul";
const cls="Mtech";
const fees=450000;

const App=()=>{
  return(
    <>
    <h1>welcome</h1>
    <Employee stunm={nm}  cls={cls}  stufees={fees}/>
    </>
  )
}





/*const App=()=>{
  return(
    <>
    <h1>welcome to cybrom</h1>
    <Employee  nm="Arun"  empno="E007"  sal="320000"/>
    </>
  )
  
}*/


export default App;
