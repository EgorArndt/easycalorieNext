import { ReactNode, FC, CSSProperties } from 'react'
import styled from '@emotion/styled'

import { withStyles, WithStylesProps } from '@hocs'

type BoxProps = {
  children?: ReactNode
  className?: string
  style?: CSSProperties
  isAppContainer?: boolean
  [key: string]: unknown
}

export type EnhancedBoxProps = BoxProps & WithStylesProps

const StyledBox = styled.div<Partial<BoxProps>>`
  display: flex;
  ${({ isAppContainer }) =>
    isAppContainer &&
    `
    max-width: 1100px;
    margin-inline: 2rem;
  `}
`

const _Box: FC<BoxProps> = ({ children, className, ...props }: BoxProps) => (
  <StyledBox className={className} {...props}>
    {children}
  </StyledBox>
)

const Box = withStyles<EnhancedBoxProps>(_Box, null, true)

export default Box
