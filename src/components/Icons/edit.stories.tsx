import React from 'react'
import { Story, Meta } from '@storybook/react'

import Edit, { TEdit } from './edit'

export default {
  title: 'Icons/Edit',
  component: Edit,
} as Meta

const Template: Story<TEdit> = ({ ...args }) => {
  return <Edit {...args} />
}

export const EditIcon = Template.bind({})
EditIcon.args = {
  size: 24,
  strokeWidth: 2,
  className: 'text-text',
}
