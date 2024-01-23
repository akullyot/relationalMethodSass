//Import required hooks and dependencies
import { useState }              from 'react'
import { NavLink, Link}      from 'react-router-dom';
//Required Media
import logo from '../Assets/Images/Icons/relationMethodLogo.png';
import hamburgerGraphicLeft from '../Assets/Images/readingHamburgerFamily.png';
import hamburgerGraphicRight from '../Assets/Images/readingHamburgerWomen.png';

export default function Navbar(){
  //State Variables
    //Purpose: These three states handle hamburger functionality
    let [linksFading, setLinksFading] = useState(false);
    let [navLinkOpen, setNavLinkOpen] = useState(false);
    let [hamburgerToggle, setHamburgerToggle] = useState(false);

    //Handles Opening the Hamburger
    const handleHamburgerClick = () => {
    setLinksFading(!linksFading);
    setNavLinkOpen(!navLinkOpen);
    setHamburgerToggle(!hamburgerToggle);
    };
    return(
        <nav>
            <div id= "navHome">
                <Link to='/' className="homeLink">
                    <img id='navLogo' src={logo} alt="practice logo"/>                    
                </Link>
                <Link to='/' className="homeLink">
                    <h4 id='navPracticeName'> Relational Method PLLC </h4>
                </Link>
            </div>
            {
                //only shows when the screen size is small enough width
            }
            <div onClick={handleHamburgerClick} className={hamburgerToggle ? 'hamburger toggle': 'hamburger'} >
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div> 
            <ul className={navLinkOpen ? 'linkHolder open': 'linkHolder'}>
                <img id='hamburgerGraphicRight' src={hamburgerGraphicRight} alt="womenReading" className={linksFading ? 'imageFading' : null}/>   
                <li  className={linksFading ? 'fading': null} ><NavLink  className='navLink' to='/aboutme' >About Me</NavLink></li>
                <li  className={linksFading ? 'fading': null} ><NavLink  className='navLink' to='/services' >Services</NavLink></li>
                <li   className={linksFading ? 'fading': null}><NavLink  className='navLink' to='/location' >Location</NavLink></li>
                <li  className={linksFading ? 'fading': null} ><NavLink  className='navLink' to='/insurance' >Insurance/Rates</NavLink></li>
                <li  className={linksFading ? 'fading': null} ><NavLink className='navLink navButton' id='contact' to='/contact' >Contact</NavLink></li>
                <img id='hamburgerGraphicLeft' src={hamburgerGraphicLeft} alt="familyReading" className={linksFading ? 'imageFading' : null}/>   
            </ul>
        </nav>
    )
};