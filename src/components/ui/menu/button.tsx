import { FC } from 'react'

import { ButtonBase } from '../button/base'
import { ButtonProps } from '@ui'
import { withStyles, WithStylesProps } from '@hocs'

type MenuButtonProps = {
  onKeyDown?: (e: KeyboardEvent) => void
} & ButtonProps

export type EnhancedMenuButtonProps = MenuButtonProps & WithStylesProps

const _MenuButton: FC<MenuButtonProps> = ({ ...props }: MenuButtonProps) => (
  <ButtonBase {...props} />
)

const MenuButton = withStyles<EnhancedMenuButtonProps>(_MenuButton, 'button')

export default MenuButton
