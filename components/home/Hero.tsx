import Link from "next/link"
import Image from "next/image"
import heroBackground from "../../public/images/heroSection.webp"

export default function Hero() {
  return (
    <div className="mt-20 h-[70vh] relative">
      <div className="absolute h-full w-full -z-10">
        <Image
          src={heroBackground}
          className="object-cover h-full w-full"
          placeholder="blur"
          priority
          alt="Hero Kitchen"
        />
      </div>
      <div className="bg-black bg-opacity-25 h-full">
        <div className="container-custom h-full flex items-center text-white">
          <div className="bg-black bg-opacity-50 px-8 lg:px-16 py-14 lg:py-20 relative rounded-md">
            <h1 className="font-bold text-5xl md:text-5xl lg:text-7xl">Renovate Your Home</h1>
            <p className="max-w-[53rem] pb-10 pt-5 font-light text-lg md:text-xl lg:text-xl lg:leading-relaxed">
              Our skilled artisans pour their heart and soul into every project, ensuring impeccable finishes
              and long-lasting beauty.
            </p>
            <Link
              href="/gallery"
              className="bg-primary border-[3px] border-solid border-transparent inline-block rounded-md text-lg px-7 py-2 md:px-6 md:py-2 md:text-xl hover:border-solid hover:bg-transparent hover:border-[3px] hover:border-primary transition-all ease-in-out duration-300 "
            >
              Gallery...
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
