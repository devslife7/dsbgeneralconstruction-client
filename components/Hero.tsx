import Link from "next/link"

export default function Hero() {
  return (
    <div className="h-screen bg-[url('../public/images/HeroSection.jpg')] bg-cover bg-fixed">
      <div className="h-full bg-black bg-opacity-25">
        <div className="container flex h-full items-center ">
          <div className="relative rounded-md bg-black bg-opacity-50 px-10 py-20 text-white lg:left-[-4rem] lg:px-16">
            <h1 className=" text-4xl font-bold md:text-5xl lg:text-6xl">Renovate Your Home</h1>
            <div className="mg:leading-10  max-w-[53rem] pb-10 pt-5 text-lg font-light md:text-xl lg:text-2xl">
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
