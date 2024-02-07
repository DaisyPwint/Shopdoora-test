import Image from "next/image"
import { FaStar } from 'react-icons/fa'

const BestDealsCard = ({imageSrc,altText}) => {
  return (
    <>
        <div className="w-full md:h-48 sm:h-40 h-32 relative">
          <Image src={imageSrc} alt={altText} fill className="rounded-md" />
          <span className="absolute top-0 left-0 right-0 m-auto bg-red-500 text-white text-sm p-1 w-20 text-center">25% Off</span>
        </div>
        <div className="flex flex-col gap-1 items-center mt-5">
          <h1 className="md:text-lg text-md">Refreshing Mint</h1>
          <h1 className="md:text-lg text-md font-bold">30,000 MMK</h1>
          <p className="text-sm line-through">300,000 MMK</p>
          <div className="flex items-center">
            <FaStar className="text-yellow-500 mr-1" />
            <h1 className="text-yellow-500 font-bold md:text-lg text-md">600 Points</h1>
          </div>
        </div>
    </>
  )
}

export default BestDealsCard