import React from 'react'
import { Story, Meta } from '@storybook/react'

import Folder, { TFolder } from './folder'

export default {
  title: 'Icons/Folder',
  component: Folder,
} as Meta

const Template: Story<TFolder> = ({ ...args }) => {
  return <Folder {...args} />
}

export const FolderIcon = Template.bind({})
FolderIcon.args = {
  size: 16,
  className: 'text-secondary-shade5',
  stopColor: 'var(--color-text-deactive)',
}
