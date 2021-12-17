import React from 'react'
import { TUser } from '../../utils/type'

import Layout from '../../components/Layout'
import Uploader from '../../components/Uploader'
import FileBrowser from '../../components/FileBrowser'

interface IDashboard {
  user?: TUser
}

const Dashboard: React.FC<IDashboard> = ({
  user = {
    name: 'Tony Trans',
  },
}) => {
  return (
    <Layout>
      <div className="px-14 py-16">
        <h5>Hi {user.name},</h5>
        <h2>Welcome aboard!👋</h2>
        <div className="pt-12 pl-8 pr-14">
          <Uploader />
          <FileBrowser />
        </div>
      </div>
    </Layout>
  )
}

export default Dashboard
