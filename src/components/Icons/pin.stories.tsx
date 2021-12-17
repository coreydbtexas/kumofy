import React from 'react'
import { Story, Meta } from '@storybook/react'

import Pin, { TPin } from './pin'

export default {
  title: 'Icons/Pin',
  component: Pin,
} as Meta

const Template: Story<TPin> = ({ ...args }) => {
  return <Pin {...args} />
}

export const PinIcon = Template.bind({})
PinIcon.args = {
  size: 24,
  strokeWidth: 2,
  className: 'text-text',
}
