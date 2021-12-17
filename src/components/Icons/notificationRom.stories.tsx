import React from 'react'
import { Story, Meta } from '@storybook/react'

import NotificationRom, { TNotificationRom } from './notificationRom'

export default {
  title: 'Icons/NotificationRom',
  component: NotificationRom,
} as Meta

const Template: Story<TNotificationRom> = ({ ...args }) => {
  return <NotificationRom {...args} />
}

export const NotificationRomIcon = Template.bind({})
NotificationRomIcon.args = {
  size: 24,
  className: 'text-primary',
}
