import { useState } from "react"

export default function RatingForm() {
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

  return (
    <div className={`flex space-x-2`}>
      <div className="text-xl">{rating.toFixed(1)}</div>
      <div className="rating">{renderStars()}</div>
    </div>
  )
}
