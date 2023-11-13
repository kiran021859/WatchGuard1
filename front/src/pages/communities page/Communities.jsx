import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import Communities_block from '../../components/communities/Communities_block'

function Communities() {

  const [communities, setCommunities] = useState([]);

  useEffect(() => {
   fetch('http://localhost:4000/communityData', {
     method:'GET',
 
   }).then(response => {
     response.json().then(post => {
       setCommunities(post);
     })
   })
  }, [])

  


  return (
    <>
    <div><Link to='/user_Dashboard/post'>post page</Link></div>
    <div id=' ' className='grid grid-col-communities grid-row-communities'>
      {communities.length > 0 && communities.map(communities => (
            <Communities_block {...communities}/>
            ))}

    </div>
    </>
  )
}

export default Communities