"use client"
import Image from "next/image"
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen,setIsMenuOpen] = useState(false);

  const handleBestScroll = () => {
    document.getElementById('best-deals').scrollIntoView({behavior: "smooth"})
  }

  const handleNewScroll = () => {
    document.getElementById('new-released').scrollIntoView({behavior: "smooth"})
  }

  return (
    <nav className="fixed top-0 z-10 w-full text-white bg-slate-800/10 py-5">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-1">
            <h1 className="font-bold uppercase text-2xl">PI</h1>
            <h1 className="font-bold text-4xl bg-slate-100 text-slate-900/30 px-3 py-0">π</h1> 
          </div>
          <div className="flex gap-5">
            <Image src="/search.png" alt="search img" width={15} height={15} />
            <Image src="/shopping-cart.png" alt="search img" width={17} height={17} />
            <Image src="/hamburger.png" alt="search img" width={15} height={15} className="cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)} />
          </div>
          {
              isMenuOpen && (
                  <div className='fixed top-0 right-0 bg-slate-800/40 h-screen w-[200px] max-w-250 transform transition-transform ease-in-out duration-700 overflow-hidden z-20'>
                      <div
                          className='absolute flex top-4 right-7 cursor-pointer ml-2 text-xl p-1 hover:bg-slate-300 hover:rounded-md' role='button' tabIndex="0" onKeyDown={() => setIsMenuOpen(false)} onClick={() => setIsMenuOpen(false)}
                          >
                          <span className="material-symbols-outlined">
                            close
                          </span>
                      </div>
                      <nav className='flex flex-col justify-center items-center gap-3 mt-[100%]'>
                          <h1 className="md:text-2xl text-xl inline-block px-2 py-2 text-slate-50 transition-all duration-300  hover:duration-300 hover:bg-slate-50/65 hover:rounded-lg cursor-pointer" onClick={handleBestScroll}>Best Deals</h1>
                          <h1 className="md:text-2xl text-xl inline-block px-2 py-2 text-slate-50 transition-all duration-300  hover:duration-300 hover:bg-slate-50/65 hover:rounded-lg cursor-pointer" onClick={handleNewScroll}>New Released</h1>
                      </nav>
                  </div>
                )
          }
        </div>
    </nav>
  )
}

export default Navbar