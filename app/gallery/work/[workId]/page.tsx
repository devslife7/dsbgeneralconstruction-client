"use client"
import { IoMdArrowBack } from "react-icons/io"
import Link from "next/link"
import { useEffect, useState } from "react"
import { fetchWork, deleteComment } from "@/utils/api_calls"
import MediaViewer from "@/components/gallery/work/MediaViewer"
import Button from "@/components/shared/Button"
import Rating from "@/components/gallery/work/Rating"
import CommentForm from "@/components/gallery/work/CommentForm"

type Props = {
  params: {
    workId: string
    isLoggedIn: boolean
  }
}

export default function Page({ params: { workId } }: Props) {
  const [work, setWork] = useState({ image_urls: [], comments: [], title: "", ratings: [] })
  const [commentFormOpen, setCommentFormOpen] = useState(false)

  const openCommentForm = () => setCommentFormOpen(true)
  const closeCommentForm = () => setCommentFormOpen(false)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchWork(workId)
      setWork(response.data)
    }
    fetchData()
  }, [workId])

  const renderComments = () => {
    type Comment = any[]
    const cmts: Comment = work.comments
    console.log("work.comments:", work.comments)

    return cmts.map((comment, index) => (
      <div key={index}>
        <div className="flex items-start gap-2">
          <div className="avatar placeholder">
            <div className="rounded-full bg-neutral-focus text-neutral-content w-[1.8rem]">
              <span className="text-xl uppercase">{comment.username.charAt(0)}</span>
            </div>
          </div>
          {/* <div className="text-gray-800 whitespace-nowrap">{comment.username}</div> */}
          <div className="text-gray-500">
            <span className="mr-2 font-medium text-gray-800 whitespace-nowrap">{comment.username}</span>
            {comment.content}
          </div>
        </div>
        {/* <div className="mt-1 text-gray-600">{comment.content}</div> */}
        {/* {isLoggedIn && (
          <button className="mt-6 btn btn-error" onClick={() => handleCommentDelete(comment.id)}>
            Delete
          </button>
        )} */}
        {/* {true && (
          <button className="mt-2 btn btn-error" onClick={() => handleCommentDelete(comment.id)}>
            Delete
          </button>
        )} */}
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

  return (
    <div className="my-container">
      <div className="justify-between my-8 space-y-5 lg:flex">
        <div className="max-w-[22rem] w-[22rem]">
          <div className="flex justify-between text-gray-700 ">
            <Link href="/gallery" className=" lg:max-w-[35%] clear-left items-center mb-5">
              <IoMdArrowBack className="inline-block text-xl" />
              <u>gallery</u>
            </Link>

            <Rating ratings={work.ratings} />
          </div>

          <div className="mt-7">
            <div className="space-y-5 ">
              {renderComments()}
              <p
                className={`text-gray-700 cursor-pointer  ${!!commentFormOpen && "hidden"}`}
                onClick={openCommentForm}
              >
                <u>Add comment...</u>
              </p>
            </div>
            <CommentForm
              workId={workId}
              setWork={setWork}
              commentFormOpen={commentFormOpen}
              closeCommentForm={closeCommentForm}
            />
          </div>
        </div>

        <div className="flex flex-wrap order-first bg-green-400">
          <MediaViewer mediaURLS={work.image_urls} />
        </div>
      </div>
    </div>
  )
}
