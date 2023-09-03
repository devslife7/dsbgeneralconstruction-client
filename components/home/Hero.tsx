import Link from "next/link"
import Image from "next/image"
import heroBackground from "@/public/images//hero-house.webp"
import Button, { buttonStyles } from "../ui/button"
import { cn } from "@/lib/utils"

export default function Hero() {
    return (
        // <div className="h-[54rem]">
        <div className=" h-[54rem] relative container mx-auto px-4 lg:px-8">
            <div className="w-full h-full px-8 bg-black/40">
                <Image
                    alt="Hero Kitchen"
                    src={heroBackground}
                    placeholder="blur"
                    quality={100}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 60vw"
                    priority
                    className="object-cover px-8 -z-10"
                />
                <div className="absolute flex items-center justify-center w-full h-full mx-auto text-center text-white left-40 lg:text-left lg:justify-start ">
                    <div className="relative max-w-2xl py-14 lg:py-20 ">
                        <h1 className="text-2xl font-semibold md:text-5xl lg:text-7xl ">
                            Exceptional Home Remodeling & Renovations
                        </h1>
                        {/* <p className="max-w-xl mt-5 mb-10 font-light text-md md:text-xl lg:text-xl lg:leading-relaxed">
                            Our skilled artisans pour their heart and soul into every project, ensuring
                            impeccable finishes and long-lasting beauty.
                        </p> */}
                        <Link
                            href="/work"
                            className={cn(buttonStyles({ size: "lg" }), "font-light lg:text-lg mt-10")}
                        >
                            Explore Gallery
                        </Link>

                        {/* <ScrollLink to="contact" className={buttonStyles({ size: "lg" })}>
            <Translator content="heroButton" />
        </ScrollLink> */}
                    </div>
                </div>
            </div>
        </div>
        // </div>
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
