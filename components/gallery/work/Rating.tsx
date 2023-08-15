import { useState } from "react"

export default function Rating({ className }: { className?: string }) {
  console.log("Renders Rating component:")
  const [rating, setRating] = useState(0)
  const renderStars = () => {
    const starsArray = [1, 2, 3, 4, 5]
    for (let x = 0; x < 5; x++) {}
  }

  const handleRating = (e: any) => {
    console.log("rating clicked:", e.target.id)
  }

  return (
    <div className={`${className} flex`}>
      <div className="">0.0</div>
      <div className="rating">
        <input
          id="rating-1"
          type="radio"
          name="rating-1"
          className="mask mask-star bg-primary"
          onClick={e => handleRating(e)}
        />
        <input
          id="rating-2"
          type="radio"
          name="rating-1"
          className="mask mask-star bg-primary"
          onClick={e => handleRating(e)}
        />
        <input
          id="rating-3"
          type="radio"
          name="rating-1"
          className="mask mask-star bg-primary"
          onClick={e => handleRating(e)}
        />
        <input
          id="rating-4"
          type="radio"
          name="rating-1"
          className="mask mask-star bg-primary"
          onClick={e => handleRating(e)}
        />
        <input
          id="rating-5"
          type="radio"
          name="rating-1"
          className="mask mask-star bg-primary"
          onClick={e => handleRating(e)}
        />
      </div>
    </div>
  )
}
