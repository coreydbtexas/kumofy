import React from 'react'
import { Story, Meta } from '@storybook/react'

import Star, { TStar } from './star'

export default {
  title: 'Icons/Star',
  component: Star,
} as Meta

const Template: Story<TStar> = ({ ...args }) => {
  return <Star {...args} />
}

export const StarIcon = Template.bind({})
StarIcon.args = {
  size: 24,
  className: 'text-dark',
}
