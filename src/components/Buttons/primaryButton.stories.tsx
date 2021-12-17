import React from 'react'
import { Story, Meta } from '@storybook/react'

import { IButton } from '../../utils/interface'
import PrimaryButton from './primaryButton'

export default {
  title: 'Buttons/PrimaryButton',
  component: PrimaryButton,
} as Meta

const Template: Story<IButton> = ({ ...args }) => {
  return <PrimaryButton {...args} />
}

export const PrimaryButtonComponent = Template.bind({})
PrimaryButtonComponent.args = {
  label: 'primary button',
  onClick: () => {
    return true
  },
  className: 'text-text',
}
