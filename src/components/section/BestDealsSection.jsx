import Image from "next/image"
import ViewButton from "../ViewButton"
import BestDealsCard from "../cards/BestDealsCard";

const BestDealsSection = () => {

  const productImages = [
    { imageSrc: '/vape/white-vape.jpg', altText: 'white-vape image' },
    { imageSrc: '/vape/dark-vape.jpg', altText: 'dark-vape image' },
    { imageSrc: '/vape/pink-vape-2.jpg', altText: 'pink-vape image' },
    { imageSrc: '/vape/green-vape.jpg', altText: 'green-vape image' },
    { imageSrc: '/vape/purple-vape.jpg', altText: 'purple-vape image' },
    { imageSrc: '/vape/yellow-vape.jpg', altText: 'yellow-vape image' },
  ];

  return (
    <div className="container" id="best-deals">
      <div className="text-slate-700 text-center">
        <div>
          <h1 className="font-bold text-4xl">Best Deals</h1>
          <p className="text-lg">Just For You</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 md:gap-x-2 md:gap-y-2 gap-x-2 gap-y-4 my-7">
          {
            productImages.map((image,index) => (
              <div key={index}>
                <BestDealsCard {...image} />
              </div>
            ))
          }
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
          <SectionCard imageSrc="/vape/device.jpg" altText="device image" title="Devices" description="Find the best for you here!" />
        </div>  
        <div className="md:row-start-1 md:row-end-2 md:col-span-1 row-start-3 row-end-5 col-span-2 relative">
          <SectionCard imageSrc="/vape/pod.jpg" altText="pod image" title="Pods" description="Variety of choices available" />
        </div>
        <div className="md:row-start-2 md:row-end-3 md:col-span-1 row-start-3 row-end-5 col-span-3 relative">
          <SectionCard imageSrc="/vape/disposable.jpg" altText="pod image" title="Disposable" description="Easy, clean & superb flavor" />
        </div>
      </div>
    </div>
  )
}

const SectionCard = ({imageSrc,altText,title,description}) => {
  return (
    <>
      <Image src={imageSrc} fill alt={altText} className="rounded-md" />
      <div className="w-full h-full backdrop-brightness-50 rounded-md">
        <div className="flex justify-between mx-3 absolute bottom-5 text-slate-50 items-start">
          <div>
            <h1 className="md:text-xl text-lg">{title}</h1>
            <p className="md:text-md sm:text-sm text-xs text-slate-300">{description}</p>
          </div>
          <div className="mt-2">
          <span className="material-symbols-outlined">
          chevron_right
          </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default BestDealsSection