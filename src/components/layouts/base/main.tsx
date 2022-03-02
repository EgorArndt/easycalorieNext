import { FC } from 'react'

import { Box, BoxProps } from '@ui'
import { mainId, mainInlineSpacing } from '@layouts/constants'

/**
 * Contains everything between header and footer
 * and gives your contents preset padding inline
 * which comes in handy on mobile screens
 */

const Main: FC<BoxProps> = ({ children, ...props }: BoxProps) => (
  <Box
    as='main'
    id={mainId}
    style={{ position: 'relative', paddingInline: mainInlineSpacing }}
    {...props}
  >
    {children}
  </Box>
)

export default Main
