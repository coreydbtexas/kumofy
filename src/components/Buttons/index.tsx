import React from 'react'

import { IButton } from '../../utils/interface'

const Button: React.FC<IButton> = ({ className, label, icon, ...rest }) => {
  return (
    <button type="button" className={className} {...rest}>
      {icon || null}
      {label}
    </button>
  )
}

export default Button
