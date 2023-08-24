import Image from "next/image"
import Link from "next/link"
import { AiFillStar } from "react-icons/ai"

type Props = {
  work: {
    id: number
    title: string
    subtitle: string
    image_urls: string[]
    ratings: number[]
  }
  handleWorkDelete: (id: number) => void
}

export default function GalleryCard({ work, handleWorkDelete }: Props) {
  const coverFile = work.image_urls[0]

  const getWorkRating = () => {
    if (work.ratings.length <= 0) return 0.0
    return work.ratings.reduce((a: any, b: any) => a + b) / work.ratings.length
  }

  const workTitle = work.title.charAt(0).toUpperCase() + work.title.slice(1)

  return (
    <div className="max-w-[400px] min-w-[400px]">
      {coverFile && !!coverFile.match(/.mp4|.mov/) ? (
        <video width="350" height="450" src={coverFile} controls autoPlay muted>
          Sorry, your browser doesn't support HTML5 <code>video</code>
        </video>
      ) : (
        <Image
          src={coverFile}
          alt={work.title}
          width="0"
          height="0"
          sizes="500px 700px"
          className="w-full h-auto"
          priority
        />
      )}
      <div className="flex justify-between">
        <div className="mt-2 text-xl">{workTitle}</div>
        <div className="flex items-center">
          <span>{getWorkRating().toFixed(1)}</span>
          <AiFillStar className="inline-block text-lg text-primary" />
        </div>
      </div>
      <div>{work.subtitle}</div>
      <Link href={`/gallery/work/${work.id}`}>
        <p className="mt-2 mb-10 text-gray-700 ">
          <u>See more...</u>
        </p>
      </Link>

      <div className="mb-3 text-red-500 cursor-pointer" onClick={() => handleWorkDelete(work.id)}>
        <u>Delete</u>
      </div>
    </div>
  )
}
