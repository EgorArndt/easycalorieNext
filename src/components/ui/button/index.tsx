import { FC, MouseEventHandler, RefObject } from 'react'

import { ButtonBase, ButtonBaseProps } from './base'
import { withStyles, WithStylesProps } from '@hocs'

export type ButtonProps = {
  type?: 'button' | 'submit' | 'reset'
  onClick?: MouseEventHandler<HTMLButtonElement>
  ref?: RefObject<HTMLButtonElement>
} & ButtonBaseProps

export type EnhancedButtonProps = ButtonProps & WithStylesProps

const _Button: FC<ButtonProps> = ({ ...props }: ButtonProps) => (
  <ButtonBase uiKey='button' {...props} />
)

const Button = withStyles<EnhancedButtonProps>(_Button, 'button')

export default Button
