import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../../app/globals.css';

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import Image from 'next/image';
import ViewButton from '../ViewButton';

const images = [
    'bg-4.avif',
    'bg-5.avif',
    'bg.avif',
  ];

const HeroSection = () => {

  return (
    <>  
      <Swiper 
        navigation
        pagination
        modules={[Navigation, Pagination, Mousewheel, Keyboard]} className='swiper-container md:mb-20 mb-14'>
        {
            images.map((img,index) => (
            <SwiperSlide key={index}>
                <Image src={`/${img}`} fill alt="background image" />
            </SwiperSlide>
          ))
        }
      <div className='absolute w-[500px] flex gap-3 flex-col text-slate-200 bottom-[10%] left-1/2 -translate-x-1/2 -translate-y-[10%] z-20 items-center'>
        <h1 className='text-xl'>The Best Look</h1>
        <h1 className='lg:text-5xl md:text-4xl text-3xl drop-shadow-lg font-bold text-center'>Anytime Anywhere</h1>
        <p className='text-lg text-center'>Starts from 10,000 MMK</p>
        <ViewButton />
      </div>
      </Swiper>
    </>
  )
}

export default HeroSection