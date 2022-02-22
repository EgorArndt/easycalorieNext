import { Menu as _Menu, MenuProps, applyHOC } from '@szhsin/react-menu'

import { withStyles, WithStylesProps } from '@hocs'

export type EnhancedMenuProps = MenuProps & WithStylesProps

const Menu = applyHOC(withStyles)<EnhancedMenuProps>(_Menu, null, true)

export default Menu
