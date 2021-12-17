import React from 'react'

import { ICheckbox } from '../../utils/interface'

const Checkbox: React.FC<ICheckbox> = (props) => {
  const { className, label, value, onChange } = props

  return (
    <div className={className}>
      <label htmlFor="checkbox" className="flex items-center body">
        {label}
        <input
          type="checkbox"
          name="checkbox"
          id="checkbox"
          className="w-4 h-4 ml-3 text-primary rounded shadow-none focus:ring-white"
          checked={value}
          onChange={(e) => onChange(e.target.checked)}
        />
      </label>
    </div>
  )
}

export default Checkbox
