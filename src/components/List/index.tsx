import React, { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import classNames from 'classnames'

import SmallDown from '../Icons/smallDown'
import NotificationCircle from '../Icons/notificationCircle'
import { IList } from '../../utils/interface'

const List: React.FC<IList> = (props) => {
  const { className, items, activeItem, onChange, buttonStyle } = props

  return (
    <div className={className}>
      <Listbox value={activeItem} onChange={onChange}>
        <div className="relative mt-1">
          <Listbox.Button
            className={classNames('relative flex items-center w-full menu', buttonStyle)}
          >
            <NotificationCircle className="min-w-[24px]" radius={4} aria-hidden="true" />
            <span className="block truncate text-text-deactive">{activeItem.value}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <SmallDown className="text-text" aria-hidden="true" />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-text bg-white rounded-3xl py-6 shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {items.map((item) => (
                <Listbox.Option
                  key={item.id}
                  className={({ active }) =>
                    `${active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'}
                          cursor-default select-none relative py-2 pl-14 pr-4`
                  }
                  value={item}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`${selected ? 'font-medium' : 'font-normal'} block truncate`}
                      >
                        {item.value}
                      </span>
                      {/* {selected ? ( */}
                      <span className="absolute inset-y-0 left-0 flex items-center pl-7">
                        <NotificationCircle
                          className={classNames(
                            'min-w-[24px]',
                            selected || active ? 'text-green' : 'text-accent2-shade4'
                          )}
                          radius={4}
                          aria-hidden="true"
                        />
                      </span>
                      {/* ) : null} */}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export default List
