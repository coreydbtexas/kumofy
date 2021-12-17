import React from 'react'
import { Story, Meta } from '@storybook/react'

import Plus, { TPlus } from './plus'

export default {
  title: 'Icons/Plus',
  component: Plus,
} as Meta

const Template: Story<TPlus> = ({ ...args }) => {
  return <Plus {...args} />
}

export const PlusIcon = Template.bind({})
PlusIcon.args = {
  size: 24,
  strokeWidth: 2,
  className: 'text-text',
}
