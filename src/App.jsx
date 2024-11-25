import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Navbar from './components/Navbar'
import Features from './components/Features'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'


const App = () => {
  return (
    <main className = "relative min-h-screen w-screen overflow-x-hidden">
      <Navbar /> 
      <Hero />
      <About />
      <Features />
      <Project />
      <Contact />
      <Footer />
    </main>
  )
}

export default App