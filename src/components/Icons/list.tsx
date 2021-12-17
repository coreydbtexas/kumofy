import React from 'react'

export type TList = {
  size?: number
  className?: string
  strokeWidth?: number
}

const List = ({ size = 24, className = 'text-text', strokeWidth = 2 }: TList): JSX.Element => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.5 4.5H18.5C19.052 4.5 19.5 4.948 19.5 5.5V18.5C19.5 19.052 19.052 19.5 18.5 19.5H5.5C4.948 19.5 4.5 19.052 4.5 18.5V5.5C4.5 4.948 4.948 4.5 5.5 4.5Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 9.5H15.5"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 14.5H15.5"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default List
