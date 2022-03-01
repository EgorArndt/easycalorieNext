import { FC, ReactNode } from 'react'

import { Box, BoxProps } from '@ui'
import { AppContainer } from '@layouts/base'
import { headerHeight, mainInlineSpacing } from '@layouts/constants'
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
  <Box
    as='header'
    className={header.header}
    style={{ minHeight: headerHeight, paddingInline: mainInlineSpacing }}
    {...props}
  >
    <AppContainer align={['space-between', 'center']} fullSize>
      {left}
      {children && <nav className={header.center}>{children}</nav>}
      {right && (
        <Box gap='1.5rem' center>
          {right}
        </Box>
      )}
    </AppContainer>
  </Box>
)

export default HeaderBase
