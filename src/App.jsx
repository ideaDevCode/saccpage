import { useState } from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Learn from './components/Learn/Learn'
import Install from './components/Install/Install'
import About from './components/About/About'

function App() {
  return (
    <Routes>
      <Route 
        path="/" 
        element={<Home/>}
      />
      <Route 
        path="/learn" 
        Component={Learn}
      />
      <Route 
        path="/install" 
        Component={Install}
      />
      <Route 
        path="/about" 
        Component={About}
      />
    </Routes>
  )
}

export default App
