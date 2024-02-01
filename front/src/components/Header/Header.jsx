
import react, { useContext, useEffect, useState } from "react";
import {MdOutlineDateRange} from 'react-icons/md';
import { Link } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import './header_style.css'



function Header() {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    const {userInfo, setPageHeading, pageHeading} = useContext(UserContext)

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentDateTime(new Date());
      }, 60000); // Update the time every second
  
      return () => clearInterval(intervalId); // Cleanup the interval when the component unmounts
    }, []);

    const month = currentDateTime.getMonth();
    const day = currentDateTime.getDate();
    const year = currentDateTime.getFullYear();
    
    const username = userInfo?.username
    const pageName = 'Communities'
    setPageHeading(pageName)


    // {username && (
    //   <>
    //   <h1>You Are Loged In</h1>
    //   </>
    // )}
    // {!username && (
    //   <>
    //   <h1>Please Login</h1>
    //   </>
    // )}

  return (
    <div className="flex w-full justify-between">
    <div className="">
    
    <h1 id="heading" className="text-[30px]">{pageHeading}</h1>
    
    </div>

    <div>

    </div>
  </div>
  )
}

export default Header