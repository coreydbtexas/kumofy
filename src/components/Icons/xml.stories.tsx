import React from 'react'
import { Story, Meta } from '@storybook/react'

import Xml, { TXml } from './xml'

export default {
  title: 'Icons/Xml',
  component: Xml,
} as Meta

const Template: Story<TXml> = ({ ...args }) => {
  return <Xml {...args} />
}

export const XmlIcon = Template.bind({})
XmlIcon.args = {
  size: 24,
  className: 'text-dark-shade5',
}
