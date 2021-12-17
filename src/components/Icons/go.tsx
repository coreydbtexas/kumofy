import React from 'react'

export type TGo = {
  size?: number
  className?: string
  strokeWidth?: number
}

const Go = ({ size = 24, className = 'text-text', strokeWidth = 2 }: TGo): JSX.Element => {
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
        d="M10.7322 8.11133H16.3891V13.7682"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.3891 8.11129L9.08534 15.4151"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Go
