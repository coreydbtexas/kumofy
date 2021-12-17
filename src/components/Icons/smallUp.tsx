import React from 'react'

export type TSmallUp = {
  size?: number
  className?: string
  strokeWidth?: number
}

const SmallUp = ({
  size = 24,
  className = 'text-text',
  strokeWidth = 2,
}: TSmallUp): JSX.Element => {
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
        d="M8 14L12 10L16 14"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default SmallUp
