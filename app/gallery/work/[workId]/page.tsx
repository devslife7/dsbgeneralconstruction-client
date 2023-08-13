"use client"
import Image from "next/image"
import { IoIosLogIn, IoMdArrowBack } from "react-icons/io"
import Link from "next/link"
import { useEffect, useState } from "react"
import { fetchWork, createComment, deleteComment } from "@/utils/api_calls"
import ImageViewer from "@/components/gallery/work/ImageViewer"

export default function Page({ params: { workId } }: { params: { workId: string; isLoggedIn: boolean } }) {
  const [work, setWork] = useState({ image_urls: [], comments: [], title: "" })
  const [commentOpen, setCommentOpen] = useState(false)
  const [name, setName] = useState("")
  const [comment, setComment] = useState("")
  const [rating, setRating] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchWork(workId)
      setWork(response.data)
    }
    fetchData()
  }, [workId])

  const handleCommentSubmit = async () => {
    const requstOBJ = {
      username: name,
      content: comment,
      work_id: workId,
    }

    const response = await createComment(requstOBJ)
    // console.log("response::::", response)

    setWork(response.data)
    setCommentOpen(false)
    setName("")
    setComment("")
  }

  const renderComments = () => {
    type Comment = any[]
    const cmts: Comment = work.comments
    if (cmts === undefined) return
    if (cmts.length < 1) return

    return cmts.map((comment, index) => (
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
        {/* {isLoggedIn && (
          <button className="btn btn-error mt-6" onClick={() => handleCommentDelete(comment.id)}>
            Delete
          </button>
        )} */}
        {true && (
          <button className="btn btn-error mt-6" onClick={() => handleCommentDelete(comment.id)}>
            Delete
          </button>
        )}
      </div>
    ))
  }

  const handleCommentDelete = async (comment_id: number) => {
    const response = await deleteComment(comment_id)

    const idx = work.comments.findIndex((comment: { id: number }) => comment.id === response.data.comment.id)

    const newWorkOBJ = {
      ...work,
      comments: [...work.comments.slice(0, idx), ...work.comments.slice(idx + 1)],
    }
    setWork(newWorkOBJ)
  }

  const handleRating = (e: any) => {
    // console.log("rating", e.target.name)
    setRating(e.target.name)
  }

  return (
    <div className="container-custom">
      <div className="my-8 space-y-5">
        <div className="flex justify-between">
          <Link href="/gallery" className=" lg:w-[35%] clear-left text-gray-700 items-center">
            <IoMdArrowBack className="inline-block text-lg" />
            <span>gallery</span>
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
            Add comment...
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
        <div className="lg:w-[65%] flex flex-wrap my-20">
          <ImageViewer work={work} />
        </div>
      </div>
    </div>
  )
}
