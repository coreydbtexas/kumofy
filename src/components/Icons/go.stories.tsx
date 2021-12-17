import React from 'react'
import { Story, Meta } from '@storybook/react'

import Go, { TGo } from './go'

export default {
  title: 'Icons/Go',
  component: Go,
} as Meta

const Template: Story<TGo> = ({ ...args }) => {
  return <Go {...args} />
}

export const GoIcon = Template.bind({})
GoIcon.args = {
  size: 24,
  strokeWidth: 2,
  className: 'text-text',
}
