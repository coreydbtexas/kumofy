import React from 'react'

import { TListItem } from '../type'

export interface IButton {
  className?: string
  label: string
  icon?: React.ReactNode
  onClick?: () => void
}

export interface IModal {
  className?: string
  isOpen?: boolean
  handleModal(flag: boolean): void
  title?: string
  icon?: React.ReactNode
  content?: React.ReactNode
  okButtonLabel?: string
  onOk?: () => void
  cancelButtonLabel?: string
  onCancel?: () => void
}

export interface IInput {
  className?: string
  label?: string
  type?: 'text' | 'password'
  placeholder?: string
  value: string
  onChange: (value: string) => void
  error?: string
}

export interface IProgressBar {
  className?: string
  label?: string
  percentage?: number
}

export interface ICheckbox {
  className?: string
  label?: string
  value: boolean
  onChange: (value: boolean) => void
}

export interface IList {
  className?: string
  items: TListItem[]
  onChange: (value: TListItem) => void
  activeItem: TListItem
  buttonStyle?: string
}
