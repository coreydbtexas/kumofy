import React from 'react'
import { Story, Meta } from '@storybook/react'

import CSS, { TCSS } from './css'

export default {
  title: 'Icons/CSS',
  component: CSS,
} as Meta

const Template: Story<TCSS> = ({ ...args }) => {
  return <CSS {...args} />
}

export const CSSIcon = Template.bind({})
CSSIcon.args = {
  size: 24,
  className: 'text-dark-shade5',
}
