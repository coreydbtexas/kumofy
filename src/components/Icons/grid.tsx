import React from 'react'

export type TGrid = {
  size?: number
  className?: string
  strokeWidth?: number
}

const Grid = ({ size = 24, className = 'text-text', strokeWidth = 2 }: TGrid): JSX.Element => {
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
        d="M5.5 12.5H19.5"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 5.5V19.5"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.5 19.5H6.5C5.948 19.5 5.5 19.052 5.5 18.5V6.5C5.5 5.948 5.948 5.5 6.5 5.5H18.5C19.052 5.5 19.5 5.948 19.5 6.5V18.5C19.5 19.052 19.052 19.5 18.5 19.5Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Grid
