import {
  FC,
  ReactNode,
  ChangeEvent,
  KeyboardEventHandler,
  HTMLInputTypeAttribute,
  RefObject,
} from 'react'
import styled from '@emotion/styled'

import { withStyles, WithStylesProps } from '@hocs'
import { btnSizes } from '../constants'
import { ResponsiveSize } from '../models'
import { AppTheme } from '@theme/models'
import { Icon, Box } from '@ui'

export type InputProps = {
  id?: string
  value?: string | number
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>
  type?: HTMLInputTypeAttribute
  small?: boolean
  placeholder?: string
  disabled?: boolean
  componentRef?: RefObject<HTMLInputElement>
  size?: ResponsiveSize
  before?: ReactNode
  after?: ReactNode
  className?: string
}

export type EnhancedInputProps = InputProps & WithStylesProps

const StyledInput = styled.input<
  Partial<InputProps> & { _size?: ResponsiveSize }
>`
  display: flex;
  align-items: center;
  position: relative;
  height: 100%;
  width: 100%;
  outline: none;
  font-size: inherit;
  border-radius: 4px;
  ${({ _size = 'm' }) => `padding: ${btnSizes[_size]};`}
  ${({ before }) => before && 'padding-left: 2.7rem !important;'}
  ${({ after }) => after && 'padding-right: 2.7rem !important;'}
  ${({ theme }) => `
    font-family: ${(theme as AppTheme).readonly.fonts.primary};
    border: 1px solid ${(theme as AppTheme).mutatable.border.color};
    transition: ${(theme as AppTheme).readonly.transition};
    &:hover, &:focus {
      border-color: ${(theme as AppTheme).mutatable.border.colorOnHover};
    }
  `}

  &:disabled {
    cursor: not-allowed;
  }
`

const _Input: FC<InputProps> = ({
  type,
  id,
  componentRef,
  size,
  before,
  after,
  className: withStylesProps,
  ...props
}: InputProps) => (
  <Box
    width='100%'
    style={{ position: 'relative' }}
    className={withStylesProps}
  >
    {before && <Icon i={before} className='input-icon before' size={20} />}
    <StyledInput
      type={type || 'text'}
      id={id}
      name={id}
      ref={componentRef}
      _size={size}
      before={before}
      after={after}
      autoComplete='off'
      {...props}
    />
    {after && <Icon i={after} className='input-icon after' size={20} />}
    <style jsx global>{`
      .input-icon {
        position: absolute !important;
        top: 50%;
        transform: translateY(-50%);
        z-index: 1;
      }

      .input-icon.before {
        left: 0.8rem;
        pointer-events: none;
      }
      .input-icon.after {
        right: 0.8rem;
      }
    `}</style>
  </Box>
)

const Input = withStyles<EnhancedInputProps>(_Input)

export default Input
