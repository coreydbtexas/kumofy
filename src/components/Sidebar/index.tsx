import React from 'react'

import DropdownMenu from '../DropdownMenu'
import GetProNow from './getProNow'
import Logo from '../../assets/images/logo182x42.png'
import UserIcon from '../../assets/images/tranmautritam.png'
import { TUser } from '../../utils/type'
import ArrowList from '../Icons/arrowList'

interface ISidebar {
  user?: TUser
}

const Sidebar: React.FC<ISidebar> = ({
  user = {
    name: 'Tan Tan',
    membership: 'Free account',
  },
}) => {
  return (
    <div className="hidden bg-white md:flex md:flex-shrink-0 border-r border-gray-200">
      <div className="flex flex-col w-64">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex-1 flex flex-col min-h-0">
          <div className="flex-1 flex flex-col pt-14 pb-12 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 pl-10">
              <img src={Logo} alt="Kumofy" />
            </div>
            <nav className="mt-12 flex-1 space-y-1">
              <DropdownMenu />
            </nav>
          </div>
          <div className="p-4">
            <GetProNow />
            <div className="flex items-center justify-center pt-6 pb-7 mt-12">
              <div>
                <img className="inline-block" src={UserIcon} alt="user icon" />
              </div>
              <div className="ml-3">
                <p className="menu">{user.name}</p>
                <p className="caption1">{user.membership}</p>
              </div>
              <ArrowList className="ml-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
