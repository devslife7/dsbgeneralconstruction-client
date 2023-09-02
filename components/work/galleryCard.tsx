"use client"
import Image from "next/image"
import Link from "next/link"
import { AiFillStar } from "react-icons/ai"
import { GrFormNext } from "react-icons/gr"
import { useRouter } from "next/navigation"
import { deleteWork } from "@/lib/api_calls/api_calls"

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
        if (work.ratings.length <= 0) return 0.0
        return work.ratings.reduce((a: any, b: any) => a + b) / work.ratings.length
    }

    // Capitalized first letter of work title
    const workTitle = work.title.charAt(0).toUpperCase() + work.title.slice(1)

    const handleWorkDelete2 = async () => {
        await deleteWork(work.id)
        router.refresh()
    }

    return (
        <div className="w-[24rem] lg:max-w-[16rem]">
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
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 14vw"
                        // sizes="100vw"
                        className="w-full"
                        priority
                    />
                )}
            </div>
            <div className="flex justify-between">
                <div className="mt-2 text-xl">{workTitle}</div>
                <div className="flex items-center">
                    <span>{getWorkRating().toFixed(1)}</span>
                    <AiFillStar className="inline-block text-lg text-primary" />
                </div>
            </div>
            <div>{work.description}</div>
            <Link
                href={`/gallery/work/${work.id}`}
                className="flex items-center mt-5 text-sm group opacity-60"
            >
                <p className="">Explore More</p>
                <GrFormNext className="mt-[2px] text-lg transition-transform group-hover:translate-x-0.5" />
            </Link>
            {true && (
                <div className="mb-3 text-red-500 cursor-pointer" onClick={handleWorkDelete2}>
                    <u>Delete</u>
                </div>
            )}
        </div>
    )
}
