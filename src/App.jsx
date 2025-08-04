import React from 'react'
import CardDemo from './ui/components/CardDemo' 
import { ThemeToggle } from './ui/components/ThemeTogle'
import { BrowserRouter , Routes , Route } from 'react-router-dom' 
import LoginPage from './ui/components/pages/LoginPage'
import MainLayout from './ui/components/Layouts/MainLayout' 
import HeroSection from './ui/components/HeroSection' 
import DashboardLayout from './ui/components/Layouts/DashboardLayout'
import AboutPage from './ui/components/pages/AboutPage'
import Mde from './ui/components/Mde'
import CommunityPage from './ui/components/pages/CommunityPage'
import ArticlesPage from './ui/components/pages/ArticlesPage'
import ArticleDetailPage from './ui/components/pages/ArticleDetailPage'
export default function App() {
  return (
   <>
    <BrowserRouter> 
      <Routes> 
      
      <Route path="/" element={<MainLayout />} > 
        <Route index element={<HeroSection />} /> 
        <Route path='/login' element={<LoginPage/>} /> 
        <Route path='/dashboard' element={<DashboardLayout />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/community' element={<CommunityPage />} />
        <Route path='/articles' element={<ArticlesPage />} />
        <Route path='/article/:id' element={<ArticleDetailPage />} />
     
      </Route> 
              <Route path='/mde' element={<Mde/>} />
      </Routes>
    </BrowserRouter>
   </>
  )
}
