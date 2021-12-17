import React from 'react'

export type TFolder = {
  size?: number
  className?: string
  stopColor?: string
}

const Folder = ({
  size = 16,
  className = 'text-text',
  stopColor = '#8BE7F5',
}: TFolder): JSX.Element => {
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
        d="M13.5 3.5H8.5C8.34475 3.5 8.19164 3.46386 8.05279 3.39443C7.91393 3.325 7.79315 3.2242 7.7 3.1L6.8 1.9C6.70685 1.7758 6.58607 1.675 6.44721 1.60557C6.30836 1.53615 6.15525 1.5 6 1.5H2.5C2.23478 1.5 1.98043 1.60536 1.79289 1.79289C1.60536 1.98043 1.5 2.23478 1.5 2.5V13.5C1.5 13.7652 1.60536 14.0196 1.79289 14.2071C1.98043 14.3946 2.23478 14.5 2.5 14.5H13.5C13.7652 14.5 14.0196 14.3946 14.2071 14.2071C14.3946 14.0196 14.5 13.7652 14.5 13.5V4.5C14.5 4.23478 14.3946 3.98043 14.2071 3.79289C14.0196 3.60536 13.7652 3.5 13.5 3.5Z"
        fill="url(#paint0_linear)"
      />
      <path
        d="M1.5 13.5H14.5C14.5 13.7652 14.3946 14.0196 14.2071 14.2071C14.0196 14.3946 13.7652 14.5 13.5 14.5H2.5C2.23478 14.5 1.98043 14.3946 1.79289 14.2071C1.60536 14.0196 1.5 13.7652 1.5 13.5Z"
        fill="#00CCE9"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="0.50816"
          y1="0.820835"
          x2="15.7083"
          y2="17.4155"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.17197" stopColor={stopColor} />
          <stop offset="0.74982" stopColor="currentColor" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default Folder
