"use client"
import Image from "next/image"
import { IoIosLogIn, IoMdArrowBack } from "react-icons/io"
import Link from "next/link"
import { useEffect, useState } from "react"
import { fetchWork, createComment, deleteComment } from "../../../utils/api_calls"

// type Props = {
//   params: { id: any[] },
//   isLoggedIn: any[]
// }

interface PageProps {
  params: { id: string },
  isLoggedIn: any[]
}

export default function Page({ params, isLoggedIn }: PageProps) {
  const [work, setWork] = useState({ image_urls: [], comments: [] })
  const [commentOpen, setCommentOpen] = useState(false)
  // const [commentOpen, setCommentOpen] = useState(false)
  // const [commentOpen, setCommentOpen] = useState(false)
  // const [commentOpen, setCommentOpen] = useState(false)
  // const [commentOpen, setCommentOpen] = useState(false)
  const [name, setName] = useState("")
  const [comment, setComment] = useState("")
  const [rating, setRating] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchWork(params.id)
      console.log("response:", response)
      setWork(response.data)
      console.log("work:", response.data)
    }
    fetchData()
  }, [params.id])

  const renderFiles = () => {
    if (!work) return
    if (work.image_urls.length < 1) return
    console.log("render files:", work.image_urls.length)
    return work.image_urls.map((url, index) => (
      <Image key={index} src={url} width={400} height={500} alt="image" />
    ))
  }

  const handleCommentSubmit = async () => {
    const requstOBJ = {
      username: name,
      content: comment,
      work_id: params.id,
    }

    const response = await createComment(requstOBJ)
    console.log("response::::", response)

    setWork(response.data)
    setCommentOpen(false)
    setName("")
    setComment("")
  }

  const renderComments = () => {
    const cmts = work.comments
    if (cmts === undefined) return
    if (cmts.length < 1) return
    console.log("comments:")

    // <div key={index}>{comment.username}</div>

    return cmts.map((comment: any, index) => (
      <div key={index} className="mb-10">
        <div className="flex items-center gap-2">
          <div className="avatar placeholder">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
              <span className="text-lg uppercase">{comment.username.charAt(0)}</span>
            </div>
          </div>
          <div className="text-lg">{comment.username}</div>
        </div>
        <div>{comment.content}</div>
        {isLoggedIn && (
          <button className="btn btn-error mt-6" onClick={() => handleCommentDelete(comment.id)}>
            Delete
          </button>
        )}
      </div>
    ))
  }

  const handleCommentDelete = async (comment_id: number) => {
    const response = await deleteComment(comment_id)
    console.log("response:3333", response)

    const idx = work.comments.findIndex((comment: any) => comment.id === response.data.comment.id)

    const newWorkOBJ = {
      ...work,
      comments: [...work.comments.slice(0, idx), ...work.comments.slice(idx + 1)],
    }
    setWork(newWorkOBJ)
  }

  const handleRating = (e: any) => {
    console.log("rating", e.target.name)
    setRating(e.target.name)
  }

  return (
    <div className="container-custom mt-20">
      <div className="my-8 space-y-5">
        <div className="flex justify-between">
          <Link href="/gallery" className=" lg:w-[35%] clear-left text-gray-700 items-center">
            <IoMdArrowBack className="inline-block text-lg" />
            <span> gallery</span>
          </Link>

          <div className="flex">
            <div className="mr-5">{rating}</div>

            <div className="rating">
              <input
                type="radio"
                name="1"
                className={`mask mask-star-2 bg-primary ${rating && "btn-disabled"}`}
                onClick={e => handleRating(e)}
              />
              <input
                type="radio"
                name="2"
                className={`mask mask-star-2 bg-primary ${rating && "btn-disabled"}`}
                onClick={e => handleRating(e)}
              />
              <input
                type="radio"
                name="3"
                className={`mask mask-star-2 bg-primary ${rating && "btn-disabled"}`}
                onClick={e => handleRating(e)}
              />
              <input
                type="radio"
                name="4"
                className={`mask mask-star-2 bg-primary ${rating && "btn-disabled"}`}
                onClick={e => handleRating(e)}
              />
              <input
                type="radio"
                name="5"
                className={`mask mask-star-2 bg-primary ${rating && "btn-disabled"}`}
                onClick={e => handleRating(e)}
              />
            </div>
          </div>
        </div>

        <div className=" space-y-2">
          {renderComments()}
          <div className="text-gray-700 btn" onClick={() => setCommentOpen(true)}>
            Add comment
          </div>
        </div>
        <div id="Comments_form" className={`flex flex-col gap-5 max-w-md ${!commentOpen && "hidden"} `}>
          <label className="text-2xl">Comment form:</label>
          <input type="text" placeholder="Name..." value={name} onChange={e => setName(e.target.value)} />
          <textarea placeholder="Comment..." value={comment} onChange={e => setComment(e.target.value)} />
          <button className="btn" onClick={handleCommentSubmit}>
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
