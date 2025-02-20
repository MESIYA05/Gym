import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import Navbar from './Navbar'
import Review from './Review'

const Navrout = () => {
  return (
    <>
      <div className="mes">
       
        <BrowserRouter>
        <Navbar/>
        <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/Services" element={<Services/>}/>
           <Route path="/About" element={<About/>}/>
           <Route path="/Review" element={<Review/>}/>
           <Route path="/Contact" element={<Contact/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default Navrout
