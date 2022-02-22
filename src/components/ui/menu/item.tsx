import {
  MenuItem as _MenuItem,
  MenuItemProps,
  applyHOC,
} from '@szhsin/react-menu'

import { withStyles, WithStylesProps } from '@hocs'

export type EnhancedMenuItemProps = MenuItemProps & WithStylesProps

const MenuItem = applyHOC(withStyles)<EnhancedMenuItemProps>(_MenuItem)

export default MenuItem
