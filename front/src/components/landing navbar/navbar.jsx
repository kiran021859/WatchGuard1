import React, { useState, useEffect, } from 'react';
import './navbar.css';
import menu from './menu.jpg';
//import open_menu from './navbar1.js';
import {Link} from 'react-router-dom'
import landing from '../../assets/pictures/landing_pic.png'




function Navbar() {





  return (
    <>
  
      <div id='' className=' bg-white h-screen grid grid-cols-navbar'>
        <nav>

          <div className=' flex justify-center items-center' id='nav_heading'>
            <h1><span>W</span>atchGuard</h1>
          </div>
            
          <div id='' className='text-center text-[25px] mt-[10%]'>
            <p>
              Empower your community with [Your App Name], 
              a cutting-edge application designed to enhance 
              safety, security, and connectivity in your 
              neighborhood. Our app serves as a digital hub 
              where residents come together to ensure the 
              well-being of the community.
            </p>
          </div>

          <div id='' className=' h-[25vh] flex flex-col items-center justify-between mt-[15%]'>
            <Link to='/sign_up'><div id='link' className='bg-boring-blue w-[150px] h-[50px] rounded-[5px] text-[20px] font-[500] flex items-center justify-center'>Sign Up</div></Link>
            <Link to='/login'><div id='link' className='bg-boring-blue w-[150px] h-[50px] rounded-[5px] text-[20px] font-[500] flex items-center justify-center'>Login</div></Link>
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
