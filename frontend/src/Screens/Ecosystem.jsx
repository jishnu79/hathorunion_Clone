import React from 'react'
import NavBar from '../LayOut/NavBar'
import FooterBar from '../LayOut/FooterBar'

function Ecosystem() {
  return (
    <div className=' bg-black text-white'>
      <NavBar />
      <div className=''>
        <img src="/image/eco.png" alt="" />
      </div>
      <div className='md:grid md:grid-cols-2 '>
        <img src="/image/client.gif" className='p-11 sm:w-full' alt="" />
        <div className=' grid grid-cols-1 gap-5  ml-20 sm:ml-28 md:grid md:grid-cols-1 md:ml-1 lg:ml-16 xl:ml-28'>
          <div className='border-solid w-80 text-center   h-16 sm:w-96 border-2 border-white hover:text-main  hover:text-black border- hover:bg-white transition text-white  px-8 py-3 rounded font-medium  sm:text-sm '>
            STARTUP ECOSYSTEM
          </div>
          <div className='border-solid text-1xl w-80 text-center  h-16 sm:w-96 border-2 border-white hover:text-main  hover:text-black border- hover:bg-white transition text-white  px-8 py-3 rounded font-medium  sm:text-sm '>
            STARTUP ECOSYSTEM
          </div>
          <div className='border-solid text-1xl w-80 text-center  h-16 sm:w-96 border-2 border-white hover:text-main  hover:text-black border- hover:bg-white transition text-white  px-8 py-3 rounded font-medium  sm:text-sm '>
            STARTUP ECOSYSTEM
          </div>
        </div>


      </div>
      <FooterBar />
    </div>
  )
}

export default Ecosystem
//md:grid md:grid-cols-1