import React from 'react'

export type TArrowList = {
  size?: number
  className?: string
  strokeWidth?: number
}

const ArrowList = ({
  size = 24,
  className = 'text-text',
  strokeWidth = 2,
}: TArrowList): JSX.Element => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 9L12 5L16 9"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 15L12 19L8 15"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ArrowList
