import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import CommentForm from "./CommentForm"

type WorkProps = {
    id: number
    title: string
    description: string
    image_urls: string[]
    ratings: number[]
    comments: any[]
}

export default function Reviews({ work }: { work: WorkProps }) {
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
                    {work.comments.length > 0 ? (
                        renderComments()
                    ) : (
                        <div className="my-10">
                            <div className="text-center opacity-70 mb-4">
                                No reviews yet, be the first one to review.
                            </div>
                            <div className="text-center opacity-70 cursor-pointer">
                                <u>add review</u>
                            </div>
                        </div>
                    )}

                    <CommentForm />
                </DialogDescription>
            </DialogHeader>
        </DialogContent>
    )
}