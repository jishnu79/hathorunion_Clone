import React, { useState } from 'react'
import NavBar from '../LayOut/NavBar'
import FooterBar from '../LayOut/FooterBar'
import './About.css'

function About() {




  return (
    <div className=' bg-black text-white'>
      <NavBar />
      <div>
        <div className='items-center'>
          <h1 className='flex text-yellow-500 text-2xl mt-12 sm:text-5xl justify-center'>MEET OUR  <h1 className='ml-2 font-bold text-2xl sm:text-5xl'> TEAM</h1></h1>
        </div>
        <div className=' '>
          <p className='mt-5 text-sm text-center text-gray-300 leading-6 lg:text-xl xl:text-xl xl:leading-8'>
            WE LOVE WHAT WE DO AND WE DO IT WITH PASSION.
          </p><br />
          <p className='-mt-6 text-sm text-center text-gray-300 lg:text-xl xl:text-xl leading-6  xl:leading-8'>
            VALUE THE EXPERIMENTATION OF THE MESSAGE AND SMART INCENTIVES.
          </p>
        </div>
      </div>
      <div className='p-5 grid gap-8 grid-cols-1 sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-3 lg:gap-10 lg:p-20 mdg:grid md:grid-cols-3 lmd:gap-10 xl:grid xl:grid-cols-3 xl:gap-10  items-center'>
        <div class="container">
          <img src="image/man1.webp" alt="Avatar" class="image" />
          <div class="overlay">
            <h3 class="text">KARMA</h3>
          </div>
        </div>
        <div class="container">
          <img src="image/man1.webp" alt="Avatar" class="image" />
          <div class="overlay">
            <div class="text">Hello World</div>
          </div>
        </div>
        <div class="container">
          <img src="image/man1.webp" alt="Avatar" class="image" />
          <div class="overlay">
            <div class="text">Hello World</div>
          </div>
        </div>
        <div class="container">
          <img src="image/man1.webp" alt="Avatar" class="image" />
          <div class="overlay">
            <div class="text">Hello World</div>
          </div>
        </div>
        <div class="container">
          <img src="image/man1.webp" alt="Avatar" class="image" />
          <div class="overlay">
            <div class="text">Hello World</div>
          </div>
        </div>
        <div class="container">
          <img src="image/man1.webp" alt="Avatar" class="image" />
          <div class="overlay">
            <div class="text">Hello World</div>
          </div>
        </div>
      </div>
      <div className=''>
        <FooterBar />
      </div>
    </div>
  )
}

export default About