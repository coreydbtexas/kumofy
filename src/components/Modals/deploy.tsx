import React, { useState } from 'react'

import BaseModal from '.'
import Checkbox from '../Checkbox'
import Input from '../Input'
import ListWithLabel from '../List/listWithLabel'
import { IModal } from '../../utils/interface'
import { ListItems } from '../../utils/mock'

const DeployModal: React.FC<IModal> = (props) => {
  const [check, setCheck] = useState(true)
  const [domain, setDomain] = useState('')
  const [listItem, setListItem] = useState(ListItems[0])

  const content = () => {
    return (
      <>
        <div className="body mt-10">
          <p>
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
            velit
          </p>
        </div>
        <div className="flex gap-x-7 mt-8">
          <ListWithLabel
            label="Enviroment"
            className=""
            List={{
              items: ListItems,
              onChange: setListItem,
              activeItem: listItem,
              className: 'w-52 mt-4',
              buttonStyle: 'border border-black rounded-xl p-4',
            }}
          />
          <Input
            label="Alias"
            value={domain}
            onChange={setDomain}
            placeholder="site"
            className=""
          />
        </div>
        <div className="text-right my-5">
          <Checkbox
            label="Make a backup"
            value={check}
            onChange={setCheck}
            className="flex justify-end"
          />
          <a className="text-xs font-inter text-secondary-shade1 hover:underline" href="/">
            You have a limited number of backups
          </a>
        </div>
      </>
    )
  }

  const onOk = () => {
    return true
  }

  const onCancel = () => {
    return true
  }

  return (
    <BaseModal
      title="Deploy"
      content={content()}
      okButtonLabel="Confirm"
      onOk={onOk}
      cancelButtonLabel="Cancel"
      onCancel={onCancel}
      {...props}
    />
  )
}

export default DeployModal
