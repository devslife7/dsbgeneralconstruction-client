type RatingPropTypes = {
  className?: string
  ratings: number[]
}

export default function MyRating({ className, ratings }: RatingPropTypes) {
  return (
    <div className={`${className} flex flex-row-reverse justify-center p-10`}>
      <i className="w-12 h-12 bg-yellow-100 peer peer-hover:bg-yellow-500 hover:bg-yellow-500 ">1</i>
      <i className="w-12 h-12 bg-yellow-100 peer peer-hover:bg-yellow-500 hover:bg-yellow-500">2</i>
      <i className="w-12 h-12 bg-yellow-100 peer peer-hover:bg-yellow-500 hover:bg-yellow-500">3</i>
      <i className="w-12 h-12 bg-yellow-100 peer peer-hover:bg-yellow-500 hover:bg-yellow-500">4</i>
      <i className="w-12 h-12 bg-yellow-100 peer peer-hover:bg-yellow-500 hover:bg-yellow-500 ">5</i>
    </div>
  )
}
