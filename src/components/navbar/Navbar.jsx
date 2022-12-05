import React, { useState } from 'react'
import './navbar.css'
// eslint-disable-next-line
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
// import logo from '../../assets/logo.ico'

const Menu = () => (
  <>
  <p><a href='#home'>Ab.5</a></p>
  {/* <p><a href='#about'>about me</a></p> */}
  <p><a href='#projects'>projects</a></p>
  <p><a href='#services'>services</a></p>
  </>
)

const Navbar = () => {
  const [ toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className='xxa__navbar'>
      <div className='xxa__navbar-links'>
        <div className='xxa__navbar-links_logo'>
          {/* <img src={logo} alt='logo' /> */}
        </div>
        <div className='xxa__navbar-links_container'>
          <Menu/>
        </div>
      </div>
      <div className='xxa__navbar-menu'>
        {toggleMenu
        ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)}/>
        : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)}/>
        }
        {toggleMenu && (
          <div className='xxa__navbar-menu_container scale-up-center'>
            <div className='xxa__navbar-menu_container-links'>
              <Menu/>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar

