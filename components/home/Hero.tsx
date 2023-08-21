import Link from "next/link"
import Image from "next/image"
import heroBackground from "@/public/images/heroSection.webp"
import Button from "../shared/Button"

export default function Hero() {
  return (
    <div className="h-[70vh] relative">
      <div className="absolute w-full h-full -z-10">
        <Image
          src={heroBackground}
          className="object-cover w-full h-full"
          placeholder="blur"
          priority
          alt="Hero Kitchen"
        />
      </div>
      <div className="h-full bg-black bg-opacity-25">
        <div className="flex items-center h-full text-white my-container">
          <div className="relative px-8 bg-black bg-opacity-50 rounded-md lg:px-16 py-14 lg:py-20">
            <h1 className="text-5xl font-bold md:text-5xl lg:text-7xl">Renovate Your Home</h1>
            <p className="max-w-[53rem] pb-10 pt-5 font-light text-lg md:text-xl lg:text-xl lg:leading-relaxed">
              Our skilled artisans pour their heart and soul into every project, ensuring impeccable finishes
              and long-lasting beauty.
            </p>
            <Link href="/gallery">
              <Button size="large">Explore Gallery</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
