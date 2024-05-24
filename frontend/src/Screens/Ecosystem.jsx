import React from 'react'
import NavBar from '../LayOut/NavBar'
import FooterBar from '../LayOut/FooterBar'

function Ecosystem() {
  return (
    <div className=' bg-black text-white'>
      <NavBar />
      <div class="grid grid-col xl:grid-cols-18 items-center xl:p-10 lg:p-10 p-12">
        <div class="col-start-1 hover:border-4 hover:border-yellow-300 box rounded-full xl:h-16 lg:h-12 md:h-8  h-9 col-end-2 bg-gray-600 text-black md:block hidden ">02</div>
        <div class="col-start-3 hover:border-4 hover:border-yellow-300  rounded-full xl:h-28 lg:h-[70px] md:h-10  h-12 col-end-5 bg-gray-600 text-black md:block hidden">01</div>
        <div class="col-start-6 hover:border-4 hover:border-yellow-300  rounded-full xl:h-[600px] xl:w-[600px] xl:ml-32 lg:ml-24 lg:w-[400px] lg:h-[390px] md:w-[350px] md:h-[350px] md:ml-16 sm:w-[450px] sm:h-[450px]  col-end-9 bg-gray-600 text-black w-60 h-60">
          <div className='xl:mt-40 lg:mt-28 md:mt-20 sm:mt-14'>
            <h1 className='text-white xl:text-6xl lg:text-6xl md:text-6xl  sm:text-5xl sm:mt-28  text-center mt-11 font-bold text-2xl'>HATHOR <h1 className='text-yellow-500'>SYNERGY</h1></h1>
            <p className='text-center font-bold text-white text-xs mt-4'>UNITING DEVELOPERS, USERS, AND STAKEHOLDERS <br /> FOR A THRIVING ECOSYSTEM</p>
            <div className=' px-6  xl:ml-40 lg:ml-16 md:ml-10 sm:ml-20 mt-1 ml-14 '>
              <button type="submit" className="text-white bg-yellow-500 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg text-xs w-16 h-7 ml-2 sm:w-28 sm:ml-12 sm:mt-5  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">
                Join Now!
              </button>
            </div>
          </div>
        </div>
        <div class="col-start-10 hover:border-4 hover:border-yellow-300  rounded-full xl:h-28 lg:h-[80px] md:h-12 h-12 col-end-12  bg-gray-600 text-black md:block hidden">04</div>
        <div class="col-start-13 hover:border-4 hover:border-yellow-300  rounded-full xl:h-16 lg:h-12 md:h-8 col-end-124 bg-gray-600 text-black md:block hidden ">05</div>
      </div>

      <div className='md:grid md:grid-cols-2 mt-12 ml-3'>
        <img src="/image/client.gif" className='p-11 sm:w-full' alt="" />
        <div className=' grid grid-cols-1 gap-5 ml-3 sm:ml-28 md:grid md:grid-cols-1 md:ml-1 lg:ml-16 xl:ml-28'>
          <div className='border-solid w-80 text-center   h-16 sm:w-96 border-2 border-white hover:text-main  hover:text-black border- hover:bg-white transition text-white  px-8 py-3 rounded font-medium  sm:text-sm '>
            STARTUP ECOSYSTEM
          </div>
          <div className='border-solid text-1xl w-80 text-center  h-16 sm:w-96 border-2 border-white hover:text-main  hover:text-black border- hover:bg-white transition text-white  px-8 py-3 rounded font-medium  sm:text-sm '>
            STARTUP ECOSYSTEM
          </div>
          <div className='border-solid text-1xl w-80  text-center  h-16 sm:w-96 border-2 border-white hover:text-main  hover:text-black border- hover:bg-white transition text-white  px-8 py-3 rounded font-medium  sm:text-sm '>
            STARTUP ECOSYSTEM
          </div>
        </div>


      </div>
      <FooterBar />
    </div>
  )
}

export default Ecosystem
{/* <div className='container '>
        <div className='grid xl:grid-cols-5 lg:grid-cols-2 xl:p-8  items-center '>
          <div className='rounded-full w-36 h-36 bg-gray-700 border-solid border-2 border-gray-600'></div>
          <div className='rounded-full w-56 h-56  bg-gray-700 border-solid border-2 border-gray-600'></div>
          <div className='rounded-full w-96 h-96   bg-gray-700 border-solid border-2 border-gray-600 '></div>
          <div className='rounded-full w-56 h-56 xl:ml-40  bg-gray-700 border-solid border-2 border-gray-600 '></div>
          <div className='rounded-full w-36 h-36 xl:ml-44 bg-gray-700 border-solid border-2 border-gray-600'></div>
        </div>
      </div> */}


// lg:grid-cols-6 md:grid-cols-2