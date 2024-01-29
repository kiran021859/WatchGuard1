import React, {useState, useEffect, useContext} from 'react';
import User from '../../assets/pictures/user_pic_1.png' ;
import './Post.css';
import { format, formatISO9075 } from 'date-fns';
import { UserContext } from '../../context/userContext';
import CommentBlock from '../../components/commentBlock/CommentBlock'

function Post({_id, Title, Type, Content, createdAt}) {

  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [comment, setComment] = useState('');
  const [getComments, setGetComments] = useState([]);
  const {http} = useContext(UserContext);
  const [httpRequestSuccess, setHttpRequestSuccess] = useState(false);
  const [commentVisible, setCommentVisible] = useState(false);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentDateTime(new Date());
      }, 60000); // Update the time every second//
  
      return () => clearInterval(intervalId); // Cleanup the interval when the component unmounts
    }, []);


    //get comment data
    useEffect(() => {
      fetch(`${http}/comments?postId=${_id}`, {
        method:'GET',
    
      })
      .then(response => {
        response.json()
      .then(comment => {
        setGetComments(comment);
        })
      })

      
      
      
     }, [])

// get comment data after comment is made
     useEffect(() => {
      fetch(`${http}/comments?postId=${_id}`, {
        method:'GET',
    
      })
      .then(response => {
        response.json()
      .then(comment => {
        setGetComments(comment);
        })
      })

      console.log("get comment data after comment is made");
      setHttpRequestSuccess(false)
    }, [httpRequestSuccess]);

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


    // {formatISO9075(new Date(createdAt))}
   var newCreatedAt = parseInt(createdAt)



  //  const removeTags = (input) => {
  //   return input.replace(/<\/?[^>]+(>|$)/g, "");
  // };

  // const postData = content;

  // const processedData = removeTags(postData);

   async function postComment (ev) {
    ev.preventDefault()
      const response = await fetch(`${http}/comments`, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Comment: comment, 
          PostId: _id,

        }), 

        
      })
  
      if(response.ok) {

        console.log("comment post successfull");
        setHttpRequestSuccess(true); // Trigger re-render
        setComment('')
      }
    }

    const viewComments = () => {
       
      
      if (!commentVisible) {
        setCommentVisible(true);
        //console.log('comment is true');
      }

      if (commentVisible) {
        setCommentVisible(false)
        //console.log('comment is false');
        
      }
    } 


    
  return (
    <>
    <div id='post_block' className=' bg-[white] rounded-lg mt-[30px] mb-[30px]'>

      <div id='profile_div1' className='w-full h-full'>
        <div id='profile_pic' className=' w-[80px] h-[80px] rounded-[100px] bg-center bg-cover' style={{backgroundImage: `url(${User})`}}></div>
      </div>

      <div id='profile_div2' className='w-full h-full '>

        <h2 id='user_name' className='' >User Name</h2>

        <h3 id='posted_time' className=''>posted | <span>{format(new Date(createdAt), 'yyyy-MM-dd HH:mm')}</span></h3>
        <div id='post_type_div' >
        <div id='post_type' className='flex justify-center items-center' ><h5>{Type}</h5></div>
        </div>

        <h1 id='post_heading' className='' >{Title}</h1>
        <div id='post_text_div'>
        <p id='post_text' className='' >
           {Content}
        </p>
        </div>

        <div id='post_tag' className='flex' >
          <div id='' className='' >#freeus</div>
          <div id='' className='' >#saveus</div>
        </div>

        <div id='comments_line' onClick={viewComments} className='h-[50px] w-[90%] flex items-end border-b-2 indigo-50  mb-[20px]'>
          <h2 className='text-[grey]'>Comments</h2>

        </div>

        <div id='comments_div' className={`${ commentVisible? 'open':'closed'}`}>
          <div id='form_div' className=' mt-[10px] mb-[40px] pr-[130px] gap-6 '>

            <form id='form' className='' >
              <input
              type='Comment' 
              placeholder='Create A Comment' 
              value={comment}
              onChange={ev => setComment(ev.target.value)}
              id='comment_input' 
              className='' >
              </input>

              <button id='post_button' className='' onClick={postComment}>
              Send
            </button>
            </form>

            

            <div id='' className=''>
              
              {getComments.length > 0 && getComments.map(comments => (
            <CommentBlock {...comments}/>
          ))}
            </div>

          </div>
        </div>

      </div>

    </div>
    </>
  )
}

export default Post