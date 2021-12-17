import React from 'react'

export type TBell = {
  size?: number
  className?: string
  strokeWidth?: number
  fillColor?: string
}

const Bell = ({
  size = 24,
  className = 'text-text',
  strokeWidth = 2,
  fillColor = 'var(--color-dark)',
}: TBell): JSX.Element => {
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
        d="M19 11V8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8V11C5 14.3 2 15.1 2 17C2 18.7 5.9 20 12 20C18.1 20 22 18.7 22 17C22 15.1 19 14.3 19 11Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 22.0004C10.989 22.0004 10.039 21.9664 9.14499 21.9004C9.53615 23.1482 10.6923 23.9974 12 23.9974C13.3077 23.9974 14.4638 23.1482 14.855 21.9004C13.961 21.9664 13.011 22.0004 12 22.0004Z"
        fill={fillColor}
      />
    </svg>
  )
}

export default Bell
