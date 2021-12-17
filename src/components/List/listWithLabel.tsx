import React from 'react'

import Listbox from '.'
import { IList } from '../../utils/interface'

export interface IListWithLabel {
  label: string
  className?: string
  List: IList
  error?: string
}

const ListWithLabel: React.FC<IListWithLabel> = (props) => {
  const { label, className, List, error } = props

  return (
    <div className={className}>
      <label htmlFor="inputbox" className="block caption2 text-text-deactive-light">
        {label}
        <Listbox {...List} />
      </label>
      {error ? (
        <p className="mt-2 text-sm text-red-600" id="ListWithLabel-error">
          {error}
        </p>
      ) : null}
    </div>
  )
}

export default ListWithLabel
