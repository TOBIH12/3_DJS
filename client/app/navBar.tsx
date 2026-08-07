"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { assets } from "./assets";
import { IoMenuOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";


const NavBar = ({header, about, products, contact}: any) => {
   const [showMobileMenu, setShowMobileMenu] = useState(false);



 useEffect(() => {
    if(showMobileMenu){
        document.body.style.overflow = 'hidden'
    }else{
        document.body.style.overflow = 'auto'
    }

    return () => {
        document.body.style.overflow = 'auto'; // Reset overflow when component unmounts
    }
 }, [showMobileMenu])

  return (
    <div className='fixed top-0 left-0 w-full z-100 bg-white shadow-md'>
        <div className='container flex justify-between items-center py-2 px-2 md:px-5 lg:px-8 w-full'>

            <Link href="/">
            <Image src={assets.DJSLogo} alt="Nav Logo" className="w-[10rem]"></Image>
            </Link>

            <ul className='hidden md:flex gap-7 text-[#1E1E1E]'>
                <a href={header} className='cursor-pointer hover:text-gray-400'>Home</a>
                <a href={products} className='cursor-pointer hover:text-gray-400'>Products</a>
                <a href={about} className='cursor-pointer hover:text-gray-400'>About</a>
                <a href={contact} className='cursor-pointer hover:text-gray-400'>Contact</a>
            </ul>
           

            <IoMenuOutline onClick={() => setShowMobileMenu(true)} className='w-10 cursor-pointer md:hidden' size={30}/>
        </div>
      {/* ------------------------ MOBILE MENU ---------------------------------- */}
       <div className={`md:hidden ${ showMobileMenu ? 'fixed w-full' : 'h-0 w-0'} top-0 right-0 bottom-0 bg-white shadow-lg overflow-hidden transition-all duration-300 ease-in-out z-20`}>
            <div className='flex justify-end p-6 cursor-pointer'> 
                <IoClose onClick={() => setShowMobileMenu(false)} size={30}/>
            </div>
            <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-black text-lg font-semibold'>
                <a href={header} className='px-4 py-2 inline-block hover:bg-gray-200 ' onClick={() => setShowMobileMenu(false)}>Home</a>
                <a href={products} className='px-4 py-2 inline-block hover:bg-gray-200' onClick={() => setShowMobileMenu(false)}>Products</a>
                <a href={about} className='px-4 py-2 inline-block hover:bg-gray-200' onClick={() => setShowMobileMenu(false)}>About</a>
                <a href={contact} className='px-4 py-2 inline-block hover:bg-gray-200' onClick={() => setShowMobileMenu(false)}>Contact</a>
            </ul>
        </div> 


    </div>
  )
}

export default NavBar;
