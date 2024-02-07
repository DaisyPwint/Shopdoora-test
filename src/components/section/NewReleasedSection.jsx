import ViewMoreButton from "../ViewMoreButton"
import Image from 'next/image'
import { FaStar } from 'react-icons/fa'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Grid, Navigation } from 'swiper/modules';
import ViewButton from "../ViewButton";
import NewReleasedCard from "../cards/NewReleasedCard";

const NewReleasedSection = () => {

const products = [
    { imageSrc: '/vape/yellow-vape.jpg', altText: 'yellow vape image', title: 'Strawberry Yogurt with Refreshing Flavor Nic 3 Percent', price: '30,000 MMK' },
    { imageSrc: '/vape/blue-vape.jpg', altText: 'blue vape image', title: 'Strawberry Yogurt with Refreshing Flavor Nic 3 Percent', price: '30,000 MMK' },
    { imageSrc: '/vape/purple-vape-1.jpg', altText: 'purple vape image', title: 'Strawberry Yogurt with Refreshing Flavor Nic 3 Percent', price: '30,000 MMK' },
    { imageSrc: '/vape/pink-vape.jpg', altText: 'pink vape image', title: 'Strawberry Yogurt with Refreshing Flavor Nic 3 Percent', price: '30,000 MMK' },
    ];

  return (
    <div className="container md:pt-20 pt-14" id="new-released">
        <div className=" text-slate-700 text-center">
            <div>
                <h1 className="font-bold text-4xl"><span className="text-red-500">New</span> Released</h1>
                <p className="text-lg">Try Our Latest Flavors Here</p>
            </div>
            <div className="grid md:grid-cols-4 grid-cols-2 gap-1 my-7 h-[200px]">
                {products.map((product, index) => (
                    <div key={index} className="relative">
                        <NewReleasedCard {...product} />
                    </div>
                ))}
            </div>
            <div className="inline-block self-center">
                <ViewMoreButton/>
            </div>            
        </div>
        <Swiper
        slidesPerView={'auto'}
        spaceBetween={10}
        navigation
        modules={[Navigation]}
        className="swiper-preView-container mt-10"
      >
            <SwiperSlide>
                <FlavorSlideWithImage imageSrc="/vape/colorful-vape.jpg" imageAlt="colorful-vape image" />
            </SwiperSlide>
            <SwiperSlide>
                <FlavorSlideWithImage imageSrc="/vape/new-falvor.jpg" imageAlt="new flavor image" />
            </SwiperSlide>
            <SwiperSlide>
                <FlavorSlideWithImage imageSrc="/vape/colorful-vape.jpg" imageAlt="colorful-vape image" />
            </SwiperSlide>
            <SwiperSlide>
                <FlavorSlideWithImage imageSrc="/vape/new-falvor.jpg" imageAlt="new flavor image" />
            </SwiperSlide>
        </Swiper> 
        <InnerVapeSlideSection imageSrc="/vape/device.jpg" imageAlt="device image" />   
        <InnerVapeSlideSection imageSrc="/vape/pod.jpg" imageAlt="pod image" />    
        <InnerVapeSlideSection imageSrc="/vape/disposable.jpg" imageAlt="disposable image" />
    </div>
  )
}

const FlavorSlideWithImage = ({ imageSrc, imageAlt }) => (
      <div className="w-full h-full backdrop-brightness-50 bg-gray-900/60 rounded-lg">
        <Image src={imageSrc} alt={imageAlt} width={500} height={500} className="rounded-l-lg" />
        <div className="absolute text-center lg:right-28 md:right-14 sm:right-8 right-5 top-28 my-auto text-slate-50 flex flex-col gap-1 items-center">
          <h1 className="md:text-4xl text-2xl">Try New Flavor</h1>
          <p>Citrus Monster</p>
          <ViewButton />
        </div>
      </div>
  );

const InnerVapeSlide = ({ imageSrc, imageAlt }) => (
    <>
        <div className="w-full md:h-48 sm:h-40 h-28 relative">
            <Image src={imageSrc} alt={imageAlt} fill className="rounded-md" />
        </div>
        <div className="flex flex-col gap-1 items-center md:mt-5 sm:mt-2 mt-1 text-slate-50">
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

const InnerVapeSlideSection = ({imageSrc,imageAlt}) => (
    <div className="w-full h-full backdrop-brightness-50 bg-zinc-800/90 rounded-lg mt-10 relative vape-container">
            <Image src={imageSrc} alt={imageAlt} width={600} height={500} className="rounded-l-lg" />
            <div className="absolute z-20 md:left-10 left-5 md:top-40 top-20">
                <h1 className="md:text-4xl sm:text-3xl text-2xl text-slate-50">Devices</h1>
                <p className="md:text-lg sm:text-md text-sm text-slate-300">Find the best for your here!</p>
            </div>
            <Swiper
                slidesPerView={2}
                grid={{
                rows: 1,
                }}
                spaceBetween={10}
                navigation
                modules={[Grid, Navigation]}
                breakpoints={{
                    // when window width is >= 640px
                    640: {
                    slidesPerView: 2,
                    },
                    // when window width is >= 768px
                    768: {
                    slidesPerView: 3,
                    },
                    // when window width is >= 1200px
                    1200: {
                    slidesPerView: 4,
                    },
                }}
                className="swiper-vape-container"
            >
                <SwiperSlide>
                    <InnerVapeSlide imageSrc="/vape/white-vape.jpg" imageAlt="vape image" />
                </SwiperSlide>
                <SwiperSlide>
                    <InnerVapeSlide imageSrc="/vape/dark-vape.jpg" imageAlt="vape image" />
                </SwiperSlide>
                <SwiperSlide>
                    <InnerVapeSlide imageSrc="/vape/pink-vape-2.jpg" imageAlt="vape image" />
                </SwiperSlide>
                <SwiperSlide>
                    <InnerVapeSlide imageSrc="/vape/green-vape.jpg" imageAlt="vape image" />
                </SwiperSlide>
                <SwiperSlide>
                    <InnerVapeSlide imageSrc="/vape/purple-vape-2.jpg" imageAlt="vape image" />
                </SwiperSlide>
                <SwiperSlide>
                    <InnerVapeSlide imageSrc="/vape/yellow-vape.jpg" imageAlt="vape image" />
                </SwiperSlide>
            </Swiper>
        </div>
)

export default NewReleasedSection