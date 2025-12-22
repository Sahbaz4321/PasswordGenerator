import { useState } from "react";
import React from 'react'

export default function Counter() {
 
 const [count,setCount]=useState(15);


  const addValue=()=>{
    if(count>=50) setCount(0)
      else 
    {
//   setCount(prev=>prev+1)
//    setCount(prev=>prev+1) 
//    setCount(prev=>prev+1) 
setCount(count+1)
setCount(count+1)
   setCount(prev=>prev+1) 

setCount(count+1)

//    setCount(prev=>prev+1)

 
  
  /*

setCount(count+1)
  setCount(count+1)
  setCount(count+1)
  setCount(count+1) 
 

  interview question hai ab kya value hogi kehna 
  sirf ek baar update hoga 16 value hogi 
  kyu react same useSate cal ko batch karta hai 
  jo updated  hoga uski ko use karege 
  like tumene 4 baar call kiya  jab  react dekhega to wo 
  
  last wale call ko hi consider karega


“React me useState ke multiple setState calls ek hi event ke andar batch ho jaate hain.
Isliye setCount(count + 1) baar-baar likhne par bhi state sirf ek baar update hoti hai.
Agar har update me latest state chahiye ho, to functional update (setCount(prev => prev + 1)) use karna chahiye.”

📌 One-line yaad rakhne layak:

React state updates are asynchronous and batched, so always use functional updates when next state depends on previous state.

  */
}
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