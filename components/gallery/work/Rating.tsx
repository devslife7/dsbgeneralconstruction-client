export default function Rating({ className, workRating = 4.7 }: { className?: string; workRating?: number }) {
  const ratingRange = [0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0]

  //   Rounds to the lowest 0.5
  const roundToLowerHalf = (rating: number) => {
    const isHalfStar = rating % 1 === 0 ? 0.0 : 0.5
    return Math.trunc(rating) + isHalfStar
  }

  const renderStars = () => {
    return ratingRange.map((range, index) => (
      <input
        key={index}
        id={`rating-${range}`}
        type="radio"
        name="rating-1"
        className={`bg-primary mask mask-star mask-half-${range % 1 === 0 ? "2" : "1"} hover:cursor-default ${
          range === 0 && "hidden"
        }`}
        disabled
        readOnly
        checked={roundToLowerHalf(workRating) === range}
      />
    ))
  }

  return (
    <div className={`${className} flex space-x-2`}>
      <div className="text-xl">{workRating.toFixed(1)}</div>
      <div className="rating rating-half">{renderStars()}</div>
    </div>
  )
}
