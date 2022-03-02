import { FC, ReactNode } from 'react'

import { Box, Typography, BoxProps } from '@ui'
import { useBreakpoints } from '@hooks'

type BannerProps = {
  title?: string
  subtext?: string
  children?: ReactNode
} & BoxProps

const Banner: FC<BannerProps> = ({
  title,
  subtext,
  children,
  ...props
}: BannerProps) => {
  const { isS, isXs } = useBreakpoints()
  const isMobileSize = isS || isXs
  return (
    <Box
      wrap
      borrowPaletteFrom='button'
      palette='primary'
      center
      gap={isMobileSize ? '3rem' : '8rem'}
      spacing={{ py: 4, px: 2 }}
      {...props}
    >
      <Box column center={isMobileSize}>
        <Typography
          fontSize='header'
          weight={700}
          style={{ letterSpacing: -3 }}
        >
          {title}
        </Typography>
        <Typography color='disabled'>{subtext}</Typography>
      </Box>
      {children}
    </Box>
  )
}

export default Banner
