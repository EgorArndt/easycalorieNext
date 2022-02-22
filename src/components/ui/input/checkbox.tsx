import { FC } from 'react'

import { InputCommonProps } from './models'
import { withStyles, WithStylesProps } from '@hocs'

export type CheckboxProps = {} & InputCommonProps

export type EnhancedCheckboxProps = CheckboxProps & WithStylesProps

const _Checkbox: FC<CheckboxProps> = ({ id, ...props }: CheckboxProps) => (
  <input type='checkbox' id={id} name={id} {...props} />
)

const Checkbox = withStyles<EnhancedCheckboxProps>(_Checkbox)

export default Checkbox
