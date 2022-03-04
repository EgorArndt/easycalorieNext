import { FC, ReactNode, ChangeEvent, HTMLInputTypeAttribute, RefObject } from 'react'
import styled from '@emotion/styled'

import { withStyles, WithStylesProps } from '@hocs'
import { btnSizes } from '../constants'
import { ResponsiveSize } from '../models'
import { AppTheme } from '@theme/models'

export type InputProps = {
  id?: string
  value?: string | number
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  type?: HTMLInputTypeAttribute
  variant?: 'outlined' | 'contained' | 'default'
  small?: boolean
  placeholder?: string
  animation?: boolean
  disabled?: boolean
  componentRef?: RefObject<HTMLInputElement>
  size?: ResponsiveSize
  before?: ReactNode
  after?: ReactNode
}

export type EnhancedInputProps = InputProps & WithStylesProps

const StyledInput = styled.input<Partial<InputProps> & {_size?: ResponsiveSize}>`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  outline: none;
  font-size: inherit;
  border-radius: 4px;
  ${({ _size = 'm' }) => `padding: ${btnSizes[_size]};`}
  ${({ theme }) => `
      font-family: ${(theme as AppTheme).readonly.fonts.primary};
      border: 1px solid ${(theme as AppTheme).mutatable.border.color};
      transition: ${(theme as AppTheme).readonly.transition};
      &:hover, &:focus {
        border-color: ${(theme as AppTheme).mutatable.border.colorOnHover};
      }
    `}
`

const _Input: FC<InputProps> = ({
  type,
  id,
  componentRef,
  size,
  ...props
}: InputProps) => (
  <StyledInput
    type={type || 'text'}
    id={id}
    name={id}
    ref={componentRef}
    _size={size}
    {...props}
  />
)

const Input = withStyles<EnhancedInputProps>(_Input)

export default Input
