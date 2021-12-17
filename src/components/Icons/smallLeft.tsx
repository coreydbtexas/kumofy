import React from 'react'

export type TSmallLeft = {
  size?: number
  className?: string
  strokeWidth?: number
}

const SmallLeft = ({
  size = 24,
  className = 'text-text',
  strokeWidth = 2,
}: TSmallLeft): JSX.Element => {
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
        d="M14 16L10 12L14 8"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default SmallLeft
