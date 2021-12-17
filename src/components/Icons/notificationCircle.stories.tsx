import React from 'react'
import { Story, Meta } from '@storybook/react'

import NotificationCircle, { TNotificationCircle } from './notificationCircle'

export default {
  title: 'Icons/NotificationCircle',
  component: NotificationCircle,
} as Meta

const Template: Story<TNotificationCircle> = ({ ...args }) => {
  return <NotificationCircle {...args} />
}

export const NotificationCircleIcon = Template.bind({})
NotificationCircleIcon.args = {
  size: 24,
  className: 'text-accent2-shade4',
  radius: 8,
}
