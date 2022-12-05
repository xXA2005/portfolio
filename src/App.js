import React from 'react'
import './App.css'

// eslint-disable-next-line
import { Article, Navbar } from './components'
// eslint-disable-next-line
import {Footer, Home, Projects, Services} from './containers'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar/>
        <Home/>
        <Projects/>
        {/* https://youtu.be/F627pKNUCVQ?t=5913 */}
      </div>
      {/* <About/> */}
      
      <Services/>
      <Footer/>
    </div>
  )
}

export default App