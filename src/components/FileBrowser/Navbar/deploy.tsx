import React, { useState } from 'react'

import Button from '../../Buttons/primaryButton'
import DeployModal from '../../Modals/deploy'
import DeployIcon from '../../Icons/deploy'

const Deploy: React.FC = () => {
  const [openModal, setOpenModal] = useState(false)

  const handleModal = () => {
    setOpenModal(true)
  }

  return (
    <div className="flex items-center">
      <Button
        label="Deploy (20 files)"
        onClick={handleModal}
        className="rounded-md py-1 pl-2 pr-2 caption2 border-dark-shade4"
        icon={<DeployIcon className="mr-2" />}
      />
      {openModal ? <DeployModal isOpen={openModal} handleModal={setOpenModal} /> : null}
    </div>
  )
}

export default Deploy
