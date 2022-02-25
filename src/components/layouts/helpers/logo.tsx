import styled from '@emotion/styled'

import { Link } from '@ui'
import { AppTheme } from '@theme/models'

type LogoProps = {
  color?: 'primary' | 'secondary' | 'tertiary'
  theme?: AppTheme
}

const StyledLogo = styled(Link)<Partial<LogoProps>>`
  align-items: center;
  border: 0;
  display: flex;
  flex-flow: row nowrap;
  height: 50%;
  width: auto;
  font-family: 'True lies', sans-serif !important;
  font-size: clamp(1.2rem, 2vw, 1.4rem) !important;
  color: ${({ theme, color = 'primary' }) => theme.mutatable.textColors[color]};
  transform: rotate(-4deg);
`

const Logo = ({ color }: LogoProps) => (
  <StyledLogo to='/' role='logo' color={color}>
    Easycalorie
  </StyledLogo>
)

export default Logo
