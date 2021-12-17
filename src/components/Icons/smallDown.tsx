import React from 'react'

export type TSmallDown = {
  size?: number
  className?: string
  strokeWidth?: number
}

const SmallDown = ({
  size = 24,
  className = 'text-text',
  strokeWidth = 2,
}: TSmallDown): JSX.Element => {
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
        d="M16 10L12 14L8 10"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default SmallDown
