import React from 'react'
import { Story, Meta } from '@storybook/react'

import Deploy, { TDeploy } from './deploy'

export default {
  title: 'Icons/Deploy',
  component: Deploy,
} as Meta

const Template: Story<TDeploy> = ({ ...args }) => {
  return <Deploy {...args} />
}

export const DeployIcon = Template.bind({})
DeployIcon.args = {
  size: 24,
  className: 'text-text',
}
