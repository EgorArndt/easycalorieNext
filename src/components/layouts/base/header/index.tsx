import { FC, ReactNode, ChangeEvent, Dispatch, SetStateAction } from 'react'

import { Box, BoxProps } from '@ui'
import { headerHeight } from '@layouts/constants'
import header from './header.module.scss'

export type HeaderBaseProps = {
  left?: ReactNode
  children?: ReactNode
  right?: ReactNode
} & BoxProps

const HeaderBase: FC<HeaderBaseProps> = ({
  left,
  children,
  right,
  ...props
}: HeaderBaseProps) => (
  <Box as='header' className={header.header} style={{ minHeight: headerHeight }} {...props}>
    <Box isAppContainer align={['space-between', 'center']} fullSize>
      {left}
      {children && <div className={header.center}>{children}</div>}
      {right && <Box gap='1.5rem' center>{right}</Box>}
    </Box>
  </Box>
)

export default HeaderBase
