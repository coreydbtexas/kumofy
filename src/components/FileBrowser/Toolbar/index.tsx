import React, { useState } from 'react'

import Listbox from '../../List'
import { ListItems } from '../../../utils/mock'

const Navbar: React.FC = () => {
  const [listItem, setListItem] = useState(ListItems[0])

  return (
    <div>
      <Listbox
        items={ListItems}
        onChange={setListItem}
        activeItem={listItem}
        className="w-52"
        buttonStyle="rounded bg-white p-1"
      />
    </div>
  )
}

export default Navbar
