import React from 'react'
import { Story, Meta } from '@storybook/react'

import Download, { TDownload } from './download'

export default {
  title: 'Icons/Download',
  component: Download,
} as Meta

const Template: Story<TDownload> = ({ ...args }) => {
  return <Download {...args} />
}

export const DownloadIcon = Template.bind({})
DownloadIcon.args = {
  size: 24,
  strokeWidth: 2,
  className: 'text-text',
}
