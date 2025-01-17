import React, {useEffect, useState, useContext} from 'react'
import Post from '../../components/post/Post'
import {Link, Navigate} from 'react-router-dom'
import { UserContext } from '../../context/userContext';



function post_page() {
  const [posts, setPosts] = useState([]);
  const {http, setPageName} = useContext(UserContext);

 useEffect(() => {
  fetch(`${http}/postDataHanover_park`, {
    method:'GET',

  })
  .then(response => {
    response.json()
  .then(post => {
    setPosts(post);
    })
  })
  
 }, [])

 const pageName = "Hanover_park"
 setPageName(pageName)

  return (
    <>
      <Link to={{ pathname: '/user_Dashboard/create_post' }}>communities</Link>
        <div id='' className='flex flex-col items-center'>
          <Link to={'/user_Dashboard/create_post'}>
            <button className='xs:w-[90%] sm:w-[80%] md:w-[150px] lg:w-[150px] xl:w-[150px] 2xl:w-[150px] h-[50px] bg-boring-blue rounded-md fixed z-[100] xs:left-[7vw] sm:left-[12.5vw]  md:left-[80vw] lg:left-[85vw] xl:left-[85vw] 2xl:left-[85vw] xs:top-[90vh] sm:top-[90vh] md:top-[85vh] lg:top-[85vh] xl:top-[85vh] 2xl:top-[85vh]' id='create_post_button'>  
              <h1 className='color-[black] font-size-[17px] font-family-[Poppins] font-weight-[500]'>Create Post</h1>
            </button>
          </Link>
          <h1>number3</h1>

          {posts.length > 0 && posts.map(posts => (
            <Post {...posts}/>
          ))}
          
        </div>

      
        
    </>
  )
}

export default post_page
