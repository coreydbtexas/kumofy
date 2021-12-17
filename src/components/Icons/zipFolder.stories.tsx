import React from 'react'
import { Story, Meta } from '@storybook/react'

import ZipFolder, { TZipFolder } from './zipFolder'

export default {
  title: 'Icons/ZipFolder',
  component: ZipFolder,
} as Meta

const Template: Story<TZipFolder> = ({ ...args }) => {
  return <ZipFolder {...args} />
}

export const ZipFolderIcon = Template.bind({})
ZipFolderIcon.args = {
  size: 24,
  className: 'text-dark-shade5',
  stopColor1: 'var(--color-secondary-shade9)',
  stopColor2: 'var(--color-secondary-shade5)',
}
