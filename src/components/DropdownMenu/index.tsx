import React from 'react'
import { Disclosure } from '@headlessui/react'
import classNames from 'classnames'

import Activity from '../Icons/activity'
import NotificationCircle from '../Icons/notificationCircle'
import SmallRight from '../Icons/smallRight'

const item = {
  name: 'Sites',
  icon: '',
  current: false,
  children: [
    { name: 'Site1', href: '/' },
    { name: 'Site2', href: '/' },
    { name: 'Site3', href: '/' },
    { name: 'Site4', href: '/' },
  ],
}

const Sidebar: React.FC = () => {
  return (
    <Disclosure as="div" key={item.name} className="space-y-1">
      {({ open }) => (
        <>
          <Disclosure.Button
            className={classNames(
              item.current
                ? 'bg-gray-100 text-text'
                : 'bg-white text-text-deactive hover:bg-gray-50 hover:text-text',
              'group w-full flex items-center py-5 pr-10 pl-8 text-left focus:outline-none border-white border-l-4 focus:border-primary'
            )}
          >
            <Activity className="text-primary" aria-hidden="true" />
            <span className="flex-1 menu ml-2">{item.name}</span>
            <SmallRight
              className={classNames(
                open ? 'text-text rotate-90' : 'text-text-deactive',
                'ml-3 mr-6 flex-shrink-0 h-5 w-5 transform group-hover:text-text transition-colors ease-in-out duration-150'
              )}
              aria-hidden="true"
            />
          </Disclosure.Button>
          <Disclosure.Panel className="mx-10 shadow-sm">
            {item.children.map((subItem) => (
              <a
                key={subItem.name}
                href={subItem.href}
                className="menu group w-full flex justify-between items-center pl-10 pr-2 py-2.5 text-text-deactive hover:text-link hover:bg-gray-50"
              >
                {subItem.name}
                <NotificationCircle
                  radius={4}
                  className="text-accent2-shade4 group-hover:text-green"
                />
              </a>
            ))}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Sidebar
