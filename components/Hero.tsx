import Link from "next/link"

export default function Hero() {
  return (
    <div className="h-[70vh] lg:h-[80vh] bg-[url('../public/images/HeroSection.jpg')] bg-cover">
      <div className="bg-black bg-opacity-25 h-full">
        <div className="container h-full flex items-center text-white">
          <div className="bg-black bg-opacity-50 px-8 lg:px-16 py-14 lg:py-20 relative lg:left-[-4rem] rounded-md">
            <h1 className="font-bold text-5xl md:text-5xl lg:text-6xl">Renovate Your Home</h1>
            <div className="max-w-[53rem] pb-10 pt-5 mg:leading-10 font-light text-lg md:text-xl lg:text-2xl">
              Our skilled artisans pour their heart and soul into every project, ensuring impeccable finishes
              and long-lasting beauty.
            </div>
            <Link href="/work" className="inline-block rounded-md bg-primary px-11 py-4  text-2xl">
              Explore Work
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
