import Image from "next/image"

const Footer = () => {
  return (
    <footer className='container md:pt-20 pt-14 text-slate-700'>
      <div className='grid md:grid-cols-4 grid-cols-2 gap-9 justify-center pb-16'>
        <div>
          <div className="flex flex-col gap-4 mb-10 text-sm sm:text-md">
            <h1 className="md:text-xl text-lg">Customer Service</h1>
            <div className="flex gap-2">
              <span className="material-symbols-outlined">
              policy
              </span>
              <p>Terms & Privacy Policy</p>
            </div>
            <div className="flex gap-2">
              <span className="material-symbols-outlined">
              replay
              </span>
              <p>Return Policy</p>
            </div>
          </div>
          <h1 className="md:text-xl text-lg">Payment</h1>
          <div className="flex gap-1 mt-5">
            <Image src="/kbz.png" alt="kbz pay image" width={50} height={50} className="cursor-pointer md:w-10 w-8 md:h-10 h-8" />
            <Image src="/wavemoney.jpeg" alt="kbz pay image" width={50} height={50} className="cursor-pointer md:w-10 w-8 md:h-10 h-8" />
          </div>
        </div>
        <div className="flex flex-col gap-4 md:text-md text-sm">
          <h1 className="md:text-xl text-lg">Language</h1>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <input type="radio" name="language" id="unicode"  />
              <label htmlFor="unicode">Myanmar (Unicode)</label>
            </div>
            <div className="flex gap-3 items-center">
              <input type="radio" name="language" id="zawgyi" />
              <label htmlFor="zawgyi">Myanmar (Zawgyi)</label>
            </div>
            <div className="flex gap-3 items-center">
              <input type="radio" name="language" id="english" defaultChecked />
              <label htmlFor="english">English</label>
            </div>
          </div>
          <div>
            <h1 className="md:text-xl text-lg">Follow Us On</h1>
            <div className="flex flex-wrap gap-1 mt-5">
              <Image src="/social/facebook.png" alt="kbz pay image" width={50} height={50} className="cursor-pointer md:w-10 w-8 md:h-10 h-8" />
              <Image src="/social/Instagram.jpeg" alt="kbz pay image" width={50} height={50} className="cursor-pointer md:w-10 w-8 md:h-10 h-8" />
              <Image src="/social/viber.png" alt="kbz pay image" width={50} height={50} className="cursor-pointer md:w-10 w-8 md:h-10 h-8" />
              <Image src="/social/telegram.jpeg" alt="kbz pay image" width={50} height={50} className="cursor-pointer md:w-10 w-8 md:h-10 h-8" />
              <Image src="/social/twitter.png" alt="kbz pay image" width={50} height={50} className="cursor-pointer md:w-10 w-8 md:h-10 h-8" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:text-md text-sm">
          <h1 className="md:text-xl text-lg">Contact Us</h1>
          <div className="flex gap-2">
            <span className="material-symbols-outlined">
            location_on
            </span>
            <p>Lay DauntKan Main Road, Cashmere Stop, Near Zawana, Thingangyun Tsp,Yangon.</p>
          </div>
          <div className="flex gap-2">
            <span className="material-symbols-outlined">
            call
            </span>
            <p>09458489458</p>
          </div>
        </div>
        <div>
          <h1 className="md:text-xl text-lg">Download Our App</h1>
          <Image src="/qr-code.png" alt="kbz pay image" width={150} height={150} className="mt-3" />
        </div>
      </div>
      <p className='text-center mb-2'> &copy; Copyright 2023 C by D Co.,Ltd.All rights reserved.</p>
    </footer>
  )
}

export default Footer