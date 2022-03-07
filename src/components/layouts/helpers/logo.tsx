import styled from '@emotion/styled'

import { Link, LinkProps } from '@ui'
import { useAuth } from '@lib/auth'
import { AppTheme } from '@theme/models'
import routes from 'constants/routes'

type LogoProps = {
  color?: 'primary' | 'secondary' | 'tertiary'
  theme?: AppTheme
} & Partial<LinkProps>

const StyledLogo = styled(Link)<Partial<LogoProps>>`
  align-items: center;
  border: 0;
  display: flex;
  flex-flow: row nowrap;
  height: 50%;
  width: auto;
  font-family: 'True lies', sans-serif !important;
  font-size: clamp(1.3rem, 2vw, 1.4rem) !important;
  transform: rotate(-4deg);
`

const Logo = ({ to, color = 'primary', ...props }: LogoProps) => {
  const { user } = useAuth()

  return (
    <StyledLogo
      role='logo'
      to={to || user ? routes.dashboard : '/'}
      color={color}
      {...props}
    >
      Easycalorie
    </StyledLogo>
  )
}

export default Logo
