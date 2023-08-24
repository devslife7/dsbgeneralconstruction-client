"use client"
import { IoMdArrowBack } from "react-icons/io"
import Link from "next/link"
import { useEffect, useState } from "react"
import { fetchWork, deleteComment } from "@/utils/api_calls"
import MediaViewer from "@/components/gallery/work/MediaViewer"
import CommentForm from "@/components/gallery/work/CommentForm"
import MyRating from "@/components/gallery/work/MyRating"
import classNames from "classnames"

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

    return cmts.map((comment, index) => (
      <div key={index}>
        <div className="flex gap-2">
          <div className="inline-flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full">
            <span className="text-xl text-white uppercase">{comment.username.charAt(0)}</span>
          </div>
          <div className="text-gray-500 ">
            <span className="font-medium text-gray-800 whitespace-nowrap">{comment.username}</span>
            <div>{comment.content}</div>
          </div>
        </div>
        {/* {isLoggedIn && (
          <button className="mt-6 btn btn-error" onClick={() => handleCommentDelete(comment.id)}>
            Delete
          </button>
        )} */}
        {true && (
          <button className="mt-2 text-red-500" onClick={() => handleCommentDelete(comment.id)}>
            <u>Delete</u>
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

  return (
    <div className="my-8 my-container">
      <div className="justify-between space-y-5 lg:flex">
        <div className="max-w-[22rem] w-[22rem]">
          <div className="flex justify-between text-gray-700">
            <Link href="/gallery" className=" lg:max-w-[35%] clear-left items-center">
              <IoMdArrowBack className="inline-block text-xl" />
              <u>gallery</u>
            </Link>

            <MyRating ratings={work.ratings} />
          </div>

          <div className="mt-7">
            <div className="space-y-5 ">
              {renderComments()}
              <p
                className={classNames("text-gray-700 cursor-pointer", { hidden: commentFormOpen })}
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
