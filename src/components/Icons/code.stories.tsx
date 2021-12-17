import React from 'react'
import { Story, Meta } from '@storybook/react'

import Code, { TCode } from './code'

export default {
  title: 'Icons/Code',
  component: Code,
} as Meta

const Template: Story<TCode> = ({ ...args }) => {
  return <Code {...args} />
}

export const CodeIcon = Template.bind({})
CodeIcon.args = {
  size: 24,
  className: 'text-dark-shade5',
}
