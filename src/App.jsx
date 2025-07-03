import { useState } from 'react'
import viteLogo from '/vite.svg'
// import './App.css'

import Navigation from "./components/Navigation/Navigation.jsx"
import Hero from "./components/Hero/Hero.jsx"
import Projects from "./components/Projects/Projects.jsx"
import Skills from "./components/Skills/Skills.jsx"
import About from "./components/About/About.jsx"
import Footer from "./components/Footer/Footer.jsx"

import {Layout} from "./globalStyles.jsx"

function App() {
  return (
    <>
      <Layout>
        <Navigation/> 
        <Hero/>
        <Projects/>
        <Skills/>
        <About/>
        <Footer/>
      </Layout>
    </>
  )
}


export default App
