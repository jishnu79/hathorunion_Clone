import React from 'react'

function WorkSpace() {
    return (
        <div className='my-20  xl:ml-32 lg:ml-32  lg:px-2 md:ml-32 sm:ml-6 md:p-1 px-8 bg-dry'>
        <div className='lg:grid lg:grid-cols-2 lg:gap-10 items-center'>
        <div>
            <img src="/image/erth.webp" alt="" className='w-full h-full object-contain' />
          </div>
          <div className='flex lg:gap-10 gap-6  flex-col'>
            <h1 className='text-yellow-400 text-xl font-bold sm:font-bold sm:font-mono sm:text-6xl xl:text-7xl'>SUCCESS <h1 className='text-white'>EMPOWERMENT</h1></h1>
            <p className='text-text text-sm sm:text-xl md:w-5/6 lg:text-xl xl:text-xl xl:w-4/5 leading-6 xl:leading-8'>
              Filler text is text that shares some rem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa characteristics of a real written text, but is random or otherwise generated. It may be used to display a sample of fonts, generate text for testing, or to spoof an e-mail spam filter.
            </p>
            <div className='flex gap-5 -mt-4 mb-6 items-center'>
            </div>
          </div>
        
        </div>
      </div>
    )
}

export default WorkSpace