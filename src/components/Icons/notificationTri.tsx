import React from 'react'

export type TNotificationTri = {
  size?: number
  className?: string
}

const NotificationTri = ({
  size = 24,
  className = 'text-secondary-shade2',
}: TNotificationTri): JSX.Element => {
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
        d="M11.2929 3.70711C11.6834 3.31658 12.3166 3.31658 12.7071 3.70711L21.2929 12.2929C21.6834 12.6834 21.6834 13.3166 21.2929 13.7071L12.7071 22.2929C12.3166 22.6834 11.6834 22.6834 11.2929 22.2929L2.70711 13.7071C2.31658 13.3166 2.31658 12.6834 2.70711 12.2929L11.2929 3.70711Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default NotificationTri
