import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Nav from './components/Nav'
import About from './components/About'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  
  return (
    <BrowserRouter>
      <a name="top"></a>
      <Nav />
      <About />
      <Technologies />
      <Projects />
      <Contact />
    </BrowserRouter>
  )
}

export default App
