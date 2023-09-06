import Button from "@/components/ui/button"
import { useState } from "react"
import { addRatingToWork, createComment, createCommentAndRating } from "@/lib/api_calls/api_calls"
import MyRating from "../../_oldcomponents/work/MyRating"
import { useRouter } from "next/navigation"

type Props = {
    isCommentFormOpen: boolean
    closeCommentForm: () => void
    workId: string
    setWork?: (arg: any) => void
}

export default function CommentForm({ isCommentFormOpen, closeCommentForm, workId, setWork }: Props) {
    const [name, setName] = useState("")
    const [comment, setComment] = useState("")
    const [rating, setRating] = useState(0)
    const router = useRouter()

    // creates a new comment as well as a new rating
    const handleCommentSubmit = async () => {
        const requestOBJ = {
            username: name,
            content: comment,
            work_id: workId,
        }
        const response = await createCommentAndRating(requestOBJ, workId, rating)
        // setWork(response)
        console.log("response: ", response)
        router.refresh()
        resetForm()
    }

    const resetForm = () => {
        setName("")
        setComment("")
        setRating(0)
        closeCommentForm()
    }

    return (
        <div
            id="Comments_form"
            className={`flex flex-col mt-5 gap-4 max-w-md ${!isCommentFormOpen && "hidden"}  p-4`}
        >
            <div className="flex justify-between">
                <h1 className="text-xl text-gray-700">Comment</h1>
                <MyRating readOnly={false} setRatingParent={setRating} parentRating={rating} />
            </div>
            <input
                type="text"
                placeholder="Name..."
                value={name}
                onChange={e => setName(e.target.value)}
                className="block w-full px-3 py-2 mt-1 text-sm bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
            <textarea
                placeholder="Comment..."
                value={comment}
                rows={4}
                onChange={e => setComment(e.target.value)}
                className="block w-full px-3 py-2 mt-1 text-sm bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
            <div className="flex justify-end space-x-2">
                <Button variant="primary" onClick={handleCommentSubmit}>
                    Post
                </Button>
            </div>
        </div>
    )
}
