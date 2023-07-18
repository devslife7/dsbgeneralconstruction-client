import Link from "next/link"

export default function Hero() {
  return (
    <div className="h-screen bg-[url('../public/images/HeroSection.jpg')] bg-cover bg-fixed">
      <div className="mx-auto flex h-full max-w-screen-xl items-center p-4 lg:p-8">
        <div className="bg-black bg-opacity-60 p-12 text-white">
          <h1 className="text-7xl font-bold">Renovate Your Home</h1>
          <div className="w-[50rem] py-10 text-2xl">
            Our skilled artisans pour their heart and soul into every project, ensuring impeccable finishes
            and long-lasting beauty.
          </div>
          <Link href="/work" className="bg-primary-color p-3 text-3xl">
            Explore Work
          </Link>
          <div className="flex gap-5 pt-14">
            <div>Link</div>
            <div>Link</div>
            <div>Link</div>
          </div>
        </div>
      </div>
    </div>
  )
}
