"use client"

import Image from "next/image";
import { assets, testimonialsData } from "./assets";

const Testimonials = () => {
  return (
    <div className="container mx-auto mb-4 py-10 lg:px-32 w-full overflow-hidden" id='Testimonials'>
     <h1 className='text-2xl sm:text-4xl mb-2 text-[#00001A] text-center'>What Our Customers Say</h1>
    <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Trusted by thousands of fashion enthusiasts worldwide</p>


    <div className='grid grid-cols-1 md:grid-cols-3 px-10 md:px-1 w-full items-center justify-center gap-8'>
      {
      testimonialsData.map((testimonial, index) => (
        <div key={index} className='w-full md:max-w-[340px] shadow-sm hover:shadow-lg rounded px-8 py-12 text-center'>
          <h2 className='text-xl text-[#C89A3C] font-medium'>{testimonial.name}</h2>
          <p className='text-gray-500 mb-4 text-sm'>{testimonial.title}</p>
          <div className='flex justify-center text-red-500 gap-1 mb-4'>
            {Array.from({ length: testimonial.rating }, (item, index) => (
              <Image key={index} src={assets.starIcon} alt=""></Image>
            ))}
          </div>
          <p className=''>{testimonial.text}</p>

        </div>
      ))
      }
    </div>
    </div>
  )
}

export default Testimonials;
