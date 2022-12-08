import React from 'react'
import './App.css'


import {Footer, Home, Projects, Services, Navbar} from './components/index'



const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar/>
        <Home/>
      </div>
      <Projects/>
      <Services/>
      <Footer/>
    </div>
  )
}

export default App