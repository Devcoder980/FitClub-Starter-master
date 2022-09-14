import React from 'react'
import Logo from '../../assets/logo.png'
import './Header.css'
function Header() {
  return (
    <div className="header">
        <img src={Logo} className="logo" alt="" />
        <ul className='header-menu'>
            <li>Home</li>
            <li>Programs</li>
            <li>Why use</li>
            <li>Plans</li>
            <li>Testimonials</li>
        </ul>
    </div>
  )
}

export default Header