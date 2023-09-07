"use client"
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import CommentForm from "./CommentForm"
import { useState } from "react"
import { DeleteSVG, StarFilledSVG } from "@/public/svgs"
import { useRouter } from "next/navigation"
import { deleteReview } from "@/lib/api_calls/reviews"

type WorkProps = {
    id: number
    title: string
    description: string
    image_urls: string[]
    rating: number
    Review: any[]
}

export default function Reviews({ work }: { work: WorkProps }) {
    const [isReviewFormOpen, setIsReviewFormOpen] = useState(false)
    const router = useRouter()

    const openReviewForm = () => setIsReviewFormOpen(true)
    const closeReviewForm = () => setIsReviewFormOpen(false)

    const handleReviewDelete = async (reviewId: number) => {
        const res = await deleteReview(reviewId)

        console.log(">>>>res", res)
        router.refresh()
    }

    const renderReviews = () => {
        return work.Review.map((review, index) => (
            <div key={index} className="my-10">
                <div className="flex gap-2">
                    <div className="inline-flex items-center justify-center w-12 h-10 bg-gray-800 rounded-full">
                        <span className="text-xl text-white uppercase">{review.name.charAt(0)}</span>
                    </div>
                    <div className="text-gray-500 w-full">
                        <span className="font-medium text-gray-800 whitespace-nowrap flex justify-between w-full items-center">
                            <div>{review.name}</div>
                        </span>
                        <div className="text-left">{review.comment}</div>
                    </div>
                    <div className="flex items-start gap-[0.18rem]">
                        <span className="text-base">{review.rating}</span>
                        <StarFilledSVG className="text-primary text-xl" />
                    </div>
                    <DeleteSVG
                        className="text-red-500 text-3xl hover:cursor-pointer hover:bg-gray-100 rounded-sm"
                        onClick={() => handleReviewDelete(review.id)}
                    />
                </div>
            </div>
        ))
    }

    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Reviews</DialogTitle>
                <DialogDescription>
                    {work.Review.length > 0 ? (
                        renderReviews()
                    ) : (
                        <div className="my-10">
                            <div className="text-center opacity-70 mb-4">
                                No reviews yet, be the first one to review.
                            </div>
                            {/* <div className="text-center opacity-70 cursor-pointer" onClick={openReviewForm}>
                                <u>add review</u>
                            </div> */}
                        </div>
                    )}
                    <div className="text-center opacity-70 cursor-pointer" onClick={openReviewForm}>
                        <u>add review</u>
                    </div>
                    <CommentForm
                        isCommentFormOpen={isReviewFormOpen}
                        closeCommentForm={closeReviewForm}
                        workId={work.id.toString()}
                    />
                </DialogDescription>
            </DialogHeader>
        </DialogContent>
    )
}
