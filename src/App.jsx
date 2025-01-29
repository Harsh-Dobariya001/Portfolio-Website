import React from 'react'
import './App.css'
import Header from './Components/Header'
import Technologies from './Pages/Technologies'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from './Pages/About'
import Contact from './Pages/Contact'
import Profile from './Components/Profile'
import Project from './Pages/Project'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
          <Route path="/technologies" element={<Technologies />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
