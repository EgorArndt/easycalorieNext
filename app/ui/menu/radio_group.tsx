import { MenuRadioGroup as _MenuRadioGroup, MenuRadioGroupProps, applyHOC } from '@szhsin/react-menu'

import { withStyles, WithStylesProps } from '../../hocs/with_styles'

const MenuRadioGroup = applyHOC(withStyles)<MenuRadioGroupProps & WithStylesProps>(_MenuRadioGroup, null, true)

export default MenuRadioGroup
