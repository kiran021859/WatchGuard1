import React from 'react';
import {Link} from 'react-router-dom'
import './user_navbar.css'
import {FaUsers} from 'react-icons/fa'

function User_navbar() {
  return (
    <>
    <div className=' w-[20%] h-screen bg-[white] fixed' id='nav_layout'>

      <div className='bg-[yellow] flex justify-center items-center' id='nav_heading'>
        <h1><span>W</span>atchGuard</h1>
      </div>

      <div className='bg-[green] flex flex-col items-center justify-around' id='nav_routes'>
        <div className='' id='nav_communities'>
          <FaUsers/>
          <h1><Link to='/user_Dashboard/post'>Communities</Link></h1>
        </div>

        <div className='' id='nav_saftey'>
          <h1><Link to='/login'>Safety Tips</Link></h1>
        </div>

        <div className='' id='nav_feedback'>
          <h1><Link to='/login'>Feedback</Link></h1>
        </div>

        <div className='' id='nav_privacy'>
          <h1><Link to='/login'>Privacy</Link></h1>
        </div>

        <div className='' id='nav_help'>
          <h1><Link to='/login'>Help</Link></h1>
        </div>
      </div>
      
      <div className='bg-[blue]' id='nav_buttons'>
        <Link to='/login'>
          <button className='' id='nav_login'>
            <h1>Login</h1>
          </button>
        </Link>

        <Link to=''>
          <button className='' id='nav_signUp'>
          <h1>Sign up</h1>
          </button>
        </Link>
      </div>
    </div>
    </>
  )
}

export default User_navbar