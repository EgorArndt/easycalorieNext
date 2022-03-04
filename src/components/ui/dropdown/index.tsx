import { FC, ReactElement } from 'react'

import { Menu, MenuProps } from '@ui'

export type DropdownProps = {
  trigger: ReactElement
} & Omit<MenuProps, 'menuButton'>

const Dropdown: FC<DropdownProps> = ({
  children,
  trigger,
  ...props
}: DropdownProps) => (
  <Menu
    offsetY={10}
    spacing={{ py: 0.5 }}
    palette='primary'
    transition
    boxShadow
    menuButton={trigger}
    {...props}
  >
    {children}
  </Menu>
)

export default Dropdown
