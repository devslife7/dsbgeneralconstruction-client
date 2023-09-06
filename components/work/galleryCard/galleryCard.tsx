"use client"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { deleteWork } from "@/lib/api_calls/api_calls"
import OptionButtons from "./optionButtons"
import MediaViewer from "./mediaViewer"
import StarFilledSVG from "@/public/svgs/starFilled.svg"
import MediaGalleryButton from "./mediaGalleryButton"

type WorkProps = {
    id: number
    title: string
    description: string
    image_urls: string[]
    ratings: number[]
    comments: any[]
}

export default function GalleryCard({ work }: { work: WorkProps }) {
    const router = useRouter()

    console.log("work:", work)

    const getWorkRating = () => {
        if (work.ratings.length <= 0) return 0
        const rating = work.ratings.reduce((a: any, b: any) => a + b) / work.ratings.length

        return rating === 0 ? 0 : rating.toFixed(1)
    }

    // Capitalized first letter of work title
    const workTitle = work.title.charAt(0).toUpperCase() + work.title.slice(1)

    return (
        <div className="w-full sm:max-w-md lg:max-w-xs h-full bg-white shadow-lg">
            <MediaGalleryButton mediaURLS={work.image_urls} />

            <div className="px-4 mb-5">
                <div className="flex justify-between">
                    <div className="mt-2 text-xl opacity-80">{workTitle}</div>
                    <div className="flex items-center ">
                        <span className="mt-[0.1rem] mr-[0.1rem] text-sm text-center opacity-70">
                            {getWorkRating()}
                        </span>
                        <StarFilledSVG className="text-primary" />
                    </div>
                </div>
                <div className="opacity-60">{work.description}</div>
            </div>
            <OptionButtons work={work} />
        </div>
    )
}
