"use client"
import { IoIosLogIn, IoMdArrowBack } from "react-icons/io"
import Link from "next/link"
import { useEffect, useState } from "react"
import { fetchWork, createComment, deleteComment } from "@/utils/api_calls"
import ImageViewer from "@/components/gallery/work/MediaViewer"
import Button from "@/components/shared/Button"
import Rating from "@/components/gallery/work/Rating"

export default function Page({ params: { workId } }: { params: { workId: string; isLoggedIn: boolean } }) {
  const [work, setWork] = useState({ image_urls: [], comments: [], title: "" })
  const [commentOpen, setCommentOpen] = useState(false)
  const [name, setName] = useState("")
  const [comment, setComment] = useState("")
  const [rating, setRating] = useState(false)

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
            <div className="bg-neutral-focus text-neutral-content rounded-full max-w-8">
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
    console.log("rating", e.target.name)
    setRating(e.target.name)
  }

  const setSomeRating = (e: any) => {
    return rating === e.target.name
  }

  console.log("render workID component:")

  return (
    <div className="my-container">
      <div className="my-8 space-y-5 lg:flex justify-between">
        <div className="max-w-[22rem] w-[22rem]">
          <div className="flex justify-between text-gray-700">
            <Link href="/gallery" className=" lg:max-w-[35%] clear-left items-center mb-5">
              <IoMdArrowBack className="inline-block text-lg" />
              <span>gallery</span>
            </Link>

            <Rating />
          </div>

          <div className=" space-y-2">
            {renderComments()}
            <Button className="text-gray-700" onClick={() => setCommentOpen(true)}>
              Add comment...
            </Button>
          </div>
          <div id="Comments_form" className={`flex flex-col gap-4 max-w-md ${!commentOpen && "hidden"} `}>
            <label className="text-2xl">Comment form:</label>
            <input type="text" placeholder="Name..." value={name} onChange={e => setName(e.target.value)} />
            <textarea placeholder="Comment..." value={comment} onChange={e => setComment(e.target.value)} />
            <Button variant="secondary" onClick={handleCommentSubmit}>
              Submit
            </Button>
            <Button variant="danger" onClick={() => setCommentOpen(false)}>
              Cancel
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap bg-green-400 order-first">
          <ImageViewer mediaURLS={work.image_urls} />
        </div>
      </div>
    </div>
  )
}
