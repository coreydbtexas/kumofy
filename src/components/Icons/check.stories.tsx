import React from 'react'
import { Story, Meta } from '@storybook/react'

import Check, { TCheck } from './check'

export default {
  title: 'Icons/Check',
  component: Check,
} as Meta

const Template: Story<TCheck> = ({ ...args }) => {
  return <Check {...args} />
}

export const CheckIcon = Template.bind({})
CheckIcon.args = {
  size: 24,
  className: 'text-black',
}
