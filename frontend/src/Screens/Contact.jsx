import React, { useState } from 'react'
import NavBar from '../LayOut/NavBar'
import FooterBar from '../LayOut/FooterBar'
import axios from 'axios'
import { message } from 'antd'

function Contact() {
  const API = axios.create({ baseURL: "http://localhost:4000" })
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  const [content, setContent] = useState({
    name: '',
    email: '',
    phone: '',
    catogery: '',
    message: ''
  })
  const handleChange = (e) => {
    setContent({ ...content, [e.target.name]: e.target.value })
  }
  const formHandle = async (e) => {
    e.preventDefault()
    if (content.name && content.email && content.phone && content.catogery && content.message) {
      if (!isValidEmail(content.email)) {
        setError('Email is invalid');
        message.error('Email is invalid')
      } else {
        setError(null)
        const res = await API.post('/contactUs', content)
        if (res.data.success) {
          message.success(res.data.message)
        }else{
          message.error(res.data.message)
        }
      }
    } else {
      message.error("Please fill the colloms")
    }
  }
  return (
    <div className=' bg-black text-white'>
      <NavBar />
      <div className='my-20 -mt-0 py-10 md:px-20 px-8 bg-dry'>
        <div className='lg:grid lg:grid-cols-2 lg:gap-10 items-center'>
          <div>
            <img src="/image/contact.gif" alt="" className='w-full h-full object-contain' />
          </div>
          <div className='flex lg:gap-10 gap-6  flex-col'>
            <h1 className='text-yellow-400 text-xl font-sans sm:font-bold sm:font-mono sm:text-6xl flex gap-4'>CONTACT <h1 className='font-thin'>US</h1> </h1>
            <p className=' text-xl  text-gray-300 leading-6 xl:leading-8'>
              We guarantee that you will receive a response to all your queries within 24 hours or less.
            </p>

            <div class="flex flex-col mt-7 gap-16 w-full sm:grid  sm:grid-cols-2 ">
              <div class="relative h-11 w-full min-w-[200px]">
                <input
                  type='text'
                  name='name'
                  value={content.name}
                  onChange={handleChange}
                  class="peer h-full w-full border-b border-white bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0  transition-all  focus:border-yellow-500 focus:outline-0 disabled:border-0 disabled:bg-yellow-500" />
                <label
                  class="after:content[' '] pointer-events-none absolute left-0  -top-2.5 flex h-full w-full select-none !overflow-visible truncate text-sm font-normal leading-tight text-yellow-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-yellow-400 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-yellow-300 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Name
                </label>
              </div>
              <div class="relative h-11 w-full min-w-[200px]">
                <input
                  type='email'
                  pattern="[^ @]*@[^ @]*"
                  name='email'
                  value={content.email}
                  onChange={handleChange}
                  class="peer h-full w-full border-b border-white bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all  focus:border-yellow-500 focus:outline-0 disabled:border-0 disabled:bg-yellow-500" />
                <label
                  class="after:content[' '] pointer-events-none absolute left-0  -top-2.5 flex h-full w-full select-none !overflow-visible truncate text-sm font-normal leading-tight text-yellow-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-yellow-400 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-yellow-300 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Email
                </label>
              </div>
              <div class="relative h-11 w-full min-w-[200px]">
                <input
                  type='number'
                  name='phone'
                  value={content.phone}
                  onChange={handleChange}
                  class="peer h-full w-full border-b border-white bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all  focus:border-yellow-500 focus:outline-0 disabled:border-0 disabled:bg-yellow-500" />
                <label
                  class="after:content[' '] pointer-events-none absolute left-0  -top-2.5 flex h-full w-full select-none !overflow-visible truncate text-sm font-normal leading-tight text-yellow-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-yellow-400 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-yellow-300 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Phone
                </label>
              </div>
              <div class="relative h-11 w-full min-w-[200px]">
                <input
                  type='text'
                  name='catogery'
                  value={content.catogery}
                  onChange={handleChange}
                  class="peer h-full w-full border-b border-white bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all  focus:border-yellow-500 focus:outline-0 disabled:border-0 disabled:bg-yellow-500" />
                <label
                  class="after:content[' '] pointer-events-none absolute left-0  -top-2.5 flex h-full w-full select-none !overflow-visible truncate text-sm font-normal leading-tight text-yellow-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-yellow-400 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-yellow-300 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Catogery
                </label>
              </div>
              <div class="relative h-11 w-full min-w-[200px]">
                <input
                  type='text'
                  name='message'
                  value={content.meassage}
                  onChange={handleChange}
                  class="peer h-full w-full border-b border-white bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all  focus:border-yellow-500 focus:outline-0 disabled:border-0 disabled:bg-yellow-500" />
                <label
                  class="after:content[' '] pointer-events-none absolute left-0  -top-2.5 flex h-full w-full select-none !overflow-visible truncate text-sm font-normal leading-tight text-yellow-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-yellow-400 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-yellow-300 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Message
                </label>
              </div>
            </div>
            <div className=' px-6 mb-16'>
              <button type="submit" onClick={formHandle} class="text-white bg-yellow-500 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-6 py-2.5 text-center   dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 -ml-5">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
      <FooterBar />
    </div>
  )
}

export default Contact