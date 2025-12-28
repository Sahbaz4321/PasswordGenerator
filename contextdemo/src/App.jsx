import React from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './component/Login'
import Profile from './component/Profile'

export default function App() {
  return (
<>

<UserContextProvider>
  <h1>Context Demo</h1>
  <Login />
  <Profile/>

</UserContextProvider>
</>

  )
}
