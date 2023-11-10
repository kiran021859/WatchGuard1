import React, { useState, useEffect, } from 'react';
import './navbar.css';
import menu from './menu.jpg';
import open_menu from './navbar1.js';
import {Link} from 'react-router-dom'




function Navbar() {


    const [headerId, setHeaderId] = useState('landing_header');
  
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setHeaderId('landing_header1');
    } else {
      setHeaderId('landing_header');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  //{`aboutMeContent${myAboutIsVisible ? "-active":""}`}




  return (
    <>
    <nav>
          <div id={headerId} className='w-screen'>
            <div className="logo">
              <a href="#" className="logo">Kir<span>a</span>n.</a>
            </div>

            
              <div className="navlist">
                    <Link to='/sign_up' onClick={open_menu}><div id='link'>Sign Up</div></Link>
                    <Link to='/login' onClick={open_menu}><div id='link'>Login</div></Link>
              </div>
            

            <div className="" id='nav-icon' onClick={open_menu}>
              <img src={menu} alt="Nav_bar"/>
            </div>
          </div>
        </nav> 
    </>
  )
}

export default Navbar
