import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './SignUp_style.css'

function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // State variable for error handling

  async function signUp(ev) {
    ev.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/register', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        
        throw new Error('Registration failed');
      }

     
      console.log('Registration successful');
      

    } catch (error) {
      setError('Registration failed'); 
      console.error('Error during registration:', error);
    }
  }
  return (
    <>
    <div>
    <div>SignUp</div>
    <Link to='/sign_up'>Sign Up</Link><br></br>
    <Link to='/login'>Login</Link><br></br>
    <Link to='/'>Landing</Link><br></br>
    <Link to='/user_Dashboard/communities'>Communities</Link>
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