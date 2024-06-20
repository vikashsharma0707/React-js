

// map method
/*const age =[24,20,33,34,50];
const myage= age.map((key)=>{
  return(
    <>

    <h1>{key*2}</h1>
    </>
  )

})*/


//option and select tag
/*const city= ["bhopal","indore","rewa","shahdol"];
const myage=city.map((key)=>{
return(
  <>
    <option>{key}</option>

  </>
)


})*/


const subject=["php","oracle","java","phython","react"];
const mysub=subject.map((key)=>{
  return(
    <>
    <li>{key}</li>
    </>
  )
})

const App=()=>{
 return(
  <>
  <h1>welcome to cybrom</h1>
  <ul>
    {mysub}
  </ul>
  </>
 )
}


/*const App=()=>{
return(
  <>
  <h1>welcome to cybrom</h1>
  <select>
  {myage}
  </select>
  </>
)
}*/









// map method
/*const App=()=>{
  const name=["ram","shyam","mohan","sohan"];
  const ans =name.map((key)=>{
    return(
      <>
      <h1>{key}</h1>
      </>
    )
  })

  return(
    <>
    <h1>wlecome to cybrom</h1>
    {ans}

    </>
  )

}*/











// props
// import Student from "./Student"

// const data={
//   "rollno":121,
//   "name": "rahul",
//   "city": "bhopal",
// }

// const App=()=>{
//   return(
//     <>

//     <h1>welcome to cybrom</h1>
//     <Student rno={data.rollno} nm={data.name} ct={data.city}/>
//     </>
//   )
// }

 export default App;