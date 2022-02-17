import { FC, ReactNode } from 'react'
import styled from '@emotion/styled'

import { Box, Typography } from '@ui'
import { withStyles, WithStylesProps } from '../../hocs/with_styles'
import { AppTheme } from '../../../styles/theme/models'

type HeaderProps = {
    title?: string
    children?: ReactNode
    bold?: boolean
}

const StyledHeader = styled.header`
    padding-block: 1rem;
    max-height: 60px;
    max-width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: ${({ theme }) => `1px solid ${(theme as AppTheme).mutatable.border}`};
`

const _Header: FC<HeaderProps> = ({ title, children, bold, ...props }: HeaderProps) => (
    <StyledHeader {...props}>
        {title && 
            <Typography noWrap color='secondary' fontSize='header' align='left' bold={bold}> {title} </Typography>
        }
        {children &&
            <Box align={['right', 'center']}> 
                {children} 
            </Box> 
        } 
    </StyledHeader>
)

const Header = withStyles<HeaderProps & WithStylesProps>(_Header, null, true)

export default Header