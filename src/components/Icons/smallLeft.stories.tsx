import React from 'react'
import { Story, Meta } from '@storybook/react'

import SmallLeft, { TSmallLeft } from './smallLeft'

export default {
  title: 'Icons/SmallLeft',
  component: SmallLeft,
} as Meta

const Template: Story<TSmallLeft> = ({ ...args }) => {
  return <SmallLeft {...args} />
}

export const SmallLeftIcon = Template.bind({})
SmallLeftIcon.args = {
  size: 24,
  strokeWidth: 2,
  className: 'text-text',
}
