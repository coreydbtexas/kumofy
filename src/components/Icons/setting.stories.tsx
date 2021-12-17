import React from 'react'
import { Story, Meta } from '@storybook/react'

import Setting, { TSetting } from './setting'

export default {
  title: 'Icons/Setting',
  component: Setting,
} as Meta

const Template: Story<TSetting> = ({ ...args }) => {
  return <Setting {...args} />
}

export const SettingIcon = Template.bind({})
SettingIcon.args = {
  size: 24,
  className: 'text-black',
}
