import React from 'react'
import { Story, Meta } from '@storybook/react'

import ArrowList, { TArrowList } from './arrowList'

export default {
  title: 'Icons/ArrowList',
  component: ArrowList,
} as Meta

const Template: Story<TArrowList> = ({ ...args }) => {
  return <ArrowList {...args} />
}

export const ArrowListIcon = Template.bind({})
ArrowListIcon.args = {
  size: 24,
  strokeWidth: 2,
  className: 'text-text',
}
