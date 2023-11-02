import React from 'react'
import User from '../../assets/pictures/user_pic_1.png' 
import './post.css'

function Post() {
  return (
    <>
    <div className='w-[800px] min-h-[500px] grid grid-cols-page bg-[white] border-2 border-slate-950 rounded-lg mt-[30px] mb-[30px]'>

      <div id='' className='w-full h-full bg-[blue]'>
        <div id='' className=' w-[100px] h-[100px] rounded-[100px] bg-center bg-cover' style={{backgroundImage: `url(${User})`}}></div>
      </div>

      <div id='' className='w-full h-full bg-[yellow]'>

        <h2 id='user_name' className='' >User Name</h2>

        <h3 id='posted_time' className='' >posted|<span>Time</span></h3>

        <div id='post_type' className='' ><h5>Safety</h5></div>

        <h1 id='post_heading' className='' >Post Headding Here</h1>

        <p id='post_text' className='' >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Praesent vitae est sit amet dolor rhoncus fringilla non non lorem. 
          Sed odio nibh, volutpat et urna sodales, mollis malesuada leo. Suspendisse urna ex,
          consectetur bibendum tempor non, mattis id ante. Quisque tristique eu felis euismod 
          sollicitudin. Cras at nisl risus. Cras fringilla vitae libero a pulvinar. Ut euismod 
          justo turpis, in suscipit massa faucibus dapibus. Maecenas quis turpis massa. 
        </p>

        <div id='' className='flex' >
          <div id='post_tag' className='' >#freeus</div>
          <div id='' className='' >#saveus</div>
        </div>

        <div id='' className='' >

          <form id='' className='' >
            <input id='post_input' className='' ></input>
          </form>

          <button id='post_button' className='' >
            Send
          </button>

        </div>

      </div>

    </div>
    </>
  )
}

export default Post