import { FC, ComponentType } from 'react'
import { applyStatics, MenuItem as MI } from '@szhsin/react-menu'

import { MenuItem, MenuItemProps } from '@ui'

const _DropdownItem: FC<MenuItemProps> = ({
  children,
  ...props
}: MenuItemProps) => (
  <MenuItem palette='inherit' spacing={{ px: 1, py: 0.5 }} {...props}>
    {children}
  </MenuItem>
)

const DropdownItem = applyStatics<FC<MenuItemProps>>(MI)(_DropdownItem)

export default DropdownItem
