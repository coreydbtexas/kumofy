import React from 'react'

export type TMinus = {
  size?: number
  className?: string
  strokeWidth?: number
}

const Minus = ({ size = 24, className = 'text-text', strokeWidth = 2 }: TMinus): JSX.Element => {
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
        d="M17 12H7"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Minus
