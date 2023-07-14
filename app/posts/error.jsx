'use client'

import { useEffect } from 'react'

const Error = ({ error, reset }) => {
  useEffedct(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
  return (
    <div>
      <h2>Something went wront!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}

export default Error
