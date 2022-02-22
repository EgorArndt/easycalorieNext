import {
  MenuRadioGroup as _MenuRadioGroup,
  MenuRadioGroupProps,
  applyHOC,
} from '@szhsin/react-menu'

import { withStyles, WithStylesProps } from '@hocs'

export type EnhancedRadioGroupProps = MenuRadioGroupProps & WithStylesProps

const MenuRadioGroup = applyHOC(withStyles)<EnhancedRadioGroupProps>(
  _MenuRadioGroup,
  null,
  true
)

export default MenuRadioGroup
