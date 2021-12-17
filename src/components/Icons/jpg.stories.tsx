import React from 'react'
import { Story, Meta } from '@storybook/react'

import Jpg, { TJpg } from './jpg'

export default {
  title: 'Icons/Jpg',
  component: Jpg,
} as Meta

const Template: Story<TJpg> = ({ ...args }) => {
  return <Jpg {...args} />
}

export const JpgIcon = Template.bind({})
JpgIcon.args = {
  size: 24,
  className: 'text-dark-shade5',
}
