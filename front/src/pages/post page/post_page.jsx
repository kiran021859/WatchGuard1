
import User_navbar from "../../components/navbar/user_navbar";
import Post from '../../components/post/Post'

import Header from "../../components/Header/Header";


function post_page() {

 

  return (
    <>
    <div className=" bg-boring-grey min-h-screen">
      <div className="w-screen grid grid-cols-page bg-[yellow]">
      <div className="bg-[white]">
        <User_navbar/>
      </div>

      <div className="mt-[40px] mx-[50px]">

          <Header></Header>

          <div className="w-full h-[35%] ">
            <Post/>
            <Post/>
            <Post/>
          </div>


      </div> 
      </div>
    </div>
    </>
  )
}

export default post_page
