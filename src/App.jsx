import React from 'react'
import './App.css'
import Home from './components/Home'
import ProjectsRender from './components/ProjectRender'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {

  return (
    <>
      <div className='main-container'>
        <Home 
          name='Harman'
        />
        <ProjectsRender />
        <Contact />
      </div>
    </>
  )
}

export default App
