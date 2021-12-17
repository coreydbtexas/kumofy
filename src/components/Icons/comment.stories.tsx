import React from 'react'
import { Story, Meta } from '@storybook/react'

import Comment, { TComment } from './comment'

export default {
  title: 'Icons/Comment',
  component: Comment,
} as Meta

const Template: Story<TComment> = ({ ...args }) => {
  return <Comment {...args} />
}

export const CommentIcon = Template.bind({})
CommentIcon.args = {
  size: 24,
  className: 'text-dark',
}
