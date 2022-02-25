import { useState, FC, ChangeEvent, Dispatch, SetStateAction } from 'react'

import { withStyles, WithStylesProps } from '@hocs'

type OnChange = ChangeEvent<HTMLInputElement>

export type CheckboxProps = {
  checked?: boolean
  id?: string
  value?: string | number
  disabled?: boolean
  onChange?: (
    e: OnChange,
    setChecked: Dispatch<SetStateAction<boolean>>,
    checked: boolean
  ) => void
}

export type EnhancedCheckboxProps = CheckboxProps & WithStylesProps

const _Checkbox: FC<CheckboxProps> = ({
  checked = false,
  id,
  onChange,
  ...props
}: CheckboxProps) => {
  const [_checked, setChecked] = useState(checked)

  const onChangeHandler = (e: OnChange) =>
    onChange ? onChange(e, setChecked, _checked) : setChecked(!_checked)

  return (
    <input
      type='checkbox'
      id={id}
      name={id}
      onChange={onChangeHandler}
      checked={_checked}
      {...props}
    />
  )
}

const Checkbox = withStyles<EnhancedCheckboxProps>(_Checkbox)

export default Checkbox
