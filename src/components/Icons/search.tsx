import React from 'react'

export type TSearch = {
  size?: number
  className?: string
}

const Search = ({ size = 18, className = 'text-text' }: TSearch): JSX.Element => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.70866 1.5C4.72742 1.5 1.5 4.65614 1.5 8.54945C1.5 12.4427 4.72742 15.5989 8.70866 15.5989C10.4114 15.5989 11.9763 15.0216 13.2097 14.0561L15.5528 16.3415L15.6151 16.394C15.8327 16.5514 16.1411 16.5335 16.3379 16.3405C16.5544 16.1282 16.554 15.7844 16.3369 15.5727L14.0214 13.3142C15.1987 12.0595 15.9173 10.3866 15.9173 8.54945C15.9173 4.65614 12.6899 1.5 8.70866 1.5ZM8.70866 2.5858C12.0767 2.5858 14.807 5.25581 14.807 8.54944C14.807 11.8431 12.0767 14.5131 8.70866 14.5131C5.34064 14.5131 2.61033 11.8431 2.61033 8.54944C2.61033 5.25581 5.34064 2.5858 8.70866 2.5858Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default Search
