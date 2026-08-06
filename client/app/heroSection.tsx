import { FaArrowRight, FaPhone } from 'react-icons/fa6'
import TypewriterText from './components/typewriterText'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <div className='min-h-[80vh] mb-4 bg-cover bg-center items-center flex w-full overflow-hidden' style={{ backgroundImage: `url('/DJS-background.jpg')`, backgroundColor: `rgb(64, 63, 71)`, backgroundBlendMode: `overlay`}} id='Header'>

        <div className='flex flex-col justify-center items-center text-center w-full'>
        <h1 className='text-5xl sm:text-6xl md:text-[80px] inline-block text-white text-center sm:text-left px-4 sm:px-8 md:px-16 lg:px-24'>
       Elevate Your <TypewriterText />
      </h1>

        <p className='text-lg sm:text-xl md:text-2xl text-[#CFCFCF] text-center px-4 sm:px-8 md:px-16 lg:px-24 mt-4'>
            Discover our carefully curated collection of premium shoes and bags <br /> designed for the modern fashionista
            </p>

              <div className='flex flex-col md:flex-row justify-between gap-4'>

              <a href="tel:+23454949903" className='flex justify-center text-center items-center gap-2 hover:gap-3 bg-transparent border border-white text-white px-8 py-1 mt-5 rounded-2xl'>
          <h1>Call Now</h1>
          <FaPhone className="mt-1"/>
        </a>

              <Link href={'/products'} className='flex justify-between bg-[#00001A] px-5 py-3 mt-5 rounded-2xl gap-2 hover:bg-[#000033] hover:gap-3'>
          <h1 className='text-white'>Shop Collections</h1>
          <FaArrowRight className="mt-[5px] text-white"/>
              </Link>

              </div>
        </div>
      
    </div>
  )
}

export default HeroSection
