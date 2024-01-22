import React from 'react'
import image8 from '../../assets/pictures/image8.png'
import image7 from '../../assets/pictures/image7.png'
import image6 from '../../assets/pictures/image6.png'


function Privacy() {
  return (
    <>
    <div>

    </div>
    <div>
      
    </div>
    <div id='' className='h-auto w-full grid grid-cols-privacyBlocks place-content-around '>{/* grid gap-8 grid-cols-privacyBlocks   */}
      {/* Block1 */}
      <div id='' className=' h-[500px] bg-boring-blue flex justify-center flex-col items-center gap-[40px]'>
        <div  id='' className='h-[170px] w-[170px] bg-center bg-cover' style={{backgroundImage: `url(${image8})`}}></div>
        <h2 id='' className='text-[35px]' >Anonymity</h2>
      </div>
      {/* Block2 */}
      <div  id='' className='h-[500px] bg-boring-blue flex justify-center flex-col items-center gap-[40px]'>
        <div  id='' className='h-[170px] w-[170px] bg-center bg-cover' style={{backgroundImage: `url(${image7})`}}></div>
        <h2 id='' className='text-[35px]' >User Information</h2>
      </div>
      {/* Block3 */}
      <div  id='' className='h-[500px] bg-boring-blue flex justify-center flex-col items-center gap-[40px]'>
        <div  id='' className='h-[170px] w-[170px] bg-center bg-cover' style={{backgroundImage: `url(${image6})`}}></div>
        <h2 id='' className='text-[35px]' >Data Security</h2>
      </div>
    </div>
    </>
  )
}

export default Privacy