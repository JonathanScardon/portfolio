import { useState } from 'react'
import viteLogo from '/vite.svg'
// import './App.css'

import Navigation from "./components/Navigation/Navigation.jsx"
import About from "./components/About/About.jsx"
import Projects from "./components/Projects/Projects.jsx"
import Skills from "./components/Skills/Skills.jsx"

import {SectionContainer} from "./globalStyles.jsx"

function App() {
  return (
    <>
      <Navigation/> 
      <SectionContainer>
        <About/>
        <Projects/>
        <Skills/>
        <br />
      <br />
      <br />
      <br />
      <br />
      </SectionContainer>
    </>
  )
}

export default App
