import React, {useState, useEffect} from 'react'
import User from '../../assets/pictures/user_pic_1.png' 
import './Post.css'

function Post() {

  const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentDateTime(new Date());
      }, 60000); // Update the time every second//
  
      return () => clearInterval(intervalId); // Cleanup the interval when the component unmounts
    }, []);

    const month = String(currentDateTime.getMonth());
    const day = String(currentDateTime.getDate());
    const year = String(currentDateTime.getFullYear());

    const [postLayout, setPostLayout] = useState(true);


    function handleResize () {
      const newWindowWidth = window.innerWidth;
      setPostLayout(newWindowWidth);
  
    
    if (newWindowWidth < 1024) {
      setPostLayout(false);
    } else {
      setPostLayout(true);
    }
    }

    useEffect(() => {
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);





  return (
    <>
    <div id='post_block' className=' bg-[white] border-2 border-slate-950 rounded-lg mt-[30px] mb-[30px]'>

      <div id='profile_div1' className='w-full h-full'>
        <div id='profile_pic' className=' w-[80px] h-[80px] rounded-[100px] bg-center bg-cover' style={{backgroundImage: `url(${User})`}}></div>
      </div>

      <div id='profile_div2' className='w-full h-full '>

        <h2 id='user_name' className='' >User Name</h2>

        <h3 id='posted_time' className='' >posted|<span>time  {day} {month} {year}</span></h3>
        <div id='post_type_div' >
        <div id='post_type' className='flex justify-center items-center' ><h5>Safety</h5></div>
        </div>

        <h1 id='post_heading' className='' >Post Headding Here</h1>
        <div id='post_text_div'>
        <p id='post_text' className='' >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Praesent vitae est sit amet dolor rhoncus fringilla non non lorem. 
          Sed odio nibh, volutpat et urna sodales, mollis malesuada leo. Suspendisse urna ex,
          consectetur bibendum tempor non, mattis id ante. Quisque tristique eu felis euismod 
          sollicitudin. Cras at nisl risus. Cras fringilla vitae libero a pulvinar. Ut euismod 
          justo turpis, in suscipit massa faucibus dapibus. Maecenas quis turpis massa. 
        </p>
        </div>

        <div id='post_tag' className='flex' >
          <div id='' className='' >#freeus</div>
          <div id='' className='' >#saveus</div>
        </div>

        <div id='comments_div'>
          <div id='form_div' className=' mt-[10px] mb-[40px] pr-[130px] gap-6 '>

            <form id='' className='' >
              <input id='comment_input' className='' ></input>
            </form>

            <button id='post_button' className='' >
              Send
            </button>

          </div>
        </div>

      </div>

    </div>
    </>
  )
}

export default Post