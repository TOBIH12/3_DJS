import { allProducts } from "@/app/assets";
import Image from "next/image";

const collectionCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-15 p-4 md:p-6 w-full">
      {allProducts.map((product) => (
        <div key={product.id} className="flex flex-col h-[100vh] bg-white shadow-md hover:shadow-lg rounded-2xl overflow-hidden">
          <Image src={product.image} sizes="(max-width: 768px) 100vw, 384px" alt={product.name} className="w-full h-2/3 object-cover hover:scale-105 transition-transform duration-300" />
          <p className="text-left text-gray-700 mt-8 px-4">{product.name}</p>
          <p className="text-left text-gray-700 mt-10 px-4">Sizes:</p>
          <p className="text-left text-gray-500 mt-2 px-4">{product.size.join(' | ')}</p>
        </div>
      ))}
    </div>
  )
}

export default collectionCards
