import Image from "next/image"
import Link from "next/link"
import { AiFillStar } from "react-icons/ai"
import Button from "../shared/Button"

export default function GalleryCard({ work, handleWorkDelete }: { work: any; handleWorkDelete: any }) {
  const coverFile = work.image_urls[0]
  return (
    <div className="w-[350px]">
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
          sizes="100vw"
          className="w-full h-auto"
        />
      )}
      <div className="flex justify-between">
        <div>{work.title}</div>
        <div>
          <span>4.5</span>
          <AiFillStar className="inline-block text-primary text-lg" />
        </div>
      </div>
      <div>{work.subtitle}</div>
      <Link href={`/gallery/work/${work.id}`}>
        <p className="text-gray-700 mt-2 mb-10 ">See more...</p>
      </Link>

      <Button variant="danger" onClick={() => handleWorkDelete(work.id)}>
        Delete
      </Button>
    </div>
  )
}
