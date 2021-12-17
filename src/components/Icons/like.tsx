import React from 'react'

export type TLike = {
  size?: number
  className?: string
}

const Like = ({ size = 16, className = 'text-dark' }: TLike): JSX.Element => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.4"
        d="M14 6H8V2C8 0.8 7.2 0 6 0L3 7H1C0.4 7 0 7.4 0 8V15C0 15.6 0.4 16 1 16H12C13.4 16 14.7 15 14.9 13.6L15.9 8.4C16.2 7.2 15.3 6 14 6Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default Like
