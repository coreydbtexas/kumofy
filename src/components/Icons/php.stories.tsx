import React from 'react'
import { Story, Meta } from '@storybook/react'

import Php, { TPhp } from './php'

export default {
  title: 'Icons/Php',
  component: Php,
} as Meta

const Template: Story<TPhp> = ({ ...args }) => {
  return <Php {...args} />
}

export const PhpIcon = Template.bind({})
PhpIcon.args = {
  size: 24,
  className: 'text-dark-shade5',
}
