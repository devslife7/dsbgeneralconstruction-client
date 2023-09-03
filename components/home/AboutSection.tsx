import KitchenBg from "@/public/images/kitchen-bg.webp"
import Image from "next/image"
import Button from "../ui/button"

export default function AboutSection() {
    return (
        <div className="my-12 text-center lg:text-left my-container lg:flex lg:flex-row-reverse lg:items-center lg:justify-between">
            <div className="w-full max-w-lg m-auto space-y-8 lg:space-y-10">
                <div className="text-3xl font-bold lg:font-normal lg:text-5xl">
                    The Leading Bay Area Remodeling Company
                </div>
                <p className="text-lg font-light opacity-70">
                    Our home renovation business is making waves in the Bay Area with our unique blend of
                    creativity and craftsmanship. From kitchen makeovers that leave taste buds tingling to
                    bathroom remodels that feel like a spa day at home.
                </p>
                <Button>More About Us</Button>
            </div>
            <Image src={KitchenBg} height={900} alt="kitchen" className="mt-10 lg:mt-0" />
        </div>
    )
}