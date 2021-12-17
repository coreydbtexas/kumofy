import React from 'react'
import { Story, Meta } from '@storybook/react'

import List, { TList } from './list'

export default {
  title: 'Icons/List',
  component: List,
} as Meta

const Template: Story<TList> = ({ ...args }) => {
  return <List {...args} />
}

export const ListIcon = Template.bind({})
ListIcon.args = {
  size: 24,
  strokeWidth: 2,
  className: 'text-text',
}
