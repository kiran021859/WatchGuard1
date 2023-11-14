import React, {useEffect, useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import Communities_block from '../../components/communities/Communities_block'
import { UserContext } from '../../context/userContext';

function Communities() {

  const [communities, setCommunities] = useState([]);
  const {http} = useContext(UserContext);

  useEffect(() => {
   fetch(`${http}/communityData`, {
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