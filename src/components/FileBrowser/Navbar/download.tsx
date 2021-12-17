import React, { useState } from 'react'

import Button from '../../Buttons/whiteButton'
import SetupDNSModal from '../../Modals/setupDNSModal'
import DownloadIcon from '../../Icons/download'

const Download: React.FC = () => {
  const [openModal, setOpenModal] = useState(false)

  const handleModal = () => {
    setOpenModal(true)
  }

  return (
    <div className="flex items-center">
      <Button
        label="Download (6)"
        onClick={handleModal}
        className="rounded-md py-1 pl-2 pr-2 caption2 border-dark-shade4"
        icon={<DownloadIcon className="mr-2" />}
      />
      {openModal ? <SetupDNSModal isOpen={openModal} handleModal={setOpenModal} /> : null}
    </div>
  )
}

export default Download
