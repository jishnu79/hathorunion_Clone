import React, { useState } from 'react';
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

function NavBar() {
    let [open, setOpen] = useState(false);
    const hover = 'hover:text-red-500 transitions text-red-500'
    const Hover = ({ isActive }) => isActive ? 'text-red-500' : hover
    return (
        <div className=' w-full visible z-20  top-0 left-0 bg-gradient-to-r opacity-95 from-black via-black to-green-600 '>
            <div className='md:flex items-center justify-between  py-4 md:px-10 px-7 '>
                {/* logo section */}
                <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                    <img src='image/log.webp' className='w-20 xl:w-20  h-20 object-fill  text-blue-600' />
                </div>
                {/* Menu icon */}
                <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                    {
                        open ? <XMarkIcon /> : <Bars3BottomRightIcon />
                    }
                </div>
                {/* linke items */}
                <ul className={`  md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-15 ml-96' : 'top-[-490px]'}`}>

                    <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                        <Link to='/' className={Hover}>
                            <p className='text-white font-semibold text-xl hover:text-blue-400 duration-500 '>Home</p>
                        </Link>
                    </li>
                    <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                        <Link to='/business' className={Hover}>
                            <p className='text-white font-semibold text-xl hover:text-blue-400 duration-500 '>Business</p>
                        </Link>
                    </li>
                    <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                        <Link to='/brand' className={Hover}>
                            <p className='text-white font-semibold text-xl hover:text-blue-400 duration-500 '>Brand</p>
                        </Link>
                    </li>
                    <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                        <Link to='/ecosysem' className={Hover}>
                            <p className='text-white font-semibold text-xl hover:text-blue-400 duration-500 '>Ecosystem</p>
                        </Link>
                    </li>
                    <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                        <Link to='/about' className={Hover}>
                            <p className='text-white font-semibold text-xl hover:text-blue-400 duration-500 '>About </p>
                        </Link>
                    </li>
                    <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                        <Link to='/contact' className={Hover}>
                            <p className='text-white font-semibold text-xl hover:text-blue-400 duration-500 '>Contact </p>
                        </Link>
                    </li>
                </ul>
                {/* button */}
            </div>
        </div>
    )
}

export default NavBar