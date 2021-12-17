import React from 'react'

export type TSmallRight = {
  size?: number
  className?: string
  strokeWidth?: number
}

const SmallRight = ({
  size = 24,
  className = 'text-text',
  strokeWidth = 2,
}: TSmallRight): JSX.Element => {
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
        d="M10 8L14 12L10 16"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default SmallRight
