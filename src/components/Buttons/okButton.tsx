import React from 'react'
import classNames from 'classnames'

import BaseButton from '.'
import { IButton } from '../../utils/interface'

const OkButton: React.FC<IButton> = ({ className, ...restProps }) => {
  const classes = classNames(
    'button py-2.5 px-9 focus:outline-none text-white rounded-md	bg-dark hover:bg-primary',
    className
  )

  return <BaseButton className={classes} {...restProps} />
}

export default OkButton
