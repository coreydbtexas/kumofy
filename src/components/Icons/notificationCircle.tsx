import React from 'react'

export type TNotificationCircle = {
  size?: number
  className?: string
  radius?: number
}

const NotificationCircle = ({
  size = 24,
  className = 'text-accent2-shade4',
  radius = 8,
}: TNotificationCircle): JSX.Element => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r={radius} fill="currentColor" />
    </svg>
  )
}

export default NotificationCircle
