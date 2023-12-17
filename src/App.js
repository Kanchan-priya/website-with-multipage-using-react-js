import React from 'react'
import Home from './component/Home'
import { Routes, Route } from 'react-router-dom';
import About from './pages/About'
import ServicePage from './pages/ServicePage'
import ContactPage from './pages/ContactPage'
import Error from './pages/Error'


const App = () => {
  return ( 
  <>
  <Routes>
    <Route exact path='/' Component={Home}></Route>
    <Route exact path='/about' Component={About}></Route>
    <Route exact path='/service' Component={ServicePage}></Route>
    <Route exact path='/contact' Component={ContactPage}></Route>
    <Route exact path='/error'  Component={Error}></Route>
  </Routes>
   
   
    </>
  )
}

export default App