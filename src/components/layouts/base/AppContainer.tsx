import { FC } from 'react'
import cn from 'classnames'

import { Box, BoxProps } from '@ui'
import { appWidth } from '@layouts/constants'
import { useBreakpoints } from '@hooks'

/**
 * Restricts your contents to app width and
 * and places them in the center
 */

const AppContainer: FC<BoxProps> = ({
  children,
  className,
  ...props
}: BoxProps) => {
  const { isS, isXs } = useBreakpoints()
  const isMobileSize = isS || isXs
  return (
    <Box className={cn('app-container', className)} {...props}>
      {children}
      <style global jsx>{`
        .app-container {
          max-width: ${isMobileSize ? '100%' : appWidth};
          margin-inline: auto;
        }
      `}</style>
    </Box>
  )
}

export default AppContainer
