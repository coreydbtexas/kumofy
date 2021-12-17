import React from 'react'
import { Story, Meta } from '@storybook/react'

import Close, { TClose } from './close'

export default {
  title: 'Icons/Close',
  component: Close,
} as Meta

const Template: Story<TClose> = ({ ...args }) => {
  return <Close {...args} />
}

export const CloseIcon = Template.bind({})
CloseIcon.args = {
  size: 24,
  strokeWidth: 2,
  className: 'text-text',
}
