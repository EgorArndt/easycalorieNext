import { ReactNode, FC, CSSProperties, RefObject } from 'react'
import styled from '@emotion/styled'

import { withStyles, WithStylesProps } from '@hocs'

type BoxProps = {
  children?: ReactNode
  className?: string
  style?: CSSProperties
  componentRef?: RefObject<HTMLDivElement>
  [key: string]: unknown
}

export type EnhancedBoxProps = BoxProps & WithStylesProps

const StyledBox = styled.div<Partial<BoxProps>>`
  display: flex;
`

const _Box: FC<BoxProps> = ({ children, componentRef, ...props }: BoxProps) => (
  <StyledBox ref={componentRef} {...props}>
    {children}
  </StyledBox>
)

const Box = withStyles<EnhancedBoxProps>(_Box, null, true)

export default Box
