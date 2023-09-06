"use client"
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import CommentForm from "./CommentForm"
import { useState } from "react"
import { DeleteSVG } from "@/public/svgs"
import { deleteComment } from "@/lib/api_calls/api_calls"
import { useRouter } from "next/navigation"

type WorkProps = {
    id: number
    title: string
    description: string
    image_urls: string[]
    ratings: number[]
    comments: any[]
}

const workDefault = {
    id: 0,
    title: "string",
    description: "string",
    image_urls: [],
    ratings: [],
    comments: [],
}

export default function Reviews({ work = workDefault }: { work: WorkProps }) {
    const [openCommentForm, setOpenCommentForm] = useState(false)
    const router = useRouter()

    const commentFormOpen = () => setOpenCommentForm(true)
    const closeCommentForm = () => setOpenCommentForm(false)

    const handleCommentDelete = async (comment_id: number) => {
        const response = await deleteComment(comment_id)
        router.refresh()
        // const idx = work.comments.findIndex(
        //     (comment: { id: number }) => comment.id === response.data.comment.id
        // )
        // const newWorkOBJ = {
        //     ...work,
        //     comments: [...work.comments.slice(0, idx), ...work.comments.slice(idx + 1)],
        // }
        // setWork(newWorkOBJ)
    }

    const renderComments = () => {
        console.log("work.comments: ", work.comments)
        return work.comments.map((comment, index) => (
            <div key={index} className="my-10">
                <div className="flex gap-2">
                    <div className="inline-flex items-center justify-center w-11 h-10 bg-gray-800 rounded-full">
                        <span className="text-xl text-white uppercase">{comment.username.charAt(0)}</span>
                    </div>
                    <div className="text-gray-500 w-full">
                        <span className="font-medium text-gray-800 whitespace-nowrap flex justify-between w-full items-center">
                            <div>{comment.username}</div>
                            <DeleteSVG
                                className="text-red-500 text-xl"
                                onClick={() => handleCommentDelete(comment.id)}
                            />
                        </span>
                        <div className="text-left">{comment.content}</div>
                    </div>
                </div>
                {/* {true && (
                    <button className="mt-2 text-red-500" onClick={() => handleCommentDelete(comment.id)}>
                        <u>Delete</u>
                    </button>
                )} */}
            </div>
        ))
    }

    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Reviews</DialogTitle>
                <DialogDescription>
                    {/* {work.comments.length > 0 ? (
                        renderComments()
                    ) : (
                        <div className="my-10">
                            <div className="text-center opacity-70 mb-4">
                                No reviews yet, be the first one to review.
                            </div>
                            <div className="text-center opacity-70 cursor-pointer" onClick={commentFormOpen}>
                                <u>add review</u>
                            </div>
                        </div>
                    )} */}

                    {renderComments()}

                    <div className="my-10">
                        <div className="text-center opacity-70 mb-4">
                            No reviews yet, be the first one to review.
                        </div>
                        <div className="text-center opacity-70 cursor-pointer" onClick={commentFormOpen}>
                            <u>add review</u>
                        </div>
                    </div>

                    <CommentForm
                        isCommentFormOpen={openCommentForm}
                        closeCommentForm={closeCommentForm}
                        workId={work.id.toString()}
                    />
                </DialogDescription>
            </DialogHeader>
        </DialogContent>
    )
}
