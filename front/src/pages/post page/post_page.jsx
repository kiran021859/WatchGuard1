
import Post from '../../components/post/Post'
import {Link} from 'react-router-dom'




function post_page() {

 

  return (
    <>
      <Link to='/user_Dashboard/communities'>communities</Link>
      <div id='' className='flex flex-col items-center'>
      <Post/>
      <Post/>
      <Post/>
      </div>
    </>
  )
}

export default post_page
