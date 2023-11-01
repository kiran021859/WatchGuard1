import React from 'react';
import {Link} from 'react-router-dom'
import './user_navbar.css'

function User_navbar() {
  return (
    <>
    <div className='w-full h-screen bg-[white] flex flex-col '>

      <div className='' id='nav_heading'>
        <h1><span>W</span>atchGuard</h1>
      </div>

      <div className=''>
        <div className='' id='nav_communities'>
          <h1><Link to='/login'>Communities</Link></h1>
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
      
      <div className=''>
        <button className='' id='nav_login'>
          <h1><Link to='/login'>Login</Link></h1>
        </button>

        <button className='' id='nav_signUp'>
          <h1><Link to=''>Sign up</Link></h1>
        </button>
      </div>
    </div>
    </>
  )
}

export default User_navbar