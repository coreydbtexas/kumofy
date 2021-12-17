import React from 'react'

export type TConfirm = {
  size?: number
  className?: string
  fillColor?: string
}

const Confirm = ({
  size = 50,
  className = 'text-text',
  fillColor = 'white',
}: TConfirm): JSX.Element => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="25" cy="25" r="24.5" fill={fillColor} stroke="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.0258 19.8593C31.294 19.5934 31.6561 19.4438 32.0338 19.4427C32.4115 19.4417 32.7744 19.5893 33.0441 19.8537C33.3138 20.1181 33.4686 20.4781 33.4751 20.8557C33.4815 21.2333 33.339 21.5983 33.0785 21.8718L25.4272 31.436C25.2957 31.5776 25.137 31.6913 24.9605 31.7702C24.7841 31.8491 24.5936 31.8916 24.4003 31.8951C24.2071 31.8987 24.0151 31.8633 23.8359 31.791C23.6567 31.7187 23.4938 31.611 23.3572 31.4743L18.2876 26.4028C18.1464 26.2712 18.0331 26.1125 17.9545 25.9362C17.876 25.7598 17.8337 25.5695 17.8303 25.3765C17.8269 25.1834 17.8624 24.9917 17.9347 24.8127C18.007 24.6337 18.1146 24.4711 18.2511 24.3346C18.3876 24.1981 18.5502 24.0905 18.7292 24.0182C18.9082 23.9459 19.0999 23.9104 19.2929 23.9138C19.486 23.9172 19.6763 23.9595 19.8526 24.038C20.029 24.1166 20.1877 24.2299 20.3193 24.3711L24.3328 28.3827L30.9894 19.9015C31.0012 19.8866 31.014 19.8725 31.0277 19.8593H31.0258Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default Confirm