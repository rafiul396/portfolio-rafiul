import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Journey from './components/Journey'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="min-h-screen overflow-x-hidden">
        <Hero />
        <Journey />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        <Toaster />
      </div>
    </div>
  )
}

export default App