import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
<Header/>

{/* outlet kya karta hai uper aur neeche ka content
same rakhega  baki other part ko change karege dynamic
 */}
<Outlet/>
<Footer/>


    </>
  )
}
