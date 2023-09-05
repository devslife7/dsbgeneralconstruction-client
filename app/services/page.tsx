import kitchenMobile from "@/public/images/kitchen-service-mobile.webp"
import bathroomMobile from "@/public/images/bathroom-service-mobile.webp"
import interiorMobile from "@/public/images/interior-service-mobile.webp"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonStyles } from "@/components/ui/button"
export default function page() {
    return (
        <div className="pt-4 lg:py-20 space-y-10">
            <div className="my-container">
                <h1 className="text-2xl text-center font-semibold opacity-80 mb-2 lg:text-4xl">
                    Our Services
                </h1>
                <p className="text-center opacity-60">Let us help you make your dreams a reality.</p>
            </div>

            <div className="text-center sm:max-w-sm pb-20">
                <div className="h-[18rem] max-w-xl sm:max-w-sm relative">
                    <Image src={kitchenMobile} alt="kitchen" fill className="object-cover" />
                </div>
                <div className="my-container">
                    <h2 className="opacity-80 text-2xl font-medium mb-6 mt-10">Kitchen</h2>
                    <p className="opacity-60  font-light">
                        Describe your image here. Use catchy text to tell people the story behind the photo.
                        Go to “Manage Media” to add your content.
                    </p>
                </div>
            </div>
            <div className="text-center sm:max-w-sm pb-20">
                <div className="h-[18rem] max-w-xl sm:max-w-sm relative">
                    <Image src={kitchenMobile} alt="kitchen" fill className="object-cover" />
                </div>
                <div className="my-container">
                    <h2 className="opacity-80 text-2xl font-medium mb-6 mt-10">Kitchen</h2>
                    <p className="opacity-60  font-light">
                        Describe your image here. Use catchy text to tell people the story behind the photo.
                        Go to “Manage Media” to add your content.
                    </p>
                </div>
            </div>
            <div className="text-center sm:max-w-sm pb-20">
                <div className="h-[18rem] max-w-xl sm:max-w-sm relative">
                    <Image src={kitchenMobile} alt="kitchen" fill className="object-cover" />
                </div>
                <div className="my-container">
                    <h2 className="opacity-80 text-2xl font-medium mb-6 mt-10">Kitchen</h2>
                    <p className="opacity-60  font-light">
                        Describe your image here. Use catchy text to tell people the story behind the photo.
                        Go to “Manage Media” to add your content.
                    </p>
                </div>
            </div>
            <div className="text-center lg:mt-20 bg-black text-white py-20">
                <h2 className="font-semibold text-2xl">
                    Create your dream home. <br /> Tell us about your project <br /> today.
                </h2>

                <div className="my-container text-center">
                    <Link href="/contact" className={cn(buttonStyles(), "font-light lg:text-lg mt-10")}>
                        Get A Free Estimate
                    </Link>
                </div>
            </div>
        </div>
    )
}
