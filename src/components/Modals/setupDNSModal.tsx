import React, { useState } from 'react'

import BaseModal from '.'
import Input from '../Input'
import { IModal } from '../../utils/interface'

const SetupDNSModal: React.FC<IModal> = (props) => {
  const [domain, setDomain] = useState('')

  const content = () => {
    return (
      <>
        <div className="body mt-10">
          <p>A domain name is the addres where visitors find your site.</p>
          <p>By default, Kumofy will create a URL.</p>
        </div>
        <Input
          label="Domain Name"
          value={domain}
          onChange={setDomain}
          placeholder="www.mydomian.com"
          className="mt-4 mb-20"
        />
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
      title="Setup DNS"
      content={content()}
      okButtonLabel="Confirm"
      onOk={onOk}
      cancelButtonLabel="Cancel"
      onCancel={onCancel}
      {...props}
    />
  )
}

export default SetupDNSModal
