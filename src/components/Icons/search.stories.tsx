import React from 'react'
import { Story, Meta } from '@storybook/react'

import Search, { TSearch } from './search'

export default {
  title: 'Icons/Search',
  component: Search,
} as Meta

const Template: Story<TSearch> = ({ ...args }) => {
  return <Search {...args} />
}

export const SearchIcon = Template.bind({})
SearchIcon.args = {
  size: 18,
  className: 'text-black',
}
