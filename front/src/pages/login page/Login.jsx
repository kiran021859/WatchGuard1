import React, { useState, useContext } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './login_style.css'
import { UserContext } from '../../context/userContext';

function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const {setUserInfo} = useContext(UserContext);
  //const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  async function login (ev) {
    ev.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include'
      })

      if (response.ok) {    

        response.json().then(userInfo => {
          setUserInfo(userInfo)
        })
        navigate('/user_Dashboard/communities')

      } else if (!response.ok) {
        alert('Wrong Credentials');
        throw new Error('login failed');
      }

    } catch (error) {
      setError('login failed'); 
      console.error('Error during login:', error);
      alert("login failed")
    }

  }

  

  return (
    <>
    <div>
    <div>Login</div>
    </div>
    <div>
      <form action='' onSubmit={login} className='max-w-[400px] m-auto'>

        <h1 className='text-center text-4xl p-[50px]'>Login</h1>

        <input 
         type='text' 
         placeholder='username' 
         value={username} 
         onChange={ev => setUsername(ev.target.value)}
         className='block mb-[5px] w-[100%] p-[7px] bg-[#fff] border-solid border-2 border-sky-400 rounded-lg '>

         </input>

         <input 
         type='password' 
         placeholder='password' 
         value={password} 
         onChange={ev => setPassword(ev.target.value)}
         className='block mb-[5px] w-[100%] p-[7px] bg-[#fff] border-solid border-2 border-sky-400 rounded-lg '>

         </input>

         <button className='w-[100%] block bg-[#555] text-white rounded-sm p-[5px]'>Login</button>

      </form>
    </div>
    </>
  )
}

export default Login