import React from 'react'

export type TNotificationRom = {
  size?: number
  className?: string
}

const NotificationRom = ({
  size = 24,
  className = 'text-primary',
}: TNotificationRom): JSX.Element => {
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
        d="M11.134 4.5C11.5189 3.83333 12.4811 3.83333 12.866 4.5L19.7942 16.5C20.1791 17.1667 19.698 18 18.9282 18H5.0718C4.302 18 3.82087 17.1667 4.20577 16.5L11.134 4.5Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default NotificationRom
