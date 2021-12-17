import React from 'react'

export type TLeftArrow = {
  size?: number
  className?: string
  strokeWidth?: number
}

const LeftArrow = ({
  size = 24,
  className = 'text-text',
  strokeWidth = 2,
}: TLeftArrow): JSX.Element => {
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
        d="M11 16L7 12L11 8"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 12H17.3291"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default LeftArrow
