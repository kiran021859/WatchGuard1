import React from 'react';
import {Link} from 'react-router-dom'
import './user_navbar.css'
import {FaUsers} from 'react-icons/fa'
import {MdFeedback} from 'react-icons/md'
import {MdPrivacyTip} from 'react-icons/md'
import {IoIosHelpCircle} from 'react-icons/io'
import {GiSpartanHelmet} from 'react-icons/gi'

function User_navbar() {
  return (
    <>
    <div className=' w-[20%] h-screen bg-[white] fixed' id='nav_layout'>

      <div className=' flex justify-center items-center' id='nav_heading'>
        <h1><span>W</span>atchGuard</h1>
      </div>

      <div className=' flex flex-col items-center justify-around' id='nav_routes'>
        <div className='' id='nav_communities'>
          <div id='nav_icon_route'>
          <div className='bg-[#54DDFC] flex justify-center items-center rounded-lg' id='nav_icon'><FaUsers/></div>
          <h1><Link to='/user_Dashboard/post'>Communities</Link></h1>
          </div>
        </div>

        <div className='' id='nav_saftey'>
          <div id='nav_icon_route'>
          <div className='flex justify-center items-center rounded-lg' id='nav_icon'><GiSpartanHelmet/></div>
          <h1><Link to='/login'>Safety Tips</Link></h1>
          </div>
        </div>

        <div className='' id='nav_feedback'>
          <div id='nav_icon_route'>
          <div className='flex justify-center items-center rounded-lg' id='nav_icon'><MdFeedback/></div>
          <h1><Link to='/login'>Feedback</Link></h1>
          </div>
        </div>

        <div className='' id='nav_privacy'>
          <div id='nav_icon_route'>
          <div className='flex justify-center items-center rounded-lg' id='nav_icon'><MdPrivacyTip/></div>
          <h1><Link to='/login'>Privacy</Link></h1>
          </div>
        </div>

        <div className='' id='nav_help'>
          <div id='nav_icon_route'>
          <div className='flex justify-center items-center rounded-lg' id='nav_icon'><IoIosHelpCircle/></div>
          <h1><Link to='/login'>Help</Link></h1>
          </div>
        </div>
      </div>
      
      <div className='' id='nav_buttons'>
        <div id='nav-buttons-center'>
          <Link to='/login'>
            <button className='' id='nav_login'>
              <h1>Login</h1>
            </button>
          </Link>
        </div>

        <div id='nav-buttons-center'>
          <Link to=''>
            <button className='' id='nav_signUp'>
            <h1>Sign up</h1>
            </button>
          </Link>
        </div>
        
      </div>
    </div>
    </>
  )
}

export default User_navbar