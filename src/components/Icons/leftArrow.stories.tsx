import React from 'react'
import { Story, Meta } from '@storybook/react'

import LeftArrow, { TLeftArrow } from './leftArrow'

export default {
  title: 'Icons/LeftArrow',
  component: LeftArrow,
} as Meta

const Template: Story<TLeftArrow> = ({ ...args }) => {
  return <LeftArrow {...args} />
}

export const LeftArrowIcon = Template.bind({})
LeftArrowIcon.args = {
  size: 24,
  strokeWidth: 2,
  className: 'text-text',
}
