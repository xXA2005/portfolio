import React, { useState } from 'react'
import './projects.css'

const Projects = () => {
  return (
    <div className='xxa__proj' id='projects'>
        <div class="list">
            <div class="head">Projects</div>
            <div class="items">
                
            <div className='item'>
              
                    <a>python</a>
                  <div className='item-about'>

                  <div class="card">
                    <div class="icon">
                      {/* <i class="fa-solid fa-robot"></i> */}
                    </div>
                    <div class="info">
                      <h3>machine learning</h3>
                      <p>hcaptcha solver (expired)</p>
                    </div>
                  </div>

                  <div class="card">
                    <div class="icon">
                      {/* <i class="fa-solid fa-robot"></i> */}
                    </div>
                    <div class="info">
                      <h3>cli tools</h3>
                      <p>discord multi tool</p>
                    </div>
                  </div>

                  <div class="card">
                    <div class="icon">
                      {/* <i class="fa-solid fa-robot"></i> */}
                    </div>
                    <div class="info">
                      <h3>proxy scraper</h3>
                      <p>scrape free working proxies</p>
                    </div>
                  </div>

                  <div class="card">
                    <div class="icon">
                      {/* <i class="fa-solid fa-robot"></i> */}
                    </div>
                    <div class="info">
                      <h3>stealers</h3>
                      <p>steal things obv</p>
                    </div>
                  </div>

                  <div class="card">
                    <div class="icon">
                      {/* <i class="fa-solid fa-robot"></i> */}
                    </div>
                    <div class="info">
                      <h3>ab5 python package</h3>
                      <p>makes your cli colourful <a href='https://pypi.org/project/ab5/' target='_blank'>click here to visit</a></p>
                    </div>
                  </div>

                  </div>
            </div>

            <div className='item'>
              
                    <a>nodejs</a>
                  <div className='item-about'>

                  <div class="card">
                    <div class="icon">
                      {/* <i class="fa-solid fa-robot"></i> */}
                    </div>
                    <div class="info">
                      <h3>minecraft botter</h3>
                      <p>raid minecraft servers</p>
                    </div>
                  </div>

                  <div class="card">
                    <div class="icon">
                      {/* <i class="fa-solid fa-robot"></i> */}
                    </div>
                    <div class="info">
                      <h3>jess bot</h3>
                      <p>soon</p>
                    </div>
                  </div>

                  

                  </div>
            </div>

            <div className='item'>
              
                    <a>c#</a>
                  <div className='item-about'>

                  <div class="card">
                    <div class="icon">
                      {/* <i class="fa-solid fa-robot"></i> */}
                    </div>
                    <div class="info">
                      <h3>.NET framework</h3>
                      <p>gui only cuz learning new</p>
                    </div>
                  </div>

                  </div>
            </div>

            </div>
        </div>
    </div>
  )
}

export default Projects