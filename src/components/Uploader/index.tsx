import React from 'react'
import { useDropzone } from 'react-dropzone'

import PrimaryButton from '../Buttons/primaryButton'
import Logo from '../../assets/images/logo326x210.png'

const Uploader: React.FC = () => {
  const { getRootProps, getInputProps, open } = useDropzone({
    noClick: true,
    noKeyboard: true,
  })

  return (
    <div
      {...getRootProps({
        className:
          'flex justify-around gap-x-8 xl:gap-x-40 items-end rounded-3xl border-2 border-dashed border-blue-light pt-28 pl-8 pb-11 pr-11 shadow-xl',
      })}
    >
      <input {...getInputProps()} />
      <div>
        <h3 className="text-dark pb-16">Drag & Drop to create your first site!</h3>
        <PrimaryButton label="Select a folder" onClick={open} />
      </div>
      <img src={Logo} alt="kumofy" className="hidden lg:block w-40 xl:w-80" />
    </div>
  )
}

export default Uploader
