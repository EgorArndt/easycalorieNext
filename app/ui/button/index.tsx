import React, { FC, MouseEventHandler, RefObject } from 'react'

import { ButtonBase, ButtonBaseProps } from './base'
import { withStyles, WithStylesProps } from '../../hocs/with_styles'

export type ButtonProps = {
    type?: 'button' | 'submit' | 'reset'
    onClick?: MouseEventHandler<HTMLButtonElement>
    ref?: RefObject<HTMLButtonElement>
} & ButtonBaseProps

const _Button: FC<ButtonProps> = ({ ...props }: ButtonProps) => <ButtonBase {...props} />

const Button = withStyles<ButtonProps & WithStylesProps>(_Button, 'button')

export default Button