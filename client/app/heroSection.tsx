import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

const HeroSection = () => {
  return (
    <div className='min-h-[80vh] mb-4 bg-cover bg-center items-center flex w-full overflow-hidden' style={{ backgroundImage: `url('/DJS-background.jpg')`, backgroundColor: `rgb(64, 63, 71)`, backgroundBlendMode: `overlay`}} id='Header'>

        <div className='flex flex-col justify-center items-center text-center w-full'>
        <h1 className='text-5xl sm:text-6xl md:text-[80px] inline-block text-white text-center sm:text-left px-4 sm:px-8 md:px-16 lg:px-24'>
       Elevate Your Style
      </h1>

        <p className='text-lg sm:text-xl md:text-2xl text-[#CFCFCF] text-center px-4 sm:px-8 md:px-16 lg:px-24 mt-4'>
            Discover our carefully curated collection of premium shoes and bags <br /> designed for the modern fashionista
            </p>

            <a href="#products" className='flex justify-between gap-2 bg-[#00001A] px-5 py-3 mt-5 rounded-2xl hover:bg-[#000033] hover:gap-3 transition-all duration-100 ease-in'>
          <h1 className='text-white'>Shop Collections</h1>
          <FaArrowRight className="mt-[5px] text-white"/>
        </a>
        </div>

      
    </div>
  )
}

export default HeroSection
