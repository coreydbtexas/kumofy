import React from 'react'

import Sidebar from '../Sidebar'

interface ILayout {
  children: React.ReactNode
}

const Layout: React.FC<ILayout> = (props) => {
  const { children } = props

  return (
    <div className="h-screen flex">
      <Sidebar />
      <main className="w-full">{children}</main>
    </div>
  )
}

export default Layout
