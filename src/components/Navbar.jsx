import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
      <div className="navbar__left">
        <a href="">Art<span>1906</span>_ <br />CREATIVE SHOPS</a>
      </div>
      <div className="navbar__right">
        <ul>
          <li>Services</li>
          <li>Pricing</li>
          <li>Resoures</li>
          <li>Contact</li>
          <li>Meet the Team</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar