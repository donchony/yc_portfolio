import React from 'react'
import Hero from './Hero'
import About from './About'
import Features from './Features'
import Project from './Project'
import Contact from './Contact'
import Footer from './Footer'

const HomePage = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Hero id="hero" />
      <About id="about" />
      <Features id="features" />
      <Project id="project" />
      <Contact id="contact" />
      <Footer />
    </main>
  )
}

export default HomePage
