import React, { useState } from 'react'

import Input from '../Input'
import SearchIcon from '../Icons/search'

const Search: React.FC = () => {
  const [search, setSearch] = useState('')

  return (
    <div className="flex items-center">
      <SearchIcon className="absolute ml-1" />
      <Input value={search} onChange={setSearch} placeholder="search" className="-mt-4" />
    </div>
  )
}

export default Search
