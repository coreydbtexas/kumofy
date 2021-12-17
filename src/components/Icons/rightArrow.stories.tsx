import React from 'react'
import { Story, Meta } from '@storybook/react'

import RightArrow, { TRightArrow } from './rightArrow'

export default {
  title: 'Icons/RightArrow',
  component: RightArrow,
} as Meta

const Template: Story<TRightArrow> = ({ ...args }) => {
  return <RightArrow {...args} />
}

export const RightArrowIcon = Template.bind({})
RightArrowIcon.args = {
  size: 24,
  strokeWidth: 2,
  className: 'text-text',
}
