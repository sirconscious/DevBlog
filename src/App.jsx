import React from 'react'
import CardDemo from './ui/components/CardDemo' 
import { ThemeToggle } from './ui/components/ThemeTogle'
import { BrowserRouter , Routes , Route } from 'react-router-dom' 
import LoginPage from './ui/components/pages/LoginPage'
import MainLayout from './ui/components/Layouts/MainLayout' 
import HeroSection from './ui/components/HeroSection'
export default function App() {
  return (
   <>
    <BrowserRouter> 
      <Routes> 
      
      <Route path="/" element={<MainLayout />} > 
        <Route index element={<HeroSection />} /> 
        <Route path='/login' element={<LoginPage/>} />
      </Route>
      </Routes>
    </BrowserRouter>
   </>
  )
}
