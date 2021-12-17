import React from 'react'

export type TEdit = {
  size?: number
  className?: string
  strokeWidth?: number
}

const Edit = ({ size = 24, className = 'text-text', strokeWidth = 2 }: TEdit): JSX.Element => {
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
        d="M16.375 11.125L12.875 7.625"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.8125 17.6875L5.4375 18.5625L6.3125 14.1875L15.0625 5.4375L18.5625 8.9375L9.8125 17.6875V17.6875Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Edit
