import React from 'react'
import { Story, Meta } from '@storybook/react'

import Like, { TLike } from './like'

export default {
  title: 'Icons/Like',
  component: Like,
} as Meta

const Template: Story<TLike> = ({ ...args }) => {
  return <Like {...args} />
}

export const LikeIcon = Template.bind({})
LikeIcon.args = {
  size: 24,
  className: 'text-dark',
}
