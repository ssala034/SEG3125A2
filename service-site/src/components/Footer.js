import React from 'react'
import './Footer.css'
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <>
      <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">
          {/* left side */}
          <div className="flexColStart f-left">
            <a href="/">
              <img src={logo} alt='Footerlogo' width={100}/>
            </a>
            <span className="secondaryText">
              Our visions is to make all people <br/>
              be more curious and love learning.
            </span>
          </div>
          {/* right side */}
          <div className="flexColStart f-right">
            <span className='primaryText'>Information</span>
            <span className='secondaryText'> 75 Laurier Ave E, Ottawa, CA</span>
            <div className="flexCenter f-menu">
              <a href="/about" className="f-link">About Us</a>
              <a href="/pricings" className="f-link">Packages</a>
              <a href="/contact" className="f-link">Contact</a>
            </div>
          </div>
        </div>
      </section>
      <div className="footer-credit secondaryText">
        Designed by Shuaib and Yiming | © 2025 All rights reserved
      </div>
    </>
  )
}

export default Footer
