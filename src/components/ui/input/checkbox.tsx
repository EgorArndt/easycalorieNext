import { useState, FC, ChangeEvent, Dispatch, SetStateAction } from 'react'

import { withStyles, WithStylesProps } from '@hocs'

type OnChange = {
  e?: ChangeEvent<HTMLInputElement>
  setChecked?: Dispatch<SetStateAction<boolean>>
  checked?: boolean
}

export type CheckboxProps = {
  checked?: boolean
  id?: string
  value?: string | number
  disabled?: boolean
  onChange?: (arg: OnChange | unknown) => void
}

export type EnhancedCheckboxProps = CheckboxProps & WithStylesProps

const _Checkbox: FC<CheckboxProps> = ({
  checked,
  id,
  onChange,
  ...props
}: CheckboxProps) => {
  const [_checked, setChecked] = useState(false)

  const onChangeHandler = (e: OnChange['e']) =>
    onChange
      ? onChange({ e, setChecked, checked: _checked })
      : setChecked(!_checked)

  return (
    <input
      type='checkbox'
      id={id}
      name={id}
      onChange={onChangeHandler}
      checked={checked || _checked}
      {...props}
    />
  )
}

const Checkbox = withStyles<EnhancedCheckboxProps>(_Checkbox)

export default Checkbox
