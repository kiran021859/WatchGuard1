import react, { useEffect, useState } from "react";
import User_navbar from "../../components/navbar/user_navbar";
import {MdOutlineDateRange} from 'react-icons/md';


function post_page() {

    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentDateTime(new Date());
      }, 60000); // Update the time every second
  
      return () => clearInterval(intervalId); // Cleanup the interval when the component unmounts
    }, []);

    const month = currentDateTime.getMonth();
    const day = currentDateTime.getDate();
    const year = currentDateTime.getFullYear()

  return (
    <>
    <div className="w-screen h-screen bg-boring-grey grid grid-cols-page">
      <div>
        <User_navbar/>
      </div>

      <div className="mt-[40px] mx-[50px]">

          <div className="flex w-full justify-between">
            <div className="pt-[30px]">
            <h1 className="text-[30px]">Welcome back, <span>User Name</span>!</h1>
            <h2 className="text-[17px]">Checkout the latest update in your neighbourhood</h2>
            </div>

            <button id="dateButton" className="flex justify-center items-center w-[166px] h-[58px] bg-transparent rounded-lg border-2 border-[#A7A7A7] text-[#A7A7A7]" >
                <div><MdOutlineDateRange/></div>
                <h3>{String(day)},0{String(month)},{String(year)}</h3>
            </button>
          </div>

          <div className="">
            
          </div>


      </div> 
    </div>
    </>
  )
}

export default post_page
