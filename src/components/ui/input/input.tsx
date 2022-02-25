import { FC, ChangeEvent, HTMLInputTypeAttribute } from 'react'
import styled from '@emotion/styled'

import { withStyles, WithStylesProps } from '@hocs'

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
}

export type EnhancedInputProps = InputProps & WithStylesProps

const StyledInput = styled.input<Partial<InputProps>>`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  padding: 0.7rem;
  outline: none;
  font-size: inherit;
  height: ${({ small }) => (small ? '2rem' : '3rem')};
  background: none;
`

const _Input: FC<InputProps> = ({ type, id, ...props }: InputProps) => (
  <StyledInput type={type || 'text'} id={id} name={id} {...props} />
)

const Input = withStyles<EnhancedInputProps>(_Input)

export default Input
