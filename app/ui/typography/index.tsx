import React, { FC, ReactNode, CSSProperties, ElementType } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { withStyles, WithStylesProps } from '../../hocs/with_styles'
import { AppTheme } from '../../../styles/theme/models'

type TypographyProps = {
    children: ReactNode 
    weight?: CSSProperties['fontWeight']
    bold?: boolean
    title?: boolean
    subtitle?: boolean
    as?: ElementType
    textAlign?: CSSProperties['textAlign']
} 

const StyledTypography = styled.span<Partial<TypographyProps> & {_title?: boolean}>`
    display: inline-flex;
    align-items: center;
    line-height: 150%;
    height: auto !important;
    position: relative;
    ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}
    ${({ _title, theme }) => _title && css`font-size: ${(theme as AppTheme).readonly.fontSize('title')}`};
    ${({ subtitle, theme }) => subtitle && css`
            font-size: ${(theme as AppTheme).readonly.fontSize('subtitle1')};
            ${(theme as AppTheme).readonly.spacing({mt: 0.5, mb: 1.5})}
        `
    }
    ${({ weight, bold }) => (weight || bold) && css`font-weight: ${weight || 'bolder'}`};
`

const _Typography: FC<TypographyProps> = ({ children, as, title, ...props }: TypographyProps) => (
   <StyledTypography 
        as={as ? as : title ? 'h3' : 'span'} 
        _title={title} 
        {...props}
   > 
        {children} 
   </StyledTypography> 
) 

const Typography = withStyles<TypographyProps & WithStylesProps>(_Typography)

export default Typography