import React, { useState } from 'react'

import SetupDNSModal from '../Modals/setupDNSModal'
import DNSConfigurationModal from '../Modals/DNSConfigurationModal'
import NewSite from '../Modals/newSite'
import Deploy from '../Modals/deploy'
import ReplaceDeploy from '../Modals/replaceDeploy'

const FileBrowser: React.FC = () => {
  const [openModal, setOpenModal] = useState(false)
  const [openModal2, setOpenModal2] = useState(false)
  const [openModal3, setOpenModal3] = useState(false)
  const [openModal4, setOpenModal4] = useState(false)
  const [openModal5, setOpenModal5] = useState(false)

  const handleModal = () => {
    setOpenModal(true)
  }

  const handleModal2 = () => {
    setOpenModal2(true)
  }

  const handleModal3 = () => {
    setOpenModal3(true)
  }

  const handleModal4 = () => {
    setOpenModal4(true)
  }

  const handleModal5 = () => {
    setOpenModal5(true)
  }

  return (
    <div className="mt-4">
      <button type="button" onClick={handleModal}>
        Test Setup DNS Modal
      </button>
      <br />
      <button type="button" onClick={handleModal2}>
        Test DNS Configuration Modal
      </button>
      <br />
      <button type="button" onClick={handleModal3}>
        Test New Site Modal
      </button>
      <br />
      <button type="button" onClick={handleModal4}>
        Test Deploy Modal
      </button>
      <br />
      <button type="button" onClick={handleModal5}>
        Test Replace Deploy Modal
      </button>
      {openModal ? <SetupDNSModal isOpen={openModal} handleModal={setOpenModal} /> : null}
      {openModal2 ? (
        <DNSConfigurationModal isOpen={openModal2} handleModal={setOpenModal2} />
      ) : null}
      {openModal3 ? <NewSite isOpen={openModal3} handleModal={setOpenModal3} /> : null}
      {openModal4 ? <Deploy isOpen={openModal4} handleModal={setOpenModal4} /> : null}
      {openModal5 ? <ReplaceDeploy isOpen={openModal5} handleModal={setOpenModal5} /> : null}
    </div>
  )
}

export default FileBrowser
