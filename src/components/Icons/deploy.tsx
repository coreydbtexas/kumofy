import React from 'react'

export type TDeploy = {
  size?: number
  className?: string
}

const Deploy = ({ size = 24, className = 'text-black' }: TDeploy): JSX.Element => {
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
        d="M3.66669 12C3.66669 13.9891 4.45686 15.8968 5.86339 17.3033C7.26991 18.7098 9.17756 19.5 11.1667 19.5C13.1584 19.5 15.0667 18.7167 16.5 17.3333L15.25 16.0833C14.7252 16.6387 14.0921 17.0805 13.3897 17.3815C12.6874 17.6825 11.9308 17.8363 11.1667 17.8333C5.96669 17.8333 3.36669 11.55 7.04169 7.875C10.7167 4.2 17 6.80833 17 12H14.5L17.8334 15.3333H17.9167L21.1667 12H18.6667C18.6667 10.0109 17.8765 8.10322 16.47 6.6967C15.0635 5.29018 13.1558 4.5 11.1667 4.5C9.17756 4.5 7.26991 5.29018 5.86339 6.6967C4.45686 8.10322 3.66669 10.0109 3.66669 12Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default Deploy
