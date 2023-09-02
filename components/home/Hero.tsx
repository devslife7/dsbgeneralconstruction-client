import Link from "next/link"
import Image from "next/image"
import heroBackground from "@/public/images//hero-house.webp"
import Button from "../ui/button"

export default function Hero() {
    return (
        <div className="h-[70vh] lg:h-[54rem">
            {/* <div className="absolute w-full h-full -z-10">
                <Image
                    alt="Hero Kitchen"
                    src={heroBackground}
                    placeholder="blur"
                    quality={100}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 30vw"
                    fill
                    priority
                    className="object-cover w-full h-full"
                />
            </div> */}
            <div className="relative h-full rounded-md my-container">
                <div className="w-full h-full bg-green-400 -z-1">
                    {/* <Image
                        alt="Hero Kitchen"
                        src={heroBackground}
                        placeholder="blur"
                        quality={100}
                        // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 30vw"
                        priority
                        // className="object-cover"
                    /> */}
                </div>
                <div className="absolute flex items-center justify-center h-full text-center text-white bg-red-400 ">
                    <div className="relative max-w-4xl py-14 lg:py-20">
                        <h1 className="text-4xl font-bold md:text-5xl lg:text-7xl">Your Dream Home Awaits</h1>
                        <p className="max-w-xl mx-auto mt-5 mb-10 font-light text-md md:text-xl lg:text-xl lg:leading-relaxed">
                            Our skilled artisans pour their heart and soul into every project, ensuring
                            impeccable finishes and long-lasting beauty.
                        </p>
                        <Link href="/work">
                            <Button size="lg" className="font-light lg:text-lg">
                                Explore Gallery
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

{
    /* <div style={{
    zIndex: -1,
    position: "fixed",
    width: "100vw",
    height: "100vh"
  }}>
    <Image 
      src="/bg.webp"
      alt="Mountains with snow"
      layout="fill"
      objectFit='cover'
    />
  </div>
  <h1 style={{
    paddingTop: "30vh",
    fontFamily: "monospace",
    fontSize: "3.5rem",
    fontWeight: "bold",
    textAlign: "center"
  }}>Next.js Background Image Tutorial</h1>
</> */
}
