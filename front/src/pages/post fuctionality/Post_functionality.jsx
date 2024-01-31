import React, {useState, useContext} from 'react';
import './post.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext';


function Post_functionality() {

  
  const navigate = useNavigate()

  

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
  const [redirect, setRedirect] = useState(false)
  const {http, pageName} = useContext(UserContext);


  

  async function createNewPost (ev) {
    // const data = new FormData();
    // data.set('title', postTitle);
    // data.set('summary', postSummary);
    // data.set('content', content);
    // //data.set('file', postFiles[0] )
     ev.preventDefault();
    // const response = await fetch(`${http}/postData`, {
    //   method: 'POST',
    //   body: data,
      
    // })
    
      console.log(postTitle, postSummary, content);
      const outContent = content.replace(/<\/?p>/g, '');
      const response = await fetch(`${http}/postData${pageName}`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Title: postTitle, 
        Type: postSummary,
        Content: outContent  
      }), 
    })

    if(response.ok) {
      setRedirect(true)
    }

  }

  if(redirect) {

    switch (pageName) {
      case "Athlone":
        console.log("Option A selected");
        navigate('/user_Dashboard/athlone')
        break;
      
      case "Bonteheuwel":
        console.log("Option B selected");
        navigate('/user_Dashboard/bonteheuwel')
        break;
    
      case "Manenberg":
        console.log("Option C selected");
        navigate('/user_Dashboard/manenberg')
        break;

      case "Langa":
          console.log("Option C selected");
          navigate('/user_Dashboard/langa')
          break;


      case "Hanover_park":
          console.log("Option C selected");
          navigate('/user_Dashboard/hanover_park')
          break;
    
      default:
        console.log("Default case: Option not recognized");
        break;
    }
    
  }
  
  return (
    <>
    <form onSubmit={createNewPost} className='flex flex-col w-full h-auto' >

        <input 
        type='title' 
        placeholder='title' 
        value={postTitle}
        onChange={ev => setPostTitle(ev.target.value)}
        className='block mb-[5px] w-[100%] p-[7px] bg-[#fff] border-solid border-2 border-sky-400 rounded-lg '>

        </input>

        <input 
        type='summary' 
        placeholder='Please write one word to describe your post' 
        value={postSummary}
        onChange={ev => setPostSummary(ev.target.value)}
        className='block mb-[5px] w-[100%] p-[7px] bg-[#fff] border-solid border-2 border-sky-400 rounded-lg '>

        </input>

        <input 
        type='file' 
        //value={postFiles.name}
        name='file'
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