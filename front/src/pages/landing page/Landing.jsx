import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../../components/landing navbar/navbar'

function Landing() {
  return (
    <>
    <Navbar/>


    
    <Link to='/login'>Login</Link><br></br>
    <Link to='/sign_up'>Sign Up</Link><br></br>
    <Link to='/'>Landing</Link><br></br>
    <Link to='/user_Dashboard/communities'>Communities</Link>
    </>
  )
}

export default Landing