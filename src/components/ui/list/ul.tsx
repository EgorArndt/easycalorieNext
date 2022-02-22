import { FC, ReactNode } from 'react'
import styled from '@emotion/styled'

import { withStyles, WithStylesProps } from '@hocs'

export type UlProps = {
  children: ReactNode | ReactNode[]
  className?: string
}

export type EnhancedUlProps = UlProps & WithStylesProps

const StyledUl = styled.ul<Partial<UlProps>>`
  display: flex;
  overflow: hidden;
  position: relative;
`

const _Ul: FC<UlProps> = ({ children, ...props }: UlProps) => (
  <StyledUl {...props}>{children}</StyledUl>
)

export const Ul = withStyles<EnhancedUlProps>(_Ul, null, true)
