import React from 'react'
import Navbar from '../NavBar'
import { Outlet } from 'react-router-dom'
export default function MainLayout() {
  return (
    <div>
        <Navbar /> 
        <Outlet />
    </div>
  )
}
