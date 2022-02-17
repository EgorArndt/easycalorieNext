import { SubMenu as _SubMenu, SubMenuProps, applyHOC } from '@szhsin/react-menu'

import { withStyles, WithStylesProps } from '../../hocs/with_styles'

const SubMenu = applyHOC(withStyles)<SubMenuProps & WithStylesProps>(_SubMenu, null, true)

export default SubMenu