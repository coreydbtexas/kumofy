import React from 'react'
import { Story, Meta } from '@storybook/react'

import Private, { TPrivate } from './private'

export default {
  title: 'Icons/Private',
  component: Private,
} as Meta

const Template: Story<TPrivate> = ({ ...args }) => {
  return <Private {...args} />
}

export const PrivateIcon = Template.bind({})
PrivateIcon.args = {
  size: 21,
  className: 'text-black',
}
