import React from 'react'
import { Story, Meta } from '@storybook/react'

import Image, { TImage } from './image'

export default {
  title: 'Icons/Image',
  component: Image,
} as Meta

const Template: Story<TImage> = ({ ...args }) => {
  return <Image {...args} />
}

export const ImageIcon = Template.bind({})
ImageIcon.args = {
  size: 24,
  className: 'text-dark-shade5',
}
