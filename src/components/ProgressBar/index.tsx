import React from 'react'

import { IProgressBar } from '../../utils/interface'

const Button: React.FC<IProgressBar> = (props) => {
  const { className, label, percentage } = props

  const percentageString = `${percentage}%`

  return (
    <div className={className}>
      <div className="flex mb-1 items-center justify-between">
        <div>
          <span className="caption2 text-text-deactive-light">{label}</span>
        </div>
        <div className="text-right">
          <span className="caption2 text-text-deactive-light">{percentageString}</span>
        </div>
      </div>
      <div className="overflow-hidden h-2 flex rounded bg-dark-shade4 mx-1.5">
        <div
          style={{ width: percentageString }}
          className="shadow-none flex flex-col text-center rounded whitespace-nowrap text-white justify-center bg-primary"
        />
      </div>
    </div>
  )
}

export default Button
