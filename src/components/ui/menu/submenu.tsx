import { SubMenu as _SubMenu, SubMenuProps, applyHOC } from '@szhsin/react-menu'

import { withStyles, WithStylesProps } from '@hocs'

export type EnhancedSubmenuProps = SubMenuProps & WithStylesProps

const SubMenu = applyHOC(withStyles)<EnhancedSubmenuProps>(_SubMenu, null, true)

export default SubMenu
