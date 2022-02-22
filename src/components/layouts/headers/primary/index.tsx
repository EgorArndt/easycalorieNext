import { FC, ReactNode } from 'react'

import { Box, BoxProps } from '@ui'
import s from './styles.module.scss'

type Header = {
  left?: ReactNode
  children?: ReactNode
  right?: ReactNode
} & BoxProps

export const Header: FC<Header> = ({
  left,
  children,
  right,
  ...props
}: Header) => (
  <header className={s.header}>
    <Box isAppContainer align={['space-between', 'center']} fullSize {...props}>
      {left}
      <div className={s.center}>{children}</div>
      <div className={s.right}>{right}</div>
    </Box>
  </header>
)
