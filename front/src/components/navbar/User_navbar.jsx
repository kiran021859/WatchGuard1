import React, {useState, useEffect, useContext} from 'react';
import {Link, useNavigate} from 'react-router-dom'
import './user_navbar.css'
import {FaUsers} from 'react-icons/fa'
import {MdFeedback} from 'react-icons/md'
import {MdPrivacyTip} from 'react-icons/md'
import {IoIosHelpCircle} from 'react-icons/io'
import {GiSpartanHelmet} from 'react-icons/gi'
import {FaGripLinesVertical} from 'react-icons/fa'
import { UserContext } from "../../context/userContext";

function User_navbar() {
  const [navVisible, setNavVisible] = useState(true);
  let [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [navbarSize, setNavbarSize] = useState(false)
  const {setUserInfo, userInfo, http} = useContext(UserContext)
  const navigate = useNavigate()
  
    

  function handleResize () {
    const newWindowWidth = window.innerWidth;
    setWindowWidth(newWindowWidth);

  
  if (newWindowWidth < 768) {
    setNavVisible(false);
  } else {
    setNavVisible(true);
  }

  if (newWindowWidth > 767){
    setNavbarSize(false)
  } else {
    setNavbarSize(true)
  }



  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


   function navShow () {
    if (navVisible){
      setNavVisible(false);
    } else {
      setNavVisible(true);
    }
   }

   useEffect(() => {
    fetch(`${http}/profile`, {
      credentials: 'include'
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo)
      })
    })

  },[])

  async function logout () {
    try {
      const logoutResponse = await fetch(`${http}/logout`, {
      credentials: 'include',
      method: 'POST'
    })
    
    setUserInfo(null);

    if (logoutResponse) {
      navigate('/login');
    }
    
      
    } catch (error) {
      
      console.error('Error during logour:', error);
      alert("logout failed")
    }

    

  }



  return (
    <>
    <div className={`${navVisible ? 'w-[200px]':'w-[5%]'} md:w-[23%] lg:w-[23%] xl:w-[23%] h-screen bg-[white] fixed`} id='nav_bar_button'>
      <div className={`h-full w-full ${navVisible ? 'grid' : 'hidden'}`}>

        <div className=' flex justify-center items-center' id='nav_heading'>
          <h1><span>W</span>atchGuard</h1>
        </div>

        <div className=' flex md:justify-end lg:justify-center' id='nav_routes'>
          <div className='w-full h-[80%] grid'>
            <div className='flex items-center justify-center' id='nav_communities'>
              <div id='nav_icon_route'>
              <div className='bg-[#54DDFC] flex justify-center items-center rounded-lg' id='nav_icon'><FaUsers/></div>
              <h1><Link to='/user_Dashboard/post'>Communities</Link></h1>
              </div>
            </div>

            <div className='flex items-center justify-center' id='nav_saftey'>
              <div id='nav_icon_route'>
              <div className='flex justify-center items-center rounded-lg' id='nav_icon'><GiSpartanHelmet/></div>
              <h1><Link to='/login'>Safety Tips</Link></h1>
              </div>
            </div>

            <div className='flex items-center justify-center' id='nav_feedback'>
              <div id='nav_icon_route'>
              <div className='flex justify-center items-center rounded-lg' id='nav_icon'><MdFeedback/></div>
              <h1><Link to='/login'>Feedback</Link></h1>
              </div>
            </div>

            <div className='flex items-center justify-center' id='nav_privacy'>
              <div id='nav_icon_route'>
              <div className='flex justify-center items-center rounded-lg' id='nav_icon'><MdPrivacyTip/></div>
              <h1><Link to='/login'>Privacy</Link></h1>
              </div>
            </div>

            <div className='flex items-center justify-center' id='nav_help'>
              <div id='nav_icon_route'>
              <div className='flex justify-center items-center rounded-lg' id='nav_icon'><IoIosHelpCircle/></div>
              <h1><Link to='/login'>Help</Link></h1>
              </div>
            </div>
          </div>
        </div>
        
        <div className='' id='nav_buttons'>
          <div className='' id='nav-buttons-center'>
            <Link to='/user_Dashboard/profile'>
              <button className='' id='nav_login'>
                <h1>Profile</h1>
              </button>
            </Link>
          </div>

          <div className='' id='nav-buttons-center'>
            <Link to='' >
              <button className='' id='nav_signUp' onClick={logout}>
              <h1>Logout</h1>
              </button>
            </Link>
          </div>
          
        </div>
      </div>
      
        <button className={`${navbarSize ? '':'hidden'} flex items-center justify-center bg-boring-blue`} id='visible_button' onClick={navShow}><FaGripLinesVertical/></button>
      
    </div>
    </>
  )
}

export default User_navbar