import { FC } from 'react'
import cn from 'classnames'

import { Box, Checkbox, CheckboxProps, BoxProps } from '@ui'
import hamburger from './hamburger.module.scss'

export type HamburgerProps = BoxProps & CheckboxProps

const Hamburger: FC<HamburgerProps> = ({
  className,
  checked,
  id,
  value,
  disabled,
  onChange,
  ...boxProps
}: HamburgerProps) => (
  <div className={cn(className, hamburger.hamburger)}>
    <Checkbox
      className={hamburger.toggler}
      checked={checked}
      id={id}
      value={value}
      disabled={disabled}
      onChange={onChange}
    />
    <Box {...boxProps}></Box>
  </div>
)

export default Hamburger
