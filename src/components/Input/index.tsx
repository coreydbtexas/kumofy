import React from 'react'

import { IInput } from '../../utils/interface'

const Input: React.FC<IInput> = (props) => {
  const { className, label, type = 'text', placeholder = '', value, onChange, error } = props

  return (
    <div className={className}>
      <label htmlFor="inputbox" className="block caption2 text-text-deactive-light">
        {label}
        <input
          type={type}
          name="inputbox"
          id="inputbox"
          className="block w-full mt-4 text-text focus:outline-none py-[18px] px-6 menu bg-dark-shade1 border-none rounded-lg focus:ring-dark-shade4"
          placeholder={placeholder}
          value={value}
          aria-invalid="true"
          aria-describedby="input-error"
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
      {error ? (
        <p className="mt-2 text-sm text-red-600" id="input-error">
          {error}
        </p>
      ) : null}
    </div>
  )
}

export default Input
