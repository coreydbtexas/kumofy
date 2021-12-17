import React from 'react'

export type TRightArrow = {
  size?: number
  className?: string
  strokeWidth?: number
}

const RightArrow = ({
  size = 24,
  className = 'text-text',
  strokeWidth = 2,
}: TRightArrow): JSX.Element => {
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
        d="M14 8L18 12L14 16"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 12L7.6709 12"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default RightArrow
