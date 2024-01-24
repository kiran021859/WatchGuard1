import React from 'react'
import pic from '../../assets/pictures/Sorvete_oreo.png'

function CommentBlock({Comment}) {
  return (
    <div id='' className=' grid grid-cols-comment '>
        <div id='' className='bg-center bg-cover' style={{backgroundImage: `url(${pic})`}}></div>
        <div id='' className=' '>
            <h1> user name</h1>
            <p id='post_text'>{Comment}</p>
        </div>
    </div>
  )
}

export default CommentBlock