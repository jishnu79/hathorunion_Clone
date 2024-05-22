import React from 'react'
import NavBar from './NavBar'
import FooterBar from './FooterBar'
import Body from '../Components/Body'
import OurServices from '../Components/OurServices'
import WorkSpace from '../Components/WorkSpace'
import Cultural from '../Components/Cultural'
import Success from '../Components/Success'
import Snake from '../Components/Snake'
import Unloack from '../Components/Unloack'

function LayOut() {
  return (
    <div className=' bg-black text-white'>
        <NavBar/>
        <Body/>
        <OurServices/>
        <WorkSpace/>
        <Cultural/>
        <Success/>
        <Snake/>
        <Unloack/>
        <FooterBar/>
    </div>
  )
}

export default LayOut