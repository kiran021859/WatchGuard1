import React from 'react'
import {Link} from 'react-router-dom'

function SignUp() {
  return (
    <>
    <div>SignUp</div>
    <Link to='/sign_up'>Sign Up</Link><br></br>
    <Link to='/login'>Login</Link><br></br>
    <Link to='/'>Landing</Link><br></br>
    <Link to='/user_Dashboard/communities'>Communities</Link>
    </>
  )
}

export default SignUp