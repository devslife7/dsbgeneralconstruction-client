"use client"
import { IoIosLogIn, IoMdArrowBack } from "react-icons/io"
import Link from "next/link"
import { useEffect, useState } from "react"
import { fetchWork, createComment, deleteComment } from "@/utils/api_calls"
import MediaViewer from "@/components/gallery/work/MediaViewer"
import Button from "@/components/shared/Button"
import Rating from "@/components/gallery/work/Rating"
import RatingForm from "@/components/gallery/work/RatingForm"
import CommentForm from "@/components/gallery/work/CommentForm"

export default function Page({ params: { workId } }: { params: { workId: string; isLoggedIn: boolean } }) {
  const [work, setWork] = useState({ image_urls: [], comments: [], title: "" })
  const [commentFormOpen, setCommentFormOpen] = useState(false)
  const [name, setName] = useState("")
  const [comment, setComment] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchWork(workId)
      setWork(response.data)
    }
    fetchData()
  }, [workId])

  // const handleCommentSubmit = async () => {
  //   const requstOBJ = {
  //     username: name,
  //     content: comment,
  //     work_id: workId,
  //   }

  //   const response = await createComment(requstOBJ)
  //   setWork(response.data)
  //   setCommentFormOpen(false)
  //   setName("")
  //   setComment("")
  // }

  const renderComments = () => {
    type Comment = any[]
    const cmts: Comment = work.comments
    if (cmts === undefined) return
    if (cmts.length < 1) return

    return cmts.map((comment, index) => (
      <div key={index} className="mb-10">
        <div className="flex items-center gap-2">
          <div className="avatar placeholder">
            <div className="rounded-full bg-neutral-focus text-neutral-content max-w-8">
              <span className="text-lg uppercase">{comment.username.charAt(0)}</span>
            </div>
          </div>
          <div className="text-lg">{comment.username}</div>
        </div>
        <div>{comment.content}</div>
        {/* {isLoggedIn && (
          <button className="mt-6 btn btn-error" onClick={() => handleCommentDelete(comment.id)}>
            Delete
          </button>
        )} */}
        {true && (
          <button className="mt-6 btn btn-error" onClick={() => handleCommentDelete(comment.id)}>
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

  return (
    <div className="my-container">
      <div className="justify-between my-8 space-y-5 lg:flex">
        <div className="max-w-[22rem] w-[22rem]">
          <div className="flex justify-between text-gray-700 ">
            <Link href="/gallery" className=" lg:max-w-[35%] clear-left items-center mb-5">
              <IoMdArrowBack className="inline-block text-2xl" />
              <span>gallery</span>
            </Link>

            <Rating />
          </div>

          <div className=" mt-7">
            <div className="space-y-2 ">
              {renderComments()}
              <Button
                className={`text-gray-700 ${!!commentFormOpen && "hidden"}`}
                onClick={() => setCommentFormOpen(true)}
              >
                Add comment...
              </Button>
            </div>

            <CommentForm
              workId={workId}
              setWork={setWork}
              commentFormOpen={commentFormOpen}
              setCommentFormOpen={setCommentFormOpen}
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
