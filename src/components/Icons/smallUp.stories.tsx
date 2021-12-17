import React from 'react'
import { Story, Meta } from '@storybook/react'

import SmallUp, { TSmallUp } from './smallUp'

export default {
  title: 'Icons/SmallUp',
  component: SmallUp,
} as Meta

const Template: Story<TSmallUp> = ({ ...args }) => {
  return <SmallUp {...args} />
}

export const SmallUpIcon = Template.bind({})
SmallUpIcon.args = {
  size: 24,
  strokeWidth: 2,
  className: 'text-text',
}
