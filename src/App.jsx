import React, { useState } from 'react'
import {Routes,Route} from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
 
const App = () => {
  const [isLoggedIn,SetIsLoggedIn] =useState(false);
  return (
    <div className='w-screen h-screen bg-[#130633] flex flex-col '>
     <Navbar isLoggedIn={isLoggedIn} SetIsLoggedIn={SetIsLoggedIn}></Navbar>
     
     <Routes>
         <Route  path="/" element={<Home/>}/>
         <Route path="/AboutUs" element={<AboutUs/>}/>
         <Route path="/contact" element={<ContactUs/>}/>
         <Route  path="/login" element={<Login SetIsLoggedIn={SetIsLoggedIn}/>}/>
         <Route  path="/signup" element={<Signup SetIsLoggedIn={SetIsLoggedIn}/>}/>
         <Route  path="/dashboard" element={<Dashboard/>}/>
         <Route  path="*" element={<Dashboard/>}/>
     </Routes>
    </div>
  )
}

export default App
