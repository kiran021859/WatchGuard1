import React from 'react'
import {Link} from 'react-router-dom'
import Communities_block from '../../components/communities/Communities_block'

function Communities() {
  return (
    <>
    <div><Link to='/user_Dashboard/post'>post page</Link></div>
    <div id=' ' className='grid grid-col-communities grid-row-communities'>
      <div id='' className=' h-full w-full ' ><Communities_block/></div>
      <div id='' className=' h-full w-full' ><Communities_block/></div>
      <div id='' className=' h-full w-full' ><Communities_block/></div>
      <div id='' className=' h-full w-full' ><Communities_block/></div>
      <div id='' className=' h-full w-full' ><Communities_block/></div>
      <div id='' className=' h-full w-full' ><Communities_block/></div>
    </div>
    </>
  )
}

export default Communities