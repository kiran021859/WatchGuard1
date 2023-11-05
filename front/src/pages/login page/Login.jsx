import React from 'react'
import {Link} from 'react-router-dom'
import './login_style.css'

function Login() {
  return (
    <>
    <div>
    <div>Login</div>
    <Link to='/sign_up'>Sign Up</Link><br></br>
    <Link to='/login'>Login</Link><br></br>
    <Link to='/'>Landing</Link><br></br>
    <Link to='/user_Dashboard/communities'>Communities</Link>
    </div>
    <div>
      <form action='' className='max-w-[400px] m-auto'>
        <h1 className='text-center text-4xl p-[50px]'>Login</h1>
         <input type='text' placeholder='username' className='block mb-[5px] w-[100%] p-[7px] bg-[#fff] border-solid border-2 border-sky-400 rounded-lg '></input>
         <input type='password' placeholder='password' className='block mb-[5px] w-[100%] p-[7px] bg-[#fff] border-solid border-2 border-sky-400 rounded-lg '></input>
         <button className='w-[100%] block bg-[#555] text-white rounded-sm p-[5px]'>Login</button>
      </form>
    </div>
    </>
  )
}

export default Login