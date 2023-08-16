import Button from "@/components/shared/Button"
import { useState } from "react"
import { addRatingToWork, createComment } from "@/utils/api_calls"

type CommentPropTypes = {
  commentFormOpen: boolean
  closeCommentForm: () => void
  workId: string
  setWork: (arg: any) => void
}

export default function CommentForm(props: CommentPropTypes) {
  const { commentFormOpen, closeCommentForm, workId, setWork } = props
  const [name, setName] = useState("")
  const [comment, setComment] = useState("")
  const [rating, setRating] = useState(0)
  const ratingRange = [0, 1.0, 2.0, 3.0, 4.0, 5.0]

  const handleRating = (e: any) => {
    const ratingSet = e.target.id.slice(-1)
    setRating(parseInt(ratingSet))
  }

  const renderStars = () => {
    return ratingRange.map((range, index) => (
      <input
        key={index}
        id={`rating-${range}`}
        type="radio"
        name="rating-1"
        className={`bg-primary mask mask-star ${range === 0 && "hidden"}`}
        checked={rating === range}
        onClick={e => handleRating(e)}
        readOnly
      />
    ))
  }

  // creates a new comment as well as a new rating
  const handleCommentSubmit = async () => {
    const requstOBJ = {
      username: name,
      content: comment,
      work_id: workId,
    }

    const response = await createComment(requstOBJ)
    const response2 = await addRatingToWork(workId, rating)
    const newWork = { ...response.data, ratings: response2.data.work.ratings }
    setWork(newWork)
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
      className={`flex flex-col mt-5 gap-4 max-w-md ${
        !commentFormOpen && "hidden"
      } border-solid border-2 p-4 rounded-md`}
    >
      <div className="flex justify-between text-gray-700">
        <label className="text-lg ">Add Comment</label>
        <div className="flex space-x-1">
          <div className="text-lg">{rating.toFixed(1)}</div>
          <div className="rating">{renderStars()}</div>
        </div>
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
      <div className="flex justify-end gap-4 ">
        <Button variant="cancel" onClick={resetForm}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleCommentSubmit}>
          Post
        </Button>
      </div>
    </div>
  )
}
