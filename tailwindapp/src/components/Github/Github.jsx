import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Github() {

// const [data,setdata]=useState("")

const data=useLoaderData()
    // useEffect(()=>{

    //     fetch('https://api.github.com/users/Sahbaz4321')
    //     .then((res)=> res.json())
    //     .then((data)=> {
    //         console.log(data)
    // setdata(data)
    // })
    
    // },[])


  return (
    <>

    <div className='text-center m-4 bg-gray-700 text-white p-4
     text-3xl'>
        github folllowers :{data.followers}

        <img src={data.avatar_url} />

    </div>
    </>
  )
}


export const githubinfo=async ()=>{
    const res=await 
        fetch('https://api.github.com/users/Sahbaz4321')
       return res.json()
}