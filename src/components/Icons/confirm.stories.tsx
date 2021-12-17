import React from 'react'
import { Story, Meta } from '@storybook/react'

import Confirm, { TConfirm } from './confirm'

export default {
  title: 'Icons/Confirm',
  component: Confirm,
} as Meta

const Template: Story<TConfirm> = ({ ...args }) => {
  return <Confirm {...args} />
}

export const ConfirmIcon = Template.bind({})
ConfirmIcon.args = {
  size: 50,
  className: 'text-dark',
  fillColor: 'white',
}
