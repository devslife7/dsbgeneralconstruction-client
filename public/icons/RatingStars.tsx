const primaryColor = "#ff9001"

type Props = {
  className?: string
  size?: number
  onClick?: (e: any) => void
  id?: string
}

export function StarFilled({ className, size = 0, onClick, id }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      viewBox="0 0 24 24"
      onClick={onClick}
      className={className}
      stroke={primaryColor}
      strokeWidth={1.7}
    >
      <path
        id={id}
        fill="currentColor"
        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"
      />
    </svg>
  )
}
export function StarHalf({ className, size = 0 }: Props) {
  const sizeAdjusted = size + 5
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={sizeAdjusted}
      height={sizeAdjusted}
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        fill="currentColor"
        d="m22 9.24l-7.19-.62L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21L12 17.27L18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28L12 15.4z"
      />
    </svg>
  )
}
