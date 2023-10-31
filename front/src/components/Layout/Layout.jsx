import React from 'react';
import { Outlet } from 'react-router-dom';
import User_navbar from '../navbar/User_navbar';
import Header from '../Header/Header';

function Layout() {
  return (
    <div className=" bg-boring-grey min-h-screen">
      <div className="w-screen grid grid-cols-page bg-[yellow]">
      <div className="bg-[white]">
        <User_navbar/>
      </div>

      <div className="mt-[40px] mx-[50px]">

          <Header></Header>

          <div className="w-full h-full ">
            <Outlet/>
          </div>


      </div> 
      </div>
    </div>
  )
}

export default Layout