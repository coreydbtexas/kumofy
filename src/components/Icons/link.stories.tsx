import React from 'react'
import { Story, Meta } from '@storybook/react'

import Link, { TLink } from './link'

export default {
  title: 'Icons/Link',
  component: Link,
} as Meta

const Template: Story<TLink> = ({ ...args }) => {
  return <Link {...args} />
}

export const LinkIcon = Template.bind({})
LinkIcon.args = {
  size: 24,
  className: 'text-black',
}
