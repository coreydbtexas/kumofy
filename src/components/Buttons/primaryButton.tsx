import React from 'react'
import classNames from 'classnames'

import BaseButton from '.'
import { IButton } from '../../utils/interface'

const PrimaryButton: React.FC<IButton> = ({ className, ...restProps }) => {
  const classes = classNames(
    'flex items-center button text-white	bg-dark hover:bg-primary',
    className || 'py-[14px] px-[43px] rounded-2xl'
  )

  return <BaseButton className={classes} {...restProps} />
}

export default PrimaryButton
