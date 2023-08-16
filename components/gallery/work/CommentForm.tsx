import Button from "@/components/shared/Button"
import { useState } from "react"
import RatingForm from "@/components/gallery/work/RatingForm"
import { createComment } from "@/utils/api_calls"

type CommentPropTypes = {
  commentFormOpen: boolean
  setCommentFormOpen: (arg: boolean) => void
  workId: string
  setWork: (arg: any) => void
}

export default function CommentForm(props: CommentPropTypes) {
  const { commentFormOpen, setCommentFormOpen, workId, setWork } = props
  const [name, setName] = useState("")
  const [comment, setComment] = useState("")

  const handleCommentSubmit = async () => {
    const requstOBJ = {
      username: name,
      content: comment,
      work_id: workId,
    }

    const response = await createComment(requstOBJ)
    setWork(response.data)
    setCommentFormOpen(false)
    setName("")
    setComment("")
  }

  return (
    <div
      id="Comments_form"
      className={`flex flex-col gap-4 max-w-md ${
        !commentFormOpen && "hidden"
      } border-solid border-2 p-4 rounded-md`}
    >
      <div className="flex justify-between text-gray-700">
        <label className="text-xl ">Add Comment</label>
        <RatingForm />
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
      <Button variant="primary" onClick={handleCommentSubmit}>
        Submit
      </Button>
      <Button variant="cancel" onClick={() => setCommentFormOpen(false)}>
        Cancel
      </Button>
    </div>
  )
}
