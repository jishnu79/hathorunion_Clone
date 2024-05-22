import React from 'react'
import NavBar from '../LayOut/NavBar'
import FooterBar from '../LayOut/FooterBar'

function Contact() {
  return (
    <div className=' bg-black text-white'>
      <NavBar />
      <div className='my-20 py-10 md:px-20 px-8 bg-dry'>
        <div className='lg:grid lg:grid-cols-2 lg:gap-10 items-center'>
          <div>
            <img src="/image/contact.gif" alt="" className='w-full h-full object-contain' />
          </div>
          <div className='flex lg:gap-10 gap-6  flex-col'>
            <h1 className='text-yellow-400 text-xl font-sans sm:font-bold sm:font-mono sm:text-6xl flex gap-4'>CONTACT <h1 className='font-thin'>US</h1> </h1>
            <p className=' text-xl  text-gray-300 leading-6 xl:leading-8'>
              We guarantee that you will receive a response to all your queries within 24 hours or less.
            </p>

            <div class="flex flex-col gap-6 w-72">
  <div class="relative h-11 w-full min-w-[200px]">
    <input 
      class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-yellow-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
    <label
      class="after:content[' '] pointer-events-none absolute left-0  -top-2.5 flex h-full w-full select-none !overflow-visible truncate text-sm font-normal leading-tight text-yellow-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
      Static
    </label>
  </div>
  <div class="relative h-11 w-full min-w-[200px]">
    <input 
      class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 focus:placeholder:opacity-100" />
    <label
      class="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
      Standard
    </label>
  </div>
  <div class="relative h-10 w-full min-w-[200px]">
    <input placeholder="Outlined" 
      class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
    <label
      class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
      Outlined
    </label>
  </div>
</div>
          </div>
        </div>
      </div>
      <FooterBar />
    </div>
  )
}

export default Contact