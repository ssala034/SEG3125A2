import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">
            {/*left side */}
            <div className="flexColStart f-left">
                <img src='./logo192.png' alt='' width={120}/>
                <span className="secondaryText">
                    Our visions is to make all people <br/>
                    be more curious and love learning.
                </span>
            </div>
            {/*right side */}
            <div className="flexColStart f-right">
                <span className='primaryText'>Information</span>
                <span className='secondaryText'> 75 Laurier Ave E, Ottawa, CA</span>
                <div className="flexCenter f-menu">
                    <span>Services</span>
                    <span>Product</span>
                    <span>About Us</span>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Footer
