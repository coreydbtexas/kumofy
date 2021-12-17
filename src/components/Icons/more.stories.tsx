import React from 'react'
import { Story, Meta } from '@storybook/react'

import More, { TMore } from './more'

export default {
  title: 'Icons/More',
  component: More,
} as Meta

const Template: Story<TMore> = ({ ...args }) => {
  return <More {...args} />
}

export const MoreIcon = Template.bind({})
MoreIcon.args = {
  size: 24,
  strokeWidth: 2,
  className: 'text-text',
}
