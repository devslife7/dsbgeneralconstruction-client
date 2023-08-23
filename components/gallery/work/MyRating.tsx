import { useState } from "react"
import { StarFilled, StarHalf } from "@/public/icons/RatingStars"
import classNames from "classnames"

type Props = {
  className?: string
  readOnly?: boolean
  ratings?: number[]
}

const size = 30
const defaultStyle = "peer peer-hover:text-primary-500 hover:text-primary-500 hover:cursor-pointer"

// Display star rating in read only mode and as input mode, if in readonly privide ratings Array.
export default function MyRating({ className, readOnly = true, ratings = [] }: Props) {
  const [starClicked, setStarClicked] = useState(0)

  const getWorkRating = () => {
    if (ratings.length <= 0) return 0.0
    return ratings.reduce((a, b) => a + b, 0) / ratings.length
  }

  const renderStars = (readOnlyMode: boolean) => {
    const ratingAverage = getWorkRating()
    const ratingNoDecimal = Math.trunc(getWorkRating())

    return [5, 4, 3, 2, 1].map((star, idx) => {
      if (readOnlyMode) {
        if (star > ratingAverage) {
          if (ratingNoDecimal === star - 1 && ratingAverage % 1) {
            return <StarHalf key={idx} size={size} className="text-primary" />
          } else {
            return <StarFilled key={idx} size={size} className="text-white" />
          }
        }
        return <StarFilled key={idx} size={size} className="text-primary" />
      }

      return (
        <StarFilled
          key={star}
          size={size}
          className={classNames(defaultStyle, isClickedColor(star))}
          onClick={() => setStarClicked(star)}
        />
      )
    })
  }

  const isClickedColor = (id: number) => {
    return id <= starClicked ? "text-primary" : "text-white"
  }

  return (
    <div className={classNames(className, "flex flex-row-reverse items-center")}>
      {renderStars(readOnly)}
      {!readOnly && <span className="mr-1 text-gray-700">{starClicked.toFixed(1)}</span>}
      {readOnly && (
        <>
          <span className="mr-1 text-gray-700">({ratings.length})</span>
          <span className="mr-1 text-gray-700">{getWorkRating().toFixed(1)}</span>
        </>
      )}
    </div>
  )
}
