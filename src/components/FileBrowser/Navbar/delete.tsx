import React, { useState } from 'react'

import Button from '../../Buttons/whiteButton'
import SetupDNSModal from '../../Modals/setupDNSModal'
import DeleteIcon from '../../Icons/trash'

const Delete: React.FC = () => {
  const [openModal, setOpenModal] = useState(false)

  const handleModal = () => {
    setOpenModal(true)
  }

  return (
    <div className="flex items-center">
      <Button
        label="Delete (6)"
        onClick={handleModal}
        className="rounded-md py-1 pl-2 pr-2 caption2 border-dark-shade4"
        icon={<DeleteIcon className="mr-2" />}
      />
      {openModal ? <SetupDNSModal isOpen={openModal} handleModal={setOpenModal} /> : null}
    </div>
  )
}

export default Delete
