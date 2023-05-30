import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import './Layout.css'

export default function Layout({userData,Logout}) {
  return (
<div className='background myLayout'>
<Navbar userData={userData} Logout={Logout}/>
    <Outlet/>
</div>
  )
}
