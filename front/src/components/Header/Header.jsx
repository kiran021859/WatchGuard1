
import react, { useContext, useEffect, useState } from "react";
import {MdOutlineDateRange} from 'react-icons/md';
import { Link } from "react-router-dom";
import { UserContext } from "../../context/userContext";


function Header() {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    const {userInfo} = useContext(UserContext)

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
    

  return (
    <div className="flex w-full justify-between">
    <div className="pt-[30px]">
    {username && (
      <>
      <h1>You Are Loged In</h1>
      </>
    )}
    {!username && (
      <>
      <h1>Please Login</h1>
      </>
    )}
    <h1 className="text-[30px]">Welcome back, <span>{username}</span>!</h1>
    <h2 className="text-[17px]">Checkout the latest update in your neighbourhood</h2>
    </div>

    <button id="dateButton" className="flex justify-center items-center w-[166px] h-[58px] bg-transparent rounded-lg border-2 border-[#A7A7A7] text-[#A7A7A7]" >
        <div><MdOutlineDateRange/></div>
        <h3>{String(day)},0{String(month)},{String(year)}</h3>
    </button>
  </div>
  )
}

export default Header