import React, {useState, useContext} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './SignUp_style.css'
import { UserContext } from '../../context/userContext';

function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // State variable for error handling
  const navigate = useNavigate();
  const {http} = useContext(UserContext);

  async function signUp(ev) {
    ev.preventDefault();

    try {
      const response = await fetch(`${http}/register`, {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        navigate('/login')
      } else if (!response.ok) {
        throw new Error('Registration failed');
      }

     
      console.log('Registration successful');
      

    } catch (error) {
      setError('Registration failed'); 
      console.error('Error during registration:', error);
      alert("registration failed")
    }
  }
  return (
    <>
    <div>
    <div>SignUp</div>
    </div>
    <div>
      <form action='' onSubmit={signUp} className='max-w-[400px] m-auto '>
      <h1 className='text-center text-4xl p-[50px]'>Sign up</h1>

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

         <button 
         className='w-[100%] block bg-[#555] text-white rounded-sm p-[5px]'>sign up
         </button>

      </form>
    </div>
    </>
  )
}

export default SignUp