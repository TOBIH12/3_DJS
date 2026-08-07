import { MdWorkspacePremium } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
import Image from "next/image";
import { assets } from "./assets";

const AboutPage = () => {
  return (
    <div className="flex flex-col md:flex-row mb-10 items-center justify-between mx-auto px-10 py-20 bg-gray-100 w-full overflow-hidden rounded" id='about'>
      <div className="flex flex-col w-full md:w-1/2" id='About'>
        <h1 className="text-2xl text-left text-[#00001A] sm:text-4xl mb-7">About 3_DJS NIG LTD</h1>
        <p className="text-gray-500 text-left mb-8">Founded with a passion for fashion and quality, 3_DJS has been bringing you the finest selection of shoes and bags since our inception. We believe that accessories are more than just items - they're expressions of personality and style.</p>
        <p className="text-gray-500 text-left mb-8">Our mission is to provide fashion enthusiasts with access to premium, stylish, and comfortable accessories that elevate everyday looks into extraordinary statements.</p>

        <div className="flex flex-col">
            <div className="flex flex-row items-center gap-3">
                <MdWorkspacePremium className="text-[#C89A3C] text-8xl mb-3" />
                <div className="flex flex-col gap-2">
                <h2>Premium Quality</h2>
                <p className="text-gray-500 text-left mb-3">We source our products from trusted manufacturers and designers, ensuring that every item meets our high standards for quality and craftsmanship.</p>
                </div>
            </div>
            <div className="flex flex-row items-center gap-3">
                <FaHeart className="text-[#C89A3C] text-7xl mb-3" />
                <div className="flex flex-col gap-2">
                <h2>Customer Satisfaction</h2>
                <p className="text-gray-500 text-left mb-3">We are committed to providing exceptional customer service and ensuring that every client has a positive experience with our brand.</p>
                </div>
            </div>
            <div className="flex flex-row items-center gap-3">
                <LuShoppingBag className="text-[#C89A3C] text-7xl mb-3" />
                <div className="flex flex-col gap-2">
                <h2>Wide Selection</h2>
                <p className="text-gray-500 text-left mb-3">We offer a diverse range of styles and sizes to suit every taste and occasion, ensuring that there's something for everyone.</p>
                </div>
            </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 h-full flex items-center justify-center p-10">
        <Image src={assets.aboutImage} alt="About 3_DJS" className="shadow rounded-lg w-full" />
      </div>
    </div>
  )
}

export default AboutPage
