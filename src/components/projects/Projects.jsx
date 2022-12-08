import React from 'react'
import './projects.css'
import hcap from '../../assets/hcap.png'
import tool from '../../assets/tool.png'
import proxies from '../../assets/proxies.png'
import stealers from '../../assets/stealers.svg'
import ab5 from '../../assets/ab5.png'
import mcbot from '../../assets/mcbot.png'
import gloom from '../../assets/gloom.png'

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
                    <img src={hcap} alt='hcap'/>
                      <h3>machine learning</h3>
                      <p>hcaptcha solver (expired)</p>
                    </div>
                  </div>

                  <div class="card">
                    <div class="icon">
                      {/* <i class="fa-solid fa-robot"></i> */}
                    </div>
                    <div class="info">
                    <img src={tool} alt='tool'/>
                      <h3>cli tools</h3>
                      <p>discord multi tool</p>
                    </div>
                  </div>

                  <div class="card">
                    <div class="icon">
                      {/* <i class="fa-solid fa-robot"></i> */}
                    </div>
                    <div class="info">
                    <img src={proxies} alt='proxies'/>
                      <h3>proxy scraper</h3>
                      <p>scrape free working proxies</p>
                    </div>
                  </div>

                  <div class="card">
                    <div class="icon">
                      {/* <i class="fa-solid fa-robot"></i> */}
                    </div>
                    <div class="info">
                    <img src={stealers} alt='stealers'/>
                      <h3>stealers</h3>
                      <p>steal things obv</p>
                    </div>
                  </div>

                  <div class="card">
                    <div class="icon">
                      {/* <i class="fa-solid fa-robot"></i> */}
                    </div>
                    <div class="info">
                    <img src={ab5} alt='ab5'/>
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
                    <img src={mcbot} alt='mcbot'/>
                      <h3>minecraft botter</h3>
                      <p>raid minecraft servers</p>
                    </div>
                  </div>

                  <div class="card">
                    <div class="icon">
                      {/* <i class="fa-solid fa-robot"></i> */}
                    </div>
                    <div class="info">
                    <img src={gloom} alt='gloom'/>
                      <h3>gloom multi tool website <a href='https://pypi.org/project/ab5/' target='_blank'>click here to visit</a></h3>
                      <p>cool tool fr</p>
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
                    <h1>soon</h1>
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