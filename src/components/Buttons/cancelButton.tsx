import React from 'react'
import classNames from 'classnames'

import BaseButton from '.'
import { IButton } from '../../utils/interface'

const CancelButton: React.FC<IButton> = ({ className, ...restProps }) => {
  const classes = classNames(
    'button py-2.5 px-9 rounded-md focus:outline-none bg-dark-shade4 hover:bg-primary text-text hover:text-white',
    className
  )

  return <BaseButton className={classes} {...restProps} />
}

export default CancelButton
