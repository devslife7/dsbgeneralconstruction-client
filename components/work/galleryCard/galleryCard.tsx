"use client"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { deleteWork } from "@/lib/api_calls/api_calls"
import OptionButtons from "./optionButtons"
import MediaViewer from "./mediaViewer"
import StarFilled from "@/public/svgs/StarFilled.svg"

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
                    <div className="mt-2 text-xl opacity-80">{workTitle}</div>
                    <div className="flex items-center ">
                        <span className="mt-[0.1rem] mr-[0.1rem] text-sm text-center opacity-70">
                            {getWorkRating()}
                        </span>
                        {/* <AiFillStar className="inline-block text-lg text-primary" /> */}
                        <StarFilled className="text-primary" />
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
            </div>
            <OptionButtons workId={work.id} />

            {/* <MediaViewer mediaURLS={work.image_urls} /> */}
        </div>
    )
}
