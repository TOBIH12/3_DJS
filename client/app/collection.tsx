"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { allProducts } from "./assets";


const Collection = () => {
    const [categoryClicked, setCategoryClicked] = useState('all');

   const handleCategoryClick = (category: string) => {
    setCategoryClicked(category);
   }


  return (
    <div className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden rounded' id='Products'>
      <h1 className="text-2xl text-[#00001A] sm:text-4xl mb-2">Our Collection</h1>
      <p className="text-gray-500 text-center mb-8">Check out our carefully curated selection of premium fashion handbags and shoes.</p>

      <div className="flex mt-5 bg-gray-200 py-1 px-2 rounded-full">
        <p id="all-products" onClick={() => handleCategoryClick('all')} className={categoryClicked === 'all' ? `bg-white px-10 text-black rounded-full cursor-pointer` : `cursor-pointer mx-10`}>All Products</p>
        <p id="shoes" onClick={() => handleCategoryClick('shoes')} className={categoryClicked === 'shoes' ? `bg-white px-10 text-black rounded-full cursor-pointer` : `cursor-pointer mx-10`}>Shoes</p>
        <p id="bags" onClick={() => handleCategoryClick('bags')} className={categoryClicked === 'bags' ? `bg-white px-10 text-black rounded-full cursor-pointer` : `cursor-pointer mx-10`}>Bags</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 w-full">
        {
          categoryClicked === 'all' &&
          allProducts.slice(0, 6).map((product) => (
            <div key={product.id} className="flex flex-col bg-white shadow-md hover:shadow-lg rounded-lg overflow-hidden">
              <Image src={product.image} alt={product.name} className="w-full h-2/3 object-fit hover:scale-105 transition-transform duration-300" />
              <p className="text-left text-gray-700 mt-8 px-4">{product.name}</p>
            </div>

    
          ))
        }
      </div>
    </div>
  )
}

export default Collection
