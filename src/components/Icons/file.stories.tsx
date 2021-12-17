import React from 'react'
import { Story, Meta } from '@storybook/react'

import File, { TFile } from './file'

export default {
  title: 'Icons/File',
  component: File,
} as Meta

const Template: Story<TFile> = ({ ...args }) => {
  return <File {...args} />
}

export const FileIcon = Template.bind({})
FileIcon.args = {
  size: 24,
  className: 'text-dark-shade5',
}
