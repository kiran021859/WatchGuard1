import react, { useEffect, useState } from "react";


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
    <header>
        <div>
        <h1>Welcome back, User Name</h1>
        <h2>Checkout the latest update in your neighbourhood</h2>
        </div>

    
        <button id="dateButton" className="flex justify-between w-40" >
            <icon></icon>
            <h3>{String(month)}</h3>
            <h3>{String(day)}</h3>
            <h3>{String(year)}</h3>
        </button>

    </header> 
    </>
  )
}

export default post_page
