import React from 'react'
import './App.css'
import Home from './components/Home'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {

  return (
    <div className='main-container'>
      <Home 
        name='Harman'
      />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
