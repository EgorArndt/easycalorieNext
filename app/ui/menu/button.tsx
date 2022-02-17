import { FC, forwardRef } from 'react'

import { ButtonBase } from '../button/base'
import { ButtonProps } from '../button'
import { withStyles, WithStylesProps } from '../../hocs/with_styles'

type MenuButtonProps = {
    onKeyDown?: (e: KeyboardEvent) => void
} & ButtonProps

const _MenuButton: FC<MenuButtonProps> = ({ ...props }: MenuButtonProps) => (
    <ButtonBase {...props} />
)

const MenuButton = withStyles<MenuButtonProps & WithStylesProps>(_MenuButton, 'button')

export default MenuButton
