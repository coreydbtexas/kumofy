import React from 'react'
import { Story, Meta } from '@storybook/react'

import SmallDown, { TSmallDown } from './smallDown'

export default {
  title: 'Icons/SmallDown',
  component: SmallDown,
} as Meta

const Template: Story<TSmallDown> = ({ ...args }) => {
  return <SmallDown {...args} />
}

export const SmallDownIcon = Template.bind({})
SmallDownIcon.args = {
  size: 24,
  strokeWidth: 2,
  className: 'text-text',
}
