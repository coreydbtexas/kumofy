import React from 'react'
import { Story, Meta } from '@storybook/react'

import Activity, { TActivity } from './activity'

export default {
  title: 'Icons/Activity',
  component: Activity,
} as Meta

const Template: Story<TActivity> = ({ ...args }) => {
  return <Activity {...args} />
}

export const ActivityIcon = Template.bind({})
ActivityIcon.args = {
  size: 24,
  className: 'text-text',
  circleClassName: 'text-accent2-shade4 fill-current',
}
