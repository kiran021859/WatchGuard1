import React, { useState, useEffect, } from 'react';
//import './navbar.css';
import menu from './menu.jpg';
//import open_menu from './navbar1.js';
import {Link} from 'react-router-dom'
import landing from '../../assets/pictures/landing_pic.png'




function Navbar() {





  return (
    <>
  
      <div id='' className='bg-[yellow] h-screen grid grid-cols-navbar'>
        <nav>
          <div id='' className="">
            <Link to='/sign_up'><div id='link'>Sign Up</div></Link>
            <Link to='/login'><div id='link'>Login</div></Link>
          </div>
        </nav>

        <div id='' className='bg-[blue] flex justify-center'>
          <div id='' className='w-[100%] h-[100%] bg-bottom bg-cover bg-no-repeat ' style={{backgroundImage: `url(${landing})`}}></div>
        </div>

        
          
        

        
      </div>
         
    </>
  )
}

export default Navbar
