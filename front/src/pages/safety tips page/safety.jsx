import React from 'react'
import image2 from '../../assets/pictures/image2.png'
import image3 from '../../assets/pictures/image3.png'
import image4 from '../../assets/pictures/image4.png'
import image5 from '../../assets/pictures/image5.png'
import Pic from '../../assets/pictures/Sorvete_oreo.png'
//'../../assets/pictures/Sorvete_oreo.png'
function safety() {
  return (
    <>
    
    <div><h1>Safety tips</h1></div>
    <div id='' className='h-[100%] w-full grid grid-cols-safetyBlocks '>

      <div id='' className='flex justify-center flex-col items-center'>
        <div id='' className='h-[300px] w-[300px] bg-center bg-cover' style={{backgroundImage: `url(${image2})`}}></div>
        <h2 id=' ' className=' pt-[5px] pb-[5px] text-[#54DDFC] text-[20px] font-[700] tracking-[1px]'>LOCK THE DOORS AND THE WIDOWS</h2>
        <p id='' className='text-center text-[18px] font-[400] tracking-[0.9px]'>Ensure the security of your home by consistently locking doors and windows, even for short absences. Consider the use of deadbolt locks for enhanced security.</p>
      </div>

      <div id='' className='flex justify-center flex-col items-center'>
        <div id='' className='h-[300px] w-[300px] bg-center bg-cover' style={{backgroundImage: `url(${image3})`}}></div>
        <h2  id=' ' className=' pt-[5px] pb-[5px] text-[#54DDFC] text-[20px] font-[700] tracking-[1px]' >SECURITY SYSTEM</h2>
        <p id='' className='text-center text-[18px] font-[400] tracking-[0.9px]'>Boost your home's safety by contemplating the installation of a security system equipped with alarms and monitoring services. Visible security signs and stickers can serve as effective deterrents.</p>
      </div>

      <div id='' className='flex justify-center flex-col items-center'>
        <div id='' className='h-[300px] w-[300px] bg-center bg-cover' style={{backgroundImage: `url(${image4})`}}></div>
        <h2 id=' ' className=' pt-[5px] pb-[5px] text-[#54DDFC] text-[20px] font-[700] tracking-[1px]'>OUTDOOR LIGHTING</h2>
        <p  id='' className='text-center text-[18px] font-[400] tracking-[0.9px]'>Deter trespassers by implementing proper outdoor lighting. Utilize motion-activated lights to illuminate dark areas and enhance the overall visibility around your property.</p>
      </div>

      <div id='' className='flex justify-center flex-col items-center'>
        <div id='' className='h-[300px] w-[300px] bg-center bg-cover' style={{backgroundImage: `url(${image5})`}}></div>
        <h2 id=' ' className=' pt-[5px] pb-[5px] text-[#54DDFC] text-[20px] font-[700] tracking-[1px]'>VALUABLES</h2>
        <p id='' className='text-center text-[18px] font-[400] tracking-[0.9px]'> Safeguard your valuables by keeping them out of sight from windows. Consider investing in a small home safe to secure important documents and possessions, adding an extra layer of protection.</p>
      </div>
    </div>
    </>
  )
}

export default safety