import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'

export default function Profile() {
    const {user}=useContext(UserContext)
    if(!user){
        return <div>Please login to view profile</div>
    }
    else {
        return <div>welcome {user.username}</div>
    }
}
  

