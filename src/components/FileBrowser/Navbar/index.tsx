import React, { useState } from 'react'

import Listbox from '../../List'
import { ListItems } from '../../../utils/mock'
import Search from '../../Search'
import DNS from './dns'
import Download from './download'
import Delete from './delete'
import Deploy from './deploy'

const Navbar: React.FC = () => {
  const [listItem, setListItem] = useState(ListItems[0])

  return (
    <div className="flex items-center bg-dark-shade1 rounded-lg px-2">
      <Listbox
        items={ListItems}
        onChange={setListItem}
        activeItem={listItem}
        className="w-48 mr-2"
        buttonStyle="rounded bg-white p-1"
      />
      <Search />
      <DNS />
      <Download />
      <Delete />
      <Deploy />
    </div>
  )
}

export default Navbar
