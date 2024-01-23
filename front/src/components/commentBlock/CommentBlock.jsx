import React from 'react'

function CommentBlock({Comment}) {
  return (
    <div id='' className='bg-[green] grid grid-cols-comment'>
        <div id='' className='bg-[blue]'><h1>pic</h1></div>
        <div id='' className='bg-[yellow]'>
            <p>{Comment}</p>
        </div>
    </div>
  )
}

export default CommentBlock