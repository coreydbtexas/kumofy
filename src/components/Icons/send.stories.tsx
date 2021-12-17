import React from 'react'
import { Story, Meta } from '@storybook/react'

import Send, { TSend } from './send'

export default {
  title: 'Icons/Send',
  component: Send,
} as Meta

const Template: Story<TSend> = ({ ...args }) => {
  return <Send {...args} />
}

export const SendIcon = Template.bind({})
SendIcon.args = {
  size: 24,
  className: 'text-black',
}
