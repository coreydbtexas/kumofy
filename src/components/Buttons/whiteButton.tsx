import React from 'react'
import classNames from 'classnames'

import BaseButton from '.'
import { IButton } from '../../utils/interface'

const WhiteButton: React.FC<IButton> = ({ className, ...restProps }) => {
  const classes = classNames(
    'flex items-center button bg-white border border-black hover:bg-primary text-text hover:text-white hover:border-primary',
    className || 'py-[14px] px-[43px] rounded-2xl'
  )

  return <BaseButton className={classes} {...restProps} />
}

export default WhiteButton
