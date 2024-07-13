import { useState } from 'react'
import './App.css'

import LoginSignup from './components/auth/LoginSignup';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';

function App() {

  
  return (
    <>
      
     
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/contact" element={<Contact/>} />
</Routes>

    </>
  )
}

export default App
