import Link from "next/link"
import Image from "next/image"
import heroBackground from "@/public/images/heroSection.webp"
import Button from "../shared/Button"

export default function Hero() {
  return (
    <div className="h-[70vh] relative">
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
            <Link href="/gallery">
              <Button className="text-xl">Explore Gallery...</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
