import { data } from './Data/Data'
import React from 'react'
import { FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegCopyright } from "react-icons/fa6";

function FooterBar() {
  return (
    <div className='bg-dry py-4 border-2 border-black items-baseline'>
      <div className='container mx-auto px-2'>
        <div className='grid grid-cols-2 xl:ml-12 md:grid-cols-6 xl:grid-cols-12  gap-5 sm-gap-9 lg:gap-11 xl:gap-7 py-10 justify-between'>
          {
            data.map((link, index) => (
              <div key={index} className='col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-4'>
                <h3 className='text-md lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5'>{link.title} </h3>
                <ul className='text-sm '>{/* flex flex-col */}
                  {
                    link.link.map((text, inde) => (
                      <li className='flex p-1 items-baseline text-border gap-5 hover:text-yellow-500 ' key={inde}>
                        {text.name}
                      </li>
                    ))
                  }

                </ul>
              </div>
            ))
          }
        </div>
      </div>
      <div className='text-center'>
        <h1 className='text-xl font-bold'>Social links</h1>
        <div className='justify-center mt-3 flex gap-3 text-2xl'>
          <FaInstagram />
          <FaGithub />
          <FaFacebook />
          <MdOutlineEmail />
        </div>
      </div>
      <div className='mt-11 flex items-center justify-center'>
        <FaRegCopyright/>
        <p>2023 Hathor union Inc. All rights reserved</p>
      </div>
    </div>
  )
}

export default FooterBar