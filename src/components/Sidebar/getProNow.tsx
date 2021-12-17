import React from 'react'

import Logo from '../../assets/images/logo165x106.png'
import WhiteButton from '../Buttons/whiteButton'

const GetProNow: React.FC = () => {
  return (
    <div className="rounded-2xl pt-4 pb-6 text-center shadow-xl">
      <img className="m-0 m-auto pb-10" src={Logo} alt="Kumofy" />
      <WhiteButton label="Get Pro Now" />
    </div>
  )
}

export default GetProNow
