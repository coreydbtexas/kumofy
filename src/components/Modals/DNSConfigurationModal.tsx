import React, { useState } from 'react'

import BaseModal from '.'
import Input from '../Input'
import { IModal } from '../../utils/interface'

const DNSConfigurationModal: React.FC<IModal> = (props) => {
  const [domain, setDomain] = useState('')

  const content = () => {
    return (
      <>
        <div className="body mt-10">
          <p>
            In your DNS provider, add a CNAME record for site-1 pointing to
            aboriginal-deer.kumofy.com
          </p>
        </div>
        <Input
          label=""
          value={domain}
          onChange={setDomain}
          placeholder="aboriginal-deer.kumofy.com"
          className="mt-8"
        />
        <div className="mt-8 mb-12">
          <h6 className="mb-2">Have you already done this?</h6>
          <p className="body">
            These changes might take up to 24 hours to propagate. You can check the status of your
            domain at a later time.
          </p>
        </div>
      </>
    )
  }

  const onOk = () => {
    return true
  }

  return (
    <BaseModal
      title="DNS Configuration"
      content={content()}
      okButtonLabel="Done"
      onOk={onOk}
      {...props}
    />
  )
}

export default DNSConfigurationModal
