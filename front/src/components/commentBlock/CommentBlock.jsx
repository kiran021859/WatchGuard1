import React from 'react'
import pic from '../../assets/pictures/Sorvete_oreo.png'

function CommentBlock({Comment}) {
  return (
    <div id='' className=' xs:w-[300px]  grid grid-cols-comment pb-2 pt-4 mb-4 '>
      <div id='' className='w-[100%] h-[100%] flex justify-center'>
        <div id='' className='w-[60px] h-[60px] rounded-[900000px] bg-center bg-cover ' style={{backgroundImage: `url(${pic})`}}></div>
      </div>
      <div id='' className='text-[22px] '>
          <h1>user name</h1>
          <p id='post_text'>{Comment}</p>
      </div>
    </div>
  )
}

export default CommentBlock