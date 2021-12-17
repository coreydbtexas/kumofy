import React from 'react'
import { Story, Meta } from '@storybook/react'

import Filter, { TFilter } from './filter'

export default {
  title: 'Icons/Filter',
  component: Filter,
} as Meta

const Template: Story<TFilter> = ({ ...args }) => {
  return <Filter {...args} />
}

export const FilterIcon = Template.bind({})
FilterIcon.args = {
  size: 24,
  strokeWidth: 2,
  className: 'text-text',
}
