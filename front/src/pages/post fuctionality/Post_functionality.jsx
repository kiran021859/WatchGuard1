import React, {useState} from 'react';
import './post.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Post_functionality() {
  const  modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ];
  
  

  const [postTitle, setPostTitle] = useState('')
  const [postSummary, setPostSummary] = useState('')
  const [postFiles, setPostFiles] = useState('')
  const [content, setContent] = useState('')


  async function createNewPost (ev) {
    const data = new FormData();
    data.set('Title', postTitle);
    data.set('Summary', postSummary);
    data.set('Content', content);
    data.set('File', postFiles[0] )
    ev.preventDefault();
    const response = await fetch('http://localhost:4000/postData', {
      method: 'POST',
      body: data,
      
    })
    
  }

  return (
    <>
    <form onSubmit={createNewPost} className='flex flex-col w-full h-auto' >

        <input 
        type='title' 
        placeholder='Title' 
        value={postTitle}
        onChange={ev => setPostTitle(ev.target.value)}
        className='block mb-[5px] w-[100%] p-[7px] bg-[#fff] border-solid border-2 border-sky-400 rounded-lg '>

        </input>

        <input 
        type='summary' 
        placeholder='Summary' 
        value={postSummary}
        onChange={ev => setPostSummary(ev.target.value)}
        className='block mb-[5px] w-[100%] p-[7px] bg-[#fff] border-solid border-2 border-sky-400 rounded-lg '>

        </input>

        <input 
        type='file' 
        //value={postFiles.name}
        placeholder='' 
        onChange={ev => setPostFiles(ev.target.files)}
        className='block mb-[5px] w-[100%] p-[7px] bg-[#fff] border-solid border-2 border-sky-400 rounded-lg '>

        </input>

        <ReactQuill 
        value={content} 
        modules={modules} 
        onChange={newValue => setContent(newValue)}
        formats={formats}/>

        <button className='w-[100%] block bg-[#555] text-white rounded-sm p-[5px] mt-[10px]'> Create Post</button>
    </form>
    </>
    
  )
}

export default Post_functionality