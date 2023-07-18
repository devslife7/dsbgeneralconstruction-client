import Link from "next/link"

export default function Hero() {
  return (
    <div className="h-screen bg-[url('../public/images/HeroSection.jpg')] bg-cover bg-fixed">
      <div className="h-full bg-black bg-opacity-25">
        <div className="mx-auto flex h-full max-w-screen-xl items-center p-4 lg:p-8">
          <div className="relative left-[-4rem] rounded-md bg-black bg-opacity-50 px-16 py-20 text-white">
            <h1 className="text-7xl font-bold">Renovate Your Home</h1>
            <div className="w-[53rem]  pb-10 pt-5 text-2xl font-light leading-10">
              Our skilled artisans pour their heart and soul into every project, ensuring impeccable finishes
              and long-lasting beauty.
            </div>
            <Link href="/work" className="inline-block rounded-md bg-primary-color px-11 py-4  text-2xl">
              Explore Work
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
