import React from 'react'
import { Story, Meta } from '@storybook/react'

import NotificationTri, { TNotificationTri } from './notificationTri'

export default {
  title: 'Icons/NotificationTri',
  component: NotificationTri,
} as Meta

const Template: Story<TNotificationTri> = ({ ...args }) => {
  return <NotificationTri {...args} />
}

export const NotificationTriIcon = Template.bind({})
NotificationTriIcon.args = {
  size: 24,
  className: 'text-secondary-shade2',
}
