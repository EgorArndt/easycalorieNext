import { FC } from 'react'

import { Box, BoxProps } from '@ui'
import { mainId } from '@layouts/constants'

const Main: FC<BoxProps> = ({ children, ...props }: BoxProps) => (
  <Box as='main' id={mainId} style={{ position: 'relative' }} center>
    <Box isAppContainer column center {...props}>
      {children}
    </Box>
  </Box>
)

export default Main
