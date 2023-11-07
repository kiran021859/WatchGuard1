import React from 'react';
import './post.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Post_functionality() {
  return (
    <>
    <form className='flex flex-col w-full h-auto'>

        <input 
        type='title' 
        placeholder='Title' 
        className='block mb-[5px] w-[100%] p-[7px] bg-[#fff] border-solid border-2 border-sky-400 rounded-lg '>

        </input>

        <input 
        type='summary' 
        placeholder='Summary' 
        className='block mb-[5px] w-[100%] p-[7px] bg-[#fff] border-solid border-2 border-sky-400 rounded-lg '>

        </input>

        <input 
        type='file' 
        placeholder='' 
        className='block mb-[5px] w-[100%] p-[7px] bg-[#fff] border-solid border-2 border-sky-400 rounded-lg '>

        </input>

        <ReactQuill/>

        <button className='w-[100%] block bg-[#555] text-white rounded-sm p-[5px] mt-[10px]'> Create Post</button>
    </form>
    </>
    
  )
}

export default Post_functionality