import React from 'react'

export type TComment = {
  size?: number
  className?: string
}

const Comment = ({ size = 16, className = 'text-dark' }: TComment): JSX.Element => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.4"
        d="M8 0C3.6 0 0 3.1 0 7C0 10.9 3.6 14 8 14C8.4 14 8.8 14 9.1 13.9L14 16V11.6C15.2 10.4 16 8.8 16 7C16 3.1 12.4 0 8 0Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default Comment
