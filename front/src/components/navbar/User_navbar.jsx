import React from 'react';
import {Link} from 'react-router-dom'

function User_navbar() {
  return (
    <>
    <div className='w-full h-full bg-white'>
    <h1>user_navbar</h1>
    <br></br>
    <Link to='/login'>Login</Link>
    <br></br>
    <Link to=''>Sign up</Link>
    
    
    </div>
    </>
  )
}

export default User_navbar