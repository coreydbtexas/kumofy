import React from 'react'
import { Story, Meta } from '@storybook/react'

import Print, { TPrint } from './print'

export default {
  title: 'Icons/Print',
  component: Print,
} as Meta

const Template: Story<TPrint> = ({ ...args }) => {
  return <Print {...args} />
}

export const PrintIcon = Template.bind({})
PrintIcon.args = {
  size: 24,
  strokeWidth: 2,
  className: 'text-text',
}
