import { Menu as _Menu, MenuProps, applyHOC } from '@szhsin/react-menu'

import { withStyles, WithStylesProps } from '../../hocs/with_styles'

const Menu = applyHOC(withStyles)<MenuProps & WithStylesProps>(_Menu, null, true)

export default Menu