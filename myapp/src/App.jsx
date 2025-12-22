import React, { useState } from 'react'

export default function App() {
  const [count,setCount]=useState(15);


  const addValue=()=>{
    if(count>=20) setCount(0)
      else 
  setCount(count+1)
console.log("value addedd",count)

}
const removeValue=()=>{
  if(count<=0) setCount(0)
    else 
setCount(count-1)
}
  return (
<>
<h1>chai aur react </h1>
<h2>counter value :{count}</h2>


<h1>heelo
</h1>








<button onClick={addValue}>Add value</button>
<br></br>
 
<button  onClick={removeValue}>remove value</button>


</>

  )
}

