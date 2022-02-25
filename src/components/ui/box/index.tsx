import { ReactNode, FC, CSSProperties } from 'react'
import styled from '@emotion/styled'

import { withStyles, WithStylesProps } from '@hocs'
import { useBreakpoints } from '@hooks'

type BoxProps = {
  children?: ReactNode
  className?: string
  style?: CSSProperties
  isAppContainer?: boolean
  [key: string]: unknown
}

export type EnhancedBoxProps = BoxProps & WithStylesProps

const StyledBox = styled.div<Partial<BoxProps> & { isMobileSize: boolean }>`
  display: flex;
  ${({ isAppContainer, isMobileSize }) =>
    isAppContainer &&
    `
    max-width: ${isMobileSize ? '100%' : '1100px'};
    margin-inline: 2rem;
  `}
`

const _Box: FC<BoxProps> = ({ children, ...props }: BoxProps) => {
  const { isXs, isS } = useBreakpoints()
  const isMobileSize = isXs || isS

  return (
    <StyledBox isMobileSize={isMobileSize} {...props}>
      {children}
    </StyledBox>
  )
}

const Box = withStyles<EnhancedBoxProps>(_Box, null, true)

export default Box
