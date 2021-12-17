import React from 'react'
import { Story, Meta } from '@storybook/react'

import SmallRight, { TSmallRight } from './smallRight'

export default {
  title: 'Icons/SmallRight',
  component: SmallRight,
} as Meta

const Template: Story<TSmallRight> = ({ ...args }) => {
  return <SmallRight {...args} />
}

export const SmallRightIcon = Template.bind({})
SmallRightIcon.args = {
  size: 24,
  strokeWidth: 2,
  className: 'text-text',
}
