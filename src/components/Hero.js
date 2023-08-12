import React from 'react'
import woman from '../assets/woman_hero.png'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className='bg-gray-200 h-[800px] bg-hero bg-no-repeat bg-cover bg-center px-5  py-24'>
      <div className='container max-auto flex justify-start h-full'>
        {/* text */}
        <div className='flex flex-col justify-center  px-10'>
        {/* pretitle */}
          <div className='font-semibold text-xl  flex items-center text-gray-200 uppercase'>
            <div className='w-10 h-[2px]  bg-gray-800 mr-3'></div>New Trend
          </div>
          {/* title */}
          <h1 className='text-[70px] text-gray-200 leading-[1.1] font-light mb-4'>AUTUMN SALE STYLISH <br/>
          <span className='text-gray-200 font-semibold'>MEN</span>
           </h1>
           <Link to={'/'} className='self-start text-gray-200 text-lg uppercase font-semibold border-b-2 border-gray-800'>Discover More</Link>
        </div>
        {/* image */}
        {/* <div className='hidden lg:block'>
          <img src={woman} alt='heroImage' />
        </div> */}
      </div>
    </section>
  )
}

export default Hero
