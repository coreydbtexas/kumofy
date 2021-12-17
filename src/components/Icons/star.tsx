import React from 'react'

export type TStar = {
  size?: number
  className?: string
}

const Star = ({ size = 16, className = 'text-dark' }: TStar): JSX.Element => {
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
        d="M15.144 5.43892L10.828 4.81192L8.89697 0.900922C8.55897 0.217922 7.44097 0.217922 7.10297 0.900922L5.17297 4.81192L0.855974 5.43892C0.0389744 5.55792 -0.292026 6.56592 0.301974 7.14592L3.42597 10.1899L2.68897 14.4889C2.54997 15.3029 3.40597 15.9279 4.13997 15.5429L7.99997 13.5139L11.861 15.5439C12.589 15.9249 13.452 15.3099 13.312 14.4899L12.575 10.1909L15.699 7.14692C16.292 6.56592 15.961 5.55792 15.144 5.43892Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default Star
