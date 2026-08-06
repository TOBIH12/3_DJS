"use client"

import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import Image from "next/image";
import { assets } from "./assets";

const Contact = () => {
  return (
    <div className="mx-auto mb-4 py-10 lg:px-32 w-full overflow-hidden" id='Contacts'>

         <h1 className='text-2xl sm:text-4xl mb-2 text-[#00001A] text-center'>Get In Touch</h1>
    <p className='text-center text-gray-500 mb-12 max-w-120 mx-auto'>Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>

    <div className="grid grid-cols-1 md:grid-cols-2 px-10 md:px-1 w-full gap-10 justify-center">
        <div className="flex flex-col gap-4">
            <div className="flex gap-4 border border-gray-200 py-7 px-4 rounded cursor-pointer">
                <FaLocationDot className="text-[#C89A3C] text-5xl" />
                <div>
                    <h2 className="text-lg text-[#00001A] font-medium">Visit Us</h2>
                    <p className="text-gray-500 text-left">123 Fashion Street, Lagos, Nigeria</p>
                </div>
            </div>
           <a href="tel:+2348054949903" className="flex gap-4 border border-gray-200 hover:bg-gray-100 py-7 px-4 rounded cursor-pointer">
                <FaPhoneAlt className="text-[#C89A3C] text-4xl" />
                <div>
                    <h2 className="text-lg text-[#00001A] font-medium">Call Us</h2>
                    <p className="text-gray-500 text-left">+234 805 494 9903</p>
                </div>
            </a>
           <a href="https://www.instagram.com/the3_djs?igsh=NnZ5NjV5ZDZkdm5q" target="_blank" rel="noopener noreferrer" className="flex gap-4 border border-gray-200 hover:bg-gray-100 py-7 px-4 rounded cursor-pointer">
                <FaInstagramSquare className="text-[#C89A3C] text-4xl" />
                <div>
                    <h2 className="text-lg text-[#00001A] font-medium">Follow Us</h2>
                    <p className="text-gray-500 text-left">@the3_DJS</p>
                </div>
            </a>
            <div className=" flex flex-col mt-8 bg-gray-100 py-4 px-8 rounded">
                <h3 className="text-lg mb-4">Store Hours</h3>
                <div className="flex justify-between text-gray-500 mb-2">
                    <p>Monday - Friday</p>
                    <p>9:00 AM - 8:00 PM</p>
                </div>
                <div className="flex justify-between text-gray-500 mb-2">
                    <p>Saturday</p>
                    <p>10:00 AM - 6:00 PM</p>
                </div>
                <div className="flex justify-between text-gray-500">
                    <p>Sunday</p>
                    <p>1:00 PM - 5:00 PM</p>
                </div>
            </div>
        </div>
        <div className="flex flex-col gap-4">
            <a href="https://wa.me/2348054949903" target="_blank" rel="noopener noreferrer" className="flex gap-4 border border-gray-200 hover:bg-gray-100 py-7 px-4 rounded cursor-pointer">
                <FaSquareWhatsapp className="text-[#C89A3C] text-5xl" />
                <div>
                    <h2 className="text-lg text-[#00001A] font-medium">Chat With Us</h2>
                    <p className="text-gray-500 text-left">Click to open WhatsApp</p>
                </div>
            </a>
            <Image src={assets.contactImage} alt="Contact Image" className="w-full h-2/3 mt-2 rounded shadow" />
        </div>
    </div>

      
    </div>
  )
}

export default Contact
