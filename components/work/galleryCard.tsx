"use client"
import Image from "next/image"
import Link from "next/link"
import { AiFillStar } from "react-icons/ai"
import { GrFormNext } from "react-icons/gr"
import { useRouter } from "next/navigation"
import { deleteWork } from "@/lib/api_calls/api_calls"
import { SlOptionsVertical } from "react-icons/sl"
import CardDropDown from "./cardDropDown"

type WorkProps = {
    id: number
    title: string
    description: string
    image_urls: string[]
    ratings: number[]
}

export default function GalleryCard({ work }: { work: WorkProps }) {
    const router = useRouter()
    const coverFile = work.image_urls[0]

    const getWorkRating = () => {
        if (work.ratings.length <= 0) return 0
        const rating = work.ratings.reduce((a: any, b: any) => a + b) / work.ratings.length

        return rating === 0 ? 0 : rating.toFixed(1)
    }

    // Capitalized first letter of work title
    const workTitle = work.title.charAt(0).toUpperCase() + work.title.slice(1)

    const handleWorkDelete2 = async () => {
        await deleteWork(work.id)
        router.refresh()
    }

    return (
        <div className="w-[26rem] lg:max-w-[20rem] rounded-md h-full bg-white shadow-lg">
            <div>
                {coverFile && !!coverFile.match(/.mp4|.mov/) ? (
                    <video width="350" height="450" src={coverFile} controls autoPlay muted>
                        Sorry, your browser doesn't support HTML5 <code>video</code>
                    </video>
                ) : (
                    <Image
                        src={coverFile}
                        alt={work.title}
                        width={384}
                        height={479}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 20vw"
                        className="w-full"
                        priority
                    />
                )}
            </div>
            <div className="px-4 mb-5">
                <div className="flex justify-between">
                    <div className="mt-2 text-xl">{workTitle}</div>
                    <div className="flex items-center">
                        <span>{getWorkRating()}</span>
                        <AiFillStar className="inline-block text-lg text-primary" />
                    </div>
                </div>
                <div className="opacity-60">{work.description}</div>
                {/* <Link
                    href={`/gallery/work/${work.id}`}
                    className="flex items-center mt-5 text-sm group opacity-60"
                >
                    <p className="">Explore More</p>
                    <GrFormNext className="mt-[2px] text-lg transition-transform group-hover:translate-x-0.5" />
                </Link> */}
                {/* {true && (
                    <div className="mb-3 text-red-500 cursor-pointer" onClick={handleWorkDelete2}>
                        <u>Delete</u>
                    </div>
                )} */}
            </div>
            <div className="flex items-center border-t opacity-50 border-black/40">
                <div className="w-1/2 py-2 text-xs text-center">gallery</div>
                <div className="w-1/2 py-2 text-xs text-center border-l border-black/40">reviews</div>
                <div className="flex justify-center w-1/6 py-2 text-xs border-l border-black/40">
                    <SlOptionsVertical className="w-auto text-base" />
                    <CardDropDown />
                </div>
            </div>
        </div>
    )
}
