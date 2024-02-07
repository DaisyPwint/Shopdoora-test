import Image from 'next/image'

const NewReleasedCard = ({ imageSrc, altText, title, price }) => {
  return (
    <>
        <Image src={imageSrc} fill className="rounded-md" alt={altText} />
        <div className="text-slate-50 z-20 text-start lg:w-[250px] md:w-[150px] w-[100px] absolute left-2 md:bottom-5 bottom-2">
            <h1 className="font-bold lg:text-lg md:text-md sm:text-sm text-xs">{title}</h1>
            <h1 className="text-md lg:text-lg md:text-md sm:text-sm text-xs mt-1">{price}</h1>
        </div>
    </>
  )
}

export default NewReleasedCard