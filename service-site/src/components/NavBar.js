import React, {useState} from 'react' 
import logo from '../assets/logo.svg'
import './NavBar.css'
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'
const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false)
  
  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <=800)
    {
      return {right: !menuOpened && "-100%"}
    }
  }
  return (
    <section className='h-wrapper'>
        <div className='paddings innerWidth h-container'f> 
            <a href="/">
              <img src={logo} alt='logo' width={100}/>
            </a>
            <OutsideClickHandler onOutsideClick={() =>{
              setMenuOpened(false)
            }}>
            <div className='h-menu' style={getMenuStyles (menuOpened) }>
                <a href='/'>Home</a>
                <a href='/appointment'>Book Appointment</a>
                <a href='/pricings'>Explore Packages</a>
                <button className='button'>
                    <a href='/contact'>Contact</a>
                </button>
            </div>
            </OutsideClickHandler>

            <div className="home-icon" onClick={()=> setMenuOpened((prev) =>! prev)}>
              <BiMenuAltRight size={30}/>
            </div>

        </div>

       
    </section>
  )
}

export default Header;

