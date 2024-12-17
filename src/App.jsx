import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './components/Homepage'
import Works from './components/Works'


const App = () => {
  return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/works" element={<Works />} />
          {/* Add more routes as needed */}
        </Routes>
      </>
    )
  }
  
  export default App