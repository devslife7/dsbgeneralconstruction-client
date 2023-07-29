"use client"
import Image from "next/image"
import { IoMdArrowBack } from "react-icons/io"
import Link from "next/link"
import { useEffect, useState } from "react"
import { fetchWork } from "../../../utils/api_calls"

export default function page({ params }: { params: { id: string } }) {
  const [work, setWork] = useState({ image_urls: [] })
  const [commentOpen, setCommentOpen] = useState(false)
  const [name, setName] = useState("")
  const [comment, setComment] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchWork(params.id)
      console.log("response:", response)
      setWork(response.data)
    }
    fetchData()
  }, [])

  const renderFiles = () => {
    if (!work) return
    if (work.image_urls.length < 1) return
    console.log("render files:", work.image_urls.length)
    return work.image_urls.map((url, index) => (
      <Image key={index} src={url} width={400} height={500} alt="image" />
    ))
  }

  const handleCommentSubmit = () => {
    setCommentOpen(false)
    return true
  }

  return (
    <div className="container-custom mt-20">
      <div className="my-8 space-y-5">
        <div className="flex justify-between">
          <Link href="/gallery" className=" lg:w-[35%] clear-left text-gray-700 items-center">
            <IoMdArrowBack className="inline-block text-lg" />
            <span> gallery</span>
          </Link>

          <div className="rating">
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-primary" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-primary" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-primary" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-primary" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-primary" />
          </div>
        </div>

        <div className=" space-y-2">
          {/* <div className="flex items-center gap-2">
                <div className="avatar placeholder">
                <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                    <span className="text-lg">L</span>
                </div>
                </div>
            <div className="text-lg">Leo Messi</div>
          </div> */}
          {/* <div>
            Muchaaaaaachoooos ahora nos volvimo a ilusinaarr, quieroo gana la MLS yo ya soy campeon
            mundiaaaal...
          </div> */}
          <div className="text-gray-700 btn" onClick={() => setCommentOpen(true)}>
            Add comment
          </div>
        </div>
        <div id="Comments_form" className={`flex flex-col gap-5 max-w-md ${!commentOpen && "hidden"} `}>
          <label className="text-2xl">Comment form:</label>
          <input type="text" placeholder="Name..." />
          <textarea placeholder="Comment..." />
          <button className="btn" onClick={handleCommentSubmit()}>
            Submit
          </button>
          <div className="btn btn-error" onClick={() => setCommentOpen(false)}>
            Cancel
          </div>
        </div>
        <div className="lg:w-[65%] flex justify-center flex-wrap order-first my-20">{renderFiles()}</div>
      </div>
    </div>
  )
}
