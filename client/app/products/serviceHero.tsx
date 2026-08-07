import { FaPhone } from 'react-icons/fa6'

const serviceHero = () => {
  return (
   <div className='min-h-[80vh] mb-4 bg-cover bg-center items-center flex w-full overflow-hidden' style={{ backgroundImage: `url('/service-hero.jpg')`, backgroundColor: `rgb(64, 63, 71)`, backgroundBlendMode: `overlay`}} id='home'>
   
           <div className='flex flex-col justify-center items-center text-center w-full'>
           <h1 className='text-5xl sm:text-6xl md:text-[80px] inline-block text-white text-center sm:text-left px-4 sm:px-8 md:px-16 lg:px-24'>
          Explore Our Collections
         </h1>
   
           <p className='text-lg sm:text-xl md:text-2xl text-[#CFCFCF] text-center px-4 sm:px-8 md:px-16 lg:px-24 mt-4'>
            Discover the perfect blend of style and quality with our premium fashion handbags and shoes.
               </p>
   
                 <div className='flex flex-col md:flex-row justify-between gap-4'>
   
                 <a href="tel:+2348054949903" className='flex justify-center text-center items-center gap-2 hover:gap-3 bg-transparent border border-white text-white px-8 py-1 mt-5 rounded-2xl'>
             <h1>Call Now</h1>
             <FaPhone className="mt-1"/>
           </a>
                 </div>
           </div>
         
       </div>
  )
}

export default serviceHero
