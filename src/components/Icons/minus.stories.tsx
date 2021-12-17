import React from 'react'
import { Story, Meta } from '@storybook/react'

import Minus, { TMinus } from './minus'

export default {
  title: 'Icons/Minus',
  component: Minus,
} as Meta

const Template: Story<TMinus> = ({ ...args }) => {
  return <Minus {...args} />
}

export const MinusIcon = Template.bind({})
MinusIcon.args = {
  size: 24,
  strokeWidth: 2,
  className: 'text-text',
}
