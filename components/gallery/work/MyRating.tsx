import { StarFilled, StarHalf } from "@/public/icons/RatingStars"
import classNames from "classnames"
import { useState } from "react"

type Props = {
  className?: string
  readOnly?: boolean
  ratings?: number[]
}

const size = 24
const defaultStyle = "peer peer-hover:text-primary-500 hover:text-primary-500 hover:cursor-pointer"
const readStyle = "peer peer-hover:text-primary-500 hover:text-primary-500 hover:cursor-pointer"

export default function MyRating({ className, readOnly = true, ratings = [] }: Props) {
  const [starClicked, setStarClicked] = useState(0)

  const getWorkRating = () => {
    if (ratings.length <= 0) return 0.0
    return ratings.reduce((a: any, b: any) => a + b) / ratings.length
  }
  const renderStarsReadOnly = () => {
    //   Rounds to the lowest 0.5
    const roundToLowerHalf = (rating: number) => {
      const isHalfStar = rating % 1 === 0 ? 0.0 : 0.5
      return Math.trunc(rating) + isHalfStar
    }

    const ratingRounded = roundToLowerHalf(getWorkRating())
    const ratingNoDecimal = Math.trunc(getWorkRating())

    return [5, 4, 3, 2, 1].map((star, idx) => {
      if (ratingRounded < star + 1) {
        if (ratingNoDecimal === star) {
          return <StarHalf key={idx} size={size} className="text-primary" />
        } else {
          return <StarFilled key={idx} size={size} className="text-white" />
        }
      } else {
        return <StarFilled key={idx} size={size} className="text-primary" />
      }
    })
  }

  const isClickedColor = (id: number) => {
    return id <= starClicked ? "text-primary" : "text-white"
  }

  const renderStars = () => {
    return [5, 4, 3, 2, 1].map(star => (
      <StarFilled
        key={`star-${star}`}
        id={`star-${star}`}
        size={size}
        className={classNames(defaultStyle, isClickedColor(star))}
        onClick={() => setStarClicked(star)}
      />
    ))
  }

  return (
    <div className={classNames(className, "flex flex-row-reverse")}>
      {readOnly ? (
        <>
          {renderStarsReadOnly()}
          <span className="mr-1 text-gray-700">({ratings.length})</span>
          <span className="mr-1 text-gray-700">{getWorkRating()}</span>
        </>
      ) : (
        <>
          {renderStars()}
          <span className="mr-1 text-gray-700">{starClicked.toFixed(1)}</span>
        </>
      )}
    </div>
  )
}
