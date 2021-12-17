import React, { useState } from 'react'

import BaseModal from '.'
import Input from '../Input'
import { IModal } from '../../utils/interface'
import ProgressBar from '../ProgressBar'

const NewSiteModal: React.FC<IModal> = (props) => {
  const [domain, setDomain] = useState('')

  const content = () => {
    return (
      <>
        <Input
          label="Name site"
          value={domain}
          onChange={setDomain}
          placeholder="site1"
          className="mt-16 mb-5"
        />
        <ProgressBar className="mb-10" label="Uploading files (5.000)" percentage={30} />
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
      title="New site"
      content={content()}
      okButtonLabel="Confirm"
      onOk={onOk}
      cancelButtonLabel="Cancel"
      onCancel={onCancel}
      {...props}
    />
  )
}

export default NewSiteModal
