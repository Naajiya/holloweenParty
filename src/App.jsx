import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
// import 'bootstrmin.css';
import About from './pages/About';
import Hosts from './pages/Hosts';
import Footer from './pages/Footer';




function App() {
 

  return (
    <>
      <Home/>
      <About/>
      <Hosts/>
      <Footer/>
    </>
  )
}

export default App
