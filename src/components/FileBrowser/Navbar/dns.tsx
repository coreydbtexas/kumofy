import React, { useState } from 'react'

import Button from '../../Buttons/primaryButton'
import SetupDNSModal from '../../Modals/setupDNSModal'
import EditIcon from '../../Icons/edit'

const DNS: React.FC = () => {
  const [openModal, setOpenModal] = useState(false)

  const handleModal = () => {
    setOpenModal(true)
  }

  return (
    <div className="flex items-center">
      <span className="menu">https://kumofy.test.com</span>
      <Button
        label="DNS"
        onClick={handleModal}
        className="rounded-md py-1 pl-2 pr-7"
        icon={<EditIcon className="text-white mr-2" />}
      />
      {openModal ? <SetupDNSModal isOpen={openModal} handleModal={setOpenModal} /> : null}
    </div>
  )
}

export default DNS
