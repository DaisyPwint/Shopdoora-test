// import BestDealsCard from "../cards/BestDealsCard"
import Image from "next/image"
import { FaStar } from 'react-icons/fa'
import ViewButton from "../ViewButton"

const BestDealsSection = () => {
  return (
    <div className="container" id="best-deals">
      <div className="text-slate-700 text-center">
        <div>
          <h1 className="font-bold text-4xl">Best Deals</h1>
          <p className="text-lg">Just For You</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 md:gap-x-2 md:gap-y-2 gap-x-2 gap-y-4 my-7">
          <div>
              <div className="w-full md:h-48 sm:h-40 h-32 relative">
                <Image src="/vape/white-vape.jpg" alt="vape image" fill className="rounded-md" />
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
          </div>
          <div>
              <div className="w-full md:h-48 sm:h-40 h-32 relative">
                <Image src="/vape/dark-vape.jpg" alt="vape image" fill className="rounded-md" />
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
          </div>
          <div>
              <div className="w-full md:h-48 sm:h-40 h-32 relative">
                <Image src="/vape/pink-vape-3.jpg" alt="vape image" fill className="rounded-md" />
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
          </div>
          <div>
              <div className="w-full md:h-48 sm:h-40 h-32 relative">
                <Image src="/vape/green-vape-1.jpg" alt="vape image" fill className="rounded-md" />
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
          </div>
          <div>
              <div className="w-full md:h-48 sm:h-40 h-32 relative">
                <Image src="/vape/purple-vape.jpg" alt="vape image" fill className="rounded-md" />
                <span className="absolute top-0 left-0 right-0 m-auto bg-red-500 text-white text-sm p-1 w-20 text-center">25% Off</span>
              </div>
              <div className="flex flex-col gap-1 items-center mt-5">
                <h1 className="md:text-lg text-md">Refreshing Mint</h1>
                <h1 className="md:text-lg text-md font-bold">30,000 MMK</h1>
                <p className="text-sm line-through">300,000 MMK</p>
                <div className="flex items-center">
                  <FaStar className="text-yellow-500 mr-1" />
                  <h1 className="text-yellow-500 font-bold">600 Points</h1>
                </div>
              </div>
          </div>
          <div>
              <div className="w-full md:h-48 sm:h-40 h-32 relative">
                <Image src="/vape/yellow vape-1.jpg" alt="vape image" fill className="rounded-md" />
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
          </div>
        </div>
        <div className="inline-block self-center">
          <button className="w-[300px] flex py-2 bg-slate-400/35 rounded-full text-md items-center justify-center gap-3">
            View More 
            <span className="material-symbols-outlined">
              chevron_right
            </span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-2 mt-10 h-[300px]">
        <div className="md:row-start-1 md:row-end-3 md:col-span-3 row-start-1 row-end-3 col-span-3 relative">
          <Image src="/vape/vape-program.jpg" fill alt="vape program image" className="rounded-md" />
          <div className="w-full h-full backdrop-brightness-50 rounded-md">
            <div className="z-20 absolute md:w-[400px] sm:w-[350px] w-[170px] md:bottom-10 sm:bottom-5 bottom-3 md:left-6 left-3 text-slate-50 flex flex-col md:gap-3 gap-2">
              <h1 className="font-bold md:text-4xl sm:text-2xl text-xl">Membership Program</h1>
              <p className="md:text-md sm:text-sm text-xs">Be a Bape Pi member and get our special exclusive offers</p>
              <ViewButton/>
            </div>
          </div>
        </div>
        <div className="md:row-start-1 md:row-end-3 md:col-span-1 row-start-1 row-end-3 col-span-2 relative">
          <Image src="/vape/device.jpg" fill alt="vape program image" className="rounded-md" />
          <div className="w-full h-full backdrop-brightness-50 rounded-md">
            <div className="flex justify-between mx-3 absolute bottom-5 text-slate-50 items-start">
              <div>
                <h1 className="md:text-xl text-lg">Devices</h1>
                <p className="md:text-md sm:text-sm text-xs text-slate-300">Find the best for you here!</p>
              </div>
              <div className="mt-2">
              <span className="material-symbols-outlined">
              chevron_right
              </span>
              </div>
            </div>
          </div>
        </div>  
        <div className="md:row-start-1 md:row-end-2 md:col-span-1 row-start-3 row-end-5 col-span-2 relative">
          <Image src="/vape/pod.jpg" fill alt="vape program image" className="rounded-md" />
          <div className="w-full h-full backdrop-brightness-50 rounded-md">
            <div className="flex justify-between mx-3 absolute bottom-5 text-slate-50 items-start">
              <div>
                <h1 className="md:text-xl text-lg">Pods</h1>
                <p className="md:text-md sm:text-sm text-xs text-slate-300">Variety of choices available</p>
              </div>
              <div className="mt-2">
              <span className="material-symbols-outlined">
              chevron_right
              </span>
              </div>
            </div>
          </div>
        </div>
        <div className="md:row-start-2 md:row-end-3 md:col-span-1 row-start-3 row-end-5 col-span-3 relative">
          <Image src="/vape/disposable.jpg" fill alt="vape program image" className="rounded-md" />
          <div className="w-full h-full backdrop-brightness-50 rounded-md">
            <div className="flex justify-between mx-3 absolute bottom-5 text-slate-50 items-start">
              <div>
                <h1 className="md:text-xl text-lg">Disposable</h1>
                <p className="md:text-md sm:text-sm text-xs text-slate-300">Easy, clean & superb flavor</p>
              </div>
              <div className="mt-2">
              <span className="material-symbols-outlined">
              chevron_right
              </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BestDealsSection