"use client"
import { IoIosArrowBack } from "react-icons/io"
import Link from "next/link"
import { useEffect, useState } from "react"
import { fetchWork, deleteComment } from "@/utils/api_calls"
import MediaViewer from "@/components/gallery/work/MediaViewer"
import CommentForm from "@/components/gallery/work/CommentForm"
import MyRating from "@/components/gallery/work/MyRating"
import { cn } from "@/lib/utils"

type Props = {
    params: {
        workId: string
    }
}

// export async GrNetwork()

export default function Page({ params: { workId } }: Props) {
    const [work, setWork] = useState({ image_urls: [], comments: [], title: "", ratings: [] })
    const [commentFormOpen, setCommentFormOpen] = useState(false)
    // const isLoggedIn = localStorage.getItem("user")

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
                        <span className="font-medium text-gray-800 whitespace-nowrap">
                            {comment.username}
                        </span>
                        <div>{comment.content}</div>
                    </div>
                </div>
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
        const idx = work.comments.findIndex(
            (comment: { id: number }) => comment.id === response.data.comment.id
        )
        const newWorkOBJ = {
            ...work,
            comments: [...work.comments.slice(0, idx), ...work.comments.slice(idx + 1)],
        }
        setWork(newWorkOBJ)
    }

    return (
        <div className="my-8">
            <div className="space-y-5 lg:space-y-0 lg:flex my-container lg:justify-between lg:gap-4">
                <div className="w-full lg:max-w-xs">
                    <div className="flex justify-between text-gray-700">
                        <Link href="/gallery" className=" lg:max-w-[35%] clear-left">
                            <IoIosArrowBack className="inline-block text-lg" />
                            <u>Gallery</u>
                        </Link>

                        <MyRating ratings={work.ratings} />
                    </div>

                    {/* <div className="mt-7">
                        <div className="space-y-5 ">
                            {renderComments()}
                            <p
                                className={cn("text-gray-700 cursor-pointer", {
                                    hidden: commentFormOpen,
                                })}
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
                    </div> */}
                </div>

                <div className="flex flex-wrap justify-center order-first lg:justify-start">
                    {/* <MediaViewer mediaURLS={work.image_urls} /> */}
                </div>
            </div>
        </div>
    )
}
