import React from 'react'
import './home.css'
// import image from '../../assets/image.png'


const Home = () => {
  return (
    <div className='xxa__home section__padding' id='home'>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"></link>
      <div className='xxa__home-content'>
        <h1 className='gradient__text'>hi habibi</h1>
        <p>i am Ab.5</p>
          
            <a href="https://discord.com/users/661693178960936970/profile" target="_blank" className='xxa__home-button'><i class="fa-brands fa-discord"></i> Ab.5#3363</a>
            <a href="https://github.com/xXA2005" target="_blank" className='xxa__home-button'><i class="fa-brands fa-github"></i> xXA2005</a>
            <a href="https://www.youtube.com/@ab.5" target="_blank" className='xxa__home-button'><i class="fa-brands fa-youtube"></i> Ab.5</a>
      </div>

      {/* <div className='xxa__home-skills'>
          <img src={image} alt='image'/>
          <div className='xxa__home-skills__box'></div>
      </div> */}

    </div>

  )
}

export default Home