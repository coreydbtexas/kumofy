import React from 'react'
import { Story, Meta } from '@storybook/react'

import Bell, { TBell } from './bell'

export default {
  title: 'Icons/Bell',
  component: Bell,
} as Meta

const Template: Story<TBell> = ({ ...args }) => {
  return <Bell {...args} />
}

export const BellIcon = Template.bind({})
BellIcon.args = {
  size: 24,
  strokeWidth: 2,
  className: 'text-text',
  fillColor: 'var(--color-dark)',
}
