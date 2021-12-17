import React from 'react'
import { Story, Meta } from '@storybook/react'

import { IButton } from '../../utils/interface'
import WhiteButton from './whiteButton'

export default {
  title: 'Buttons/WhiteButton',
  component: WhiteButton,
} as Meta

const Template: Story<IButton> = ({ ...args }) => {
  return <WhiteButton {...args} />
}

export const WhiteButtonComponent = Template.bind({})
WhiteButtonComponent.args = {
  label: 'white button',
  onClick: () => {
    return true
  },
  className: 'text-red-500',
}
