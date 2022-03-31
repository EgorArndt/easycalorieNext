import { FC, RefObject, SyntheticEvent } from 'react'

import { withStyles, WithStylesProps } from '@hocs'

export type CheckboxProps = {
  checked: boolean
  id?: string
  value?: string | number
  disabled?: boolean
  onChange: (e: SyntheticEvent) => void
  componentRef?: RefObject<HTMLInputElement>
}

export type EnhancedCheckboxProps = CheckboxProps & WithStylesProps

const _Checkbox: FC<CheckboxProps> = ({
  checked,
  id,
  onChange,
  componentRef,
  ...props
}: CheckboxProps) => (
  <input
    type='checkbox'
    id={id}
    name={id}
    onChange={onChange}
    checked={checked}
    ref={componentRef}
    {...props}
  />
)

const Checkbox = withStyles<EnhancedCheckboxProps>(_Checkbox)

export default Checkbox
