import React from 'react'
import Pic from '../../assets/pictures/Sorvete_oreo.png'
import User from '../../assets/pictures/user_pic_1.png' 

function Communities_block({Community, people_joined}) {

    // style={'box-shadow: 0px 1px 12px black; border-radius: 9999px'}
  return (
    <>
    <div id='' className='h-[130px] w-full grid grid-cols-insideCommunities border-b-2 border-boring-blue border-solid '>
        <div id='' className='flex justify-center items-center' >
            <div id='' className='h-[60%] w-[80%] rounded-[10000px] bg-center bg-cover' style={{backgroundImage: `url(${Pic})`}}></div>
        </div>
        <div id='' className='flex flex-col justify-center ml-[10%]'>
            <div id='' className=''>
                <h1 className='text-[black] text-[22px] font-[Poppins] font-[400]'>{Community}</h1>
            </div>
            <div id='' className=''>
                <h2 className='text-gray-700     text-[15px] font-[Poppins] font-[400]'><span>{people_joined}</span> | people in the area </h2>
            </div>
        </div>

        <div id='' className='flex justify-center items-center'>
            <button id='' className='h-[60px] w-[200px] bg-boring-blue rounded-lg'>
                <h1 className='color-[black] text-[17px] font-[Poppins] font-[400]'>Join Community</h1>
            </button>
        </div>

    </div>
    </>
  )
}

export default Communities_block