import React from 'react'
import { Story, Meta } from '@storybook/react'

import Grid, { TGrid } from './grid'

export default {
  title: 'Icons/Grid',
  component: Grid,
} as Meta

const Template: Story<TGrid> = ({ ...args }) => {
  return <Grid {...args} />
}

export const GridIcon = Template.bind({})
GridIcon.args = {
  size: 24,
  strokeWidth: 2,
  className: 'text-text',
}
