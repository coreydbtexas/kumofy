import React from 'react'
import { Story, Meta } from '@storybook/react'

import Trash, { TTrash } from './trash'

export default {
  title: 'Icons/Trash',
  component: Trash,
} as Meta

const Template: Story<TTrash> = ({ ...args }) => {
  return <Trash {...args} />
}

export const TrashIcon = Template.bind({})
TrashIcon.args = {
  size: 24,
  strokeWidth: 2,
  className: 'text-text',
}
