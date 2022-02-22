import { FC, ReactNode } from 'react'
import styled from '@emotion/styled'

import { withStyles, WithStylesProps } from '@hocs'

type FooterProps = {
  children?: ReactNode | ReactNode[]
  className?: string
}

export type EnhacedFooterProps = FooterProps & WithStylesProps

const StyledFooter = styled.footer`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 2rem;
`

const _Footer: FC<FooterProps> = ({ children, ...props }: FooterProps) => (
  <StyledFooter {...props}>{children}</StyledFooter>
)

const Footer = withStyles<EnhacedFooterProps>(_Footer, null, true)

export default Footer
