import { MenuItem as _MenuItem, MenuItemProps, applyHOC } from '@szhsin/react-menu'

import { withStyles, WithStylesProps } from '../../hocs/with_styles'

const MenuItem = applyHOC(withStyles)<MenuItemProps & WithStylesProps>(_MenuItem)

export default MenuItem