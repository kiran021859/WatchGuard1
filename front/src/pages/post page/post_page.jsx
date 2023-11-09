import react, {useEffect, useState} from 'react'
import Post from '../../components/post/Post'
import {Link} from 'react-router-dom'




function post_page( ) {
  const [posts, setPosts] = useState([]);

 useEffect(() => {
  fetch('http://localhost:4000/postData', {
    method:'GET',

  }).then(response => {
    response.json().then(post => {
      setPosts(post);
    })
  })
 }, [])

  return (
    <>
      <Link to='/user_Dashboard/communities'>communities</Link>
      <div id='' className='flex flex-col items-center'>
      {posts.length > 0 && posts.map(posts => (
        <Post {...posts}/>
      ))}
      </div>
    </>
  )
}

export default post_page
